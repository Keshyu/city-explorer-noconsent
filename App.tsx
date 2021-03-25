import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, Button, View, FlatList, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import PlaceCard from './src/PlaceCard'
import locations, { initialRegion } from './src/locations'
import keys from './secrets/keys.ts'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
  });

  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const handleMapDrag = useCallback(({ nativeEvent: { coordinate, position }}) => {
    // TODO: Limit panning area
  }, []);

  const origin = {latitude: 55.7510904, longitude: 37.5744204};
  const destination = {latitude: 55.7581909, longitude: 37.608713};

  if (!fontsLoaded)
    return ( <AppLoading /> );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={initialRegion}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        onPanDrag={handleMapDrag}
        onRegionChangeComplete={(region) => console.log(region)}
        minZoomLevel={13}
      >
        { getRoutes(locations).map(([origin, destination], index) => (
          <MapViewDirections
            key={index.toString()}
            origin={origin.coordinate}
            destination={destination.coordinate}
            apikey={keys.GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor={origin.color}
          />
        ))}

        { locations.map((location, index) => (
          <MapView.Marker
            key={index.toString()}
            coordinate={location.coordinate}
            pinColor={location.color}
          >
            <MapView.Callout
              style={styles.placeCallout}
              tooltip
            >
              <Text style={styles.calloutText}>{location.name}</Text>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>

      <BottomSheet
        style={styles.bottomSheet}
        ref={bottomSheetRef}
        index={0}
        snapPoints={['15%', '45%']}
      >
        <Text style={styles.sheetTitle}>Уровни</Text>

        <FlatList
          data={locations}
          renderItem={({ item, index }) => (
            <PlaceCard
              name={item.name}
              level={index + 1}
              coordinate={item.coordinate}
              color={item.color}
              dark={item.dark || false}
              mapRef={mapRef}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </BottomSheet>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  placeCallout: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  calloutText: {
    fontFamily: 'OpenSans',
    maxWidth: 220,
  },
  bottomSheet: {
    flex: 1,
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.3,
    shadowRadius: 24
  },
  sheetTitle: {
    marginTop: 32,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 18,
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    fontWeight: 'bold'
  },
});

function getRoutes(locations): Array<Array<LatLng>> {
  return locations.reduce((result, value, index, array) => {
    if (index < locations.length - 1)
      result.push(array.slice(index, index + 2));

    return result;
  }, []);
}

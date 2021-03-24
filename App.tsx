import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, Button, View, FlatList, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import PlaceCard from './src/PlaceCard'
import locations from './src/locations'

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const handleMapDrag = useCallback(({ nativeEvent: { coordinate, position }}) => {
    // console.log(coordinate);
  }, []);

  const origin = {latitude: 55.7510904, longitude: 37.5744204};
  const destination = {latitude: 55.7581909, longitude: 37.608713};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDXTA6sJCAyBHrqppAWa9zhkTVVl9sabUQ';

  let [o, d] = getRoutes(locations)[0];
  console.log(o.coordinate);
  console.log(d.coordinate);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        onPanDrag={handleMapDrag}
        minZoomLevel={13}
      >
        { getRoutes(locations).map(([origin, destination], index) => (
          <MapViewDirections
            key={index.toString()}
            origin={origin.coordinate}
            destination={destination.coordinate}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor={origin.color}
          />
        ))}

        { locations.map((location, index) => (
          <MapView.Marker
            key={index.toString()}
            title={location.name}
            coordinate={location.coordinate}
            pinColor={location.color}
          />
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

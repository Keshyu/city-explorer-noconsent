import React, { useCallback, useRef, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View, FlatList, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import PlaceCard from './src/PlaceCard';
import LevelList from './src/LevelList';
import Article from './src/Article';
import locations, { initialRegion, mapBoundaries } from './src/locations';
import keys from './secrets/keys.ts';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    'OpenSans-Italic': require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),
  });

  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const handleMapReady = useCallback(() => {
    mapRef.current.setMapBoundaries(
      mapBoundaries.northEast,
      mapBoundaries.southWest
    );
  }, []);

  if (!fontsLoaded)
    return ( <AppLoading /> );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={initialRegion}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        onMapReady={handleMapReady}
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
        snapPoints={['15%', '45%', '90%']}
      >
        <NavigationContainer>
          <Stack.Navigator style={styles.navContainer}
            initialRouteName="LevelList"
            screenOptions={{
              headerShown: false,
              cardStyle: {
                backgroundColor: '#fff',
              }
            }}
          >
            <Stack.Screen name="LevelList">
              {props => <LevelList {...props} mapRef={mapRef} />}
            </Stack.Screen>
            <Stack.Screen name="Article" component={Article} />

          </Stack.Navigator>
        </NavigationContainer>
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
    shadowRadius: 24,
  },
  navContainer: {
    backgroundColor: '#fff',
  },
});

function getRoutes(locations): Array<Array<LatLng>> {
  return locations.reduce((result, value, index, array) => {
    if (index < locations.length - 1)
      result.push(array.slice(index, index + 2));

    return result;
  }, []);
}

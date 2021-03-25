import React, { useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PlaceCard from './PlaceCard';
import locations from './locations';

export default function LevelList({ navigation, mapRef }) {
  const handleLevelEnter = useCallback((article) => {
    navigation.navigate('Article', { id: article });
  }, [navigation]);

  return (
    <View>
      <Text style={styles.title}>Уровни</Text>

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
            onLevelEnter={handleLevelEnter}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 18,
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    fontWeight: 'bold'
  },
  footer: {
    height: 300,
  },
});

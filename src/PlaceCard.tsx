import React, { useCallback } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function PlaceCard({ mapRef, name, level, coordinate, color, dark }) {
  const handleCardPress = useCallback(() => {
    mapRef.current.pointForCoordinate(coordinate)
      .then((point) => {
        const shiftedPoint = { x: point.x, y: point.y + 70 };
        return mapRef.current.coordinateForPoint(shiftedPoint);
      })
      .then((shiftedCoordinate) => {
        mapRef.current.animateCamera(
          {
            center: shiftedCoordinate,

          },
          { duration: 500 },
        );
      });
  }, [coordinate]);

  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <Text style={{...styles.level, ...{ color: (dark ? '#000' : '#fff') }}}>
        {level} уровень
      </Text>
      <Button
        styles={styles.button}
        onPress={handleCardPress}
        title={name}
        color={dark ? '#000' : '#fff' }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  level: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
  button: {
    fontSize: 18,
    marginBottom: 20,
  },
});

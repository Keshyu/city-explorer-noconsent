import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import locations from './locations';

export default function PlaceCard({ mapRef, name, level, coordinate, color, dark, onLevelEnter }) {
  const article = locations[level - 1].article;

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
      })
      .catch((e) => console.log(e));
  }, [coordinate]);

  const handlePreLevelEnter = useCallback(() => {
    if (article) {
      onLevelEnter(article);
    }
  }, article);

  const startLevel = <Text style={themedStyle(styles.playText, dark)}>Начать уровень</Text>;
  const levelLocked = <Text style={themedStyle(styles.playText, dark)}>Уровень заблокирован</Text>;

  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: color}}
      onPress={handleCardPress}
    >
      <Text style={themedStyle(styles.level, dark)}>
        {level} уровень
      </Text>
      <Text style={themedStyle(styles.title, dark)}>
        {name}
      </Text>
      <TouchableOpacity
        style={{...styles.playButton, backgroundColor: color }}
        onPress={handlePreLevelEnter}
      >
        { article ? startLevel : levelLocked }
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#fff',
  },
  level: {
    flex: 1,
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  title: {
    flex: 1,
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginBottom: 6,
  },
  playButton: {
    flexShrink: 1,
    backgroundColor: '#88ff88',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-end',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  playText: {

  },
});

function themedStyle(style, dark: boolean) {
  return {...style, ...{ color: (dark ? '#000' : '#fff') }};
}

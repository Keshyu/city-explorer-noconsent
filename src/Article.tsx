import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Articles from './Articles';

export default function Article({ route }) {
  const { id } = route.params;
  const article = Articles[id];

  return (
    <View>
      <View style={styles.header} />
      <ScrollView style={styles.container}>
        { article &&
          article()
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    height: 40,
  },
});

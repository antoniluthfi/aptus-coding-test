import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Tab1() {
  return (
    <View style={styles.container}>
      <Text>Tab1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

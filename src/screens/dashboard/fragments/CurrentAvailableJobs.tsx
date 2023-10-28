import BgCurrentAvailableJobs from 'src/assets/images/img_job.png';
import React from 'react';
import {colors, fonts} from 'src/utils/constants';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function CurrentAvailableJobs() {
  return (
    <View style={styles.container}>
      <Image
        source={BgCurrentAvailableJobs}
        style={styles.bgImage}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Current Available</Text>
        <Text style={styles.totalJobs}>1234</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange[400],
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 12,
  },
  bgImage: {width: 150, height: 90, position: 'absolute', right: 0},
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    color: colors.white[50],
    fontSize: 14,
    fontFamily: fonts['DMSans-Medium'],
  },
  totalJobs: {
    color: colors.white[100],
    fontSize: 32,
    fontFamily: fonts['DMSans-Medium'],
  },
});

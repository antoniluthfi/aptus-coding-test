import CurrentAvailableJobs from './CurrentAvailableJobs';
import JobList from './JobList';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ActiveJobs() {
  return (
    <View style={styles.container}>
      <CurrentAvailableJobs />
      <JobList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

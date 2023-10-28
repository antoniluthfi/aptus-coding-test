import IcDateChecked from 'src/assets/icons/ic_date_checked.svg';
import IcPinPoint from 'src/assets/icons/ic_pinpoint.svg';
import jobs from 'src/assets/data/jobs.json';
import React from 'react';
import {colors, fonts} from 'src/utils/constants';
import {enUS} from 'date-fns/locale';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {format, parseISO} from 'date-fns';
import {Jobs} from '../dashboard.interface';

export default function JobList() {
  const renderItem = ({item}: {item: Jobs}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <View style={styles.titleSection}>
            <View style={styles.dateContainer}>
              <IcDateChecked />
              <Text style={styles.createdDate}>
                {format(parseISO(item.created), 'd MMMM yyyy', {locale: enUS})}
              </Text>
            </View>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.companyName}>{item.company_name}</Text>

            {item.salary ? (
              <Text style={styles.salary}>{item.salary}</Text>
            ) : null}

            <View style={styles.locationContainer}>
              <IcPinPoint />
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
          <View style={styles.companyLogoSection}>
            <Image
              source={{uri: item.company_logo}}
              style={styles.companyLogo}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.description}>
          {item.description.length > 144
            ? `${item.description.slice(0, 144)}...`
            : item.description}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={jobs as Jobs[]}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => `job-component-${index}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 10,
    paddingBottom: 50,
  },
  itemContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white[100],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(231, 231, 231, 0.80)',
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  titleSection: {
    flexBasis: '60%',
  },
  dateContainer: {
    backgroundColor: colors.orange[400],
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  createdDate: {
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 10,
    color: colors.white[100],
  },
  jobTitle: {
    marginTop: 12,
    fontFamily: fonts['DMSans-Medium'],
    fontSize: 18,
    color: colors.black[900],
  },
  companyLogoSection: {
    width: 102,
    height: 102,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    overflow: 'hidden',
  },
  companyLogo: {width: '100%', height: '100%'},
  companyName: {
    marginTop: 4,
    fontFamily: fonts['DMSans-Regular'],
    fontSize: 16,
    color: colors.black[400],
  },
  salary: {
    marginTop: 16,
    fontFamily: fonts['DMSans-Bold'],
    fontSize: 14,
    color: colors.orange[400],
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  location: {
    fontFamily: fonts['DMSans-Regular'],
    fontSize: 14,
    color: colors.black[300],
  },
  description: {
    fontFamily: fonts['DMSans-Regular'],
    fontSize: 14,
    color: colors.black[300],
    marginTop: 16,
  },
});

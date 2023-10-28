import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fonts} from 'src/utils/constants';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

export default function TopTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={isFocused ? styles.focusedButtonTab : styles.buttonTab}>
            <Text style={isFocused ? styles.focusedText : styles.unfocusedText}>
              {options.tabBarLabel as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 31,
    gap: 24,
    backgroundColor: colors.white[100],
    paddingTop: 18,
  },
  buttonTab: {alignItems: 'center', paddingVertical: 10},
  focusedButtonTab: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.orange[400],
  },
  focusedText: {
    color: colors.orange[400],
    fontSize: 14,
    fontFamily: fonts['DMSans-Medium'],
  },
  unfocusedText: {
    color: colors.black[300],
    fontSize: 14,
    fontFamily: fonts['DMSans-Regular'],
  },
});

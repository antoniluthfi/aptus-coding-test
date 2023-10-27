import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import Home from '../screens/Home';
import IcDashboard from '../assets/icons/ic_dashboard.svg';
import IcDashboardActive from '../assets/icons/ic_dashboard_active.svg';
import IcHistory from '../assets/icons/ic_history.svg';
import IcHistoryActive from '../assets/icons/ic_history_active.svg';
import IcHome from '../assets/icons/ic_home.svg';
import IcHomeActive from '../assets/icons/ic_home_active.svg';
import IcProfile from '../assets/icons/ic_profile.svg';
import IcProfileActive from '../assets/icons/ic_profile_active.svg';
import IcSearch from '../assets/icons/ic_search.svg';
import IcSearchActive from '../assets/icons/ic_search_active.svg';
import Profile from '../screens/Profie';
import React from 'react';
import Search from '../screens/Search';
import {colors} from '../utils/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            if (focused) {
              return <IcHomeActive />;
            }

            return <IcHome />;
          }

          if (route.name === 'History') {
            if (focused) {
              return <IcHistoryActive />;
            }

            return <IcHistory />;
          }

          if (route.name === 'Dashboard') {
            if (focused) {
              return <IcDashboardActive />;
            }

            return <IcDashboard />;
          }

          if (route.name === 'Search') {
            if (focused) {
              return <IcSearchActive />;
            }

            return <IcSearch />;
          }

          if (route.name === 'Profile') {
            if (focused) {
              return <IcProfileActive />;
            }

            return <IcProfile />;
          }

          return null;
        },
        tabBarActiveTintColor: colors.black[900],
        tabBarInactiveTintColor: colors.black[300],
        tabBarStyle: {
          paddingVertical: 14
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

import ActiveJobs from '../fragments/ActiveJobs';
import Tab1 from '../fragments/Tab1';
import Tab3 from '../fragments/Tab3';
import TopTabBar from '../fragments/TopTabBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TopTabBar {...props} />}
      initialRouteName="ActiveJobs">
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Tab 1',
        }}
      />
      <Tab.Screen
        name="ActiveJobs"
        component={ActiveJobs}
        options={{
          tabBarLabel: 'Active Jobs',
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Tab 3',
        }}
      />
    </Tab.Navigator>
  );
}

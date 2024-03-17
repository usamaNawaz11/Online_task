import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Event from '../Confrence/Event';
import Network from '../Confrence/Network';
import Message from '../Confrence/Message';
import Sponsor from '../Confrence/Sponsor';
import PlatinumScreen from '../Confrence/PlatinumScreen';
import GoldScreen from '../Confrence/GoldScreen';
import SilverScreen from '../Confrence/SilverScreen';
import BronzeScreen from '../Confrence/BronzeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Platinum"
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'black',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: 'green' },
      }}
    >
      <TopTab.Screen name="Platinum" component={PlatinumScreen} />
      <TopTab.Screen name="Gold" component={GoldScreen} />
      <TopTab.Screen name="Silver" component={SilverScreen} />
      <TopTab.Screen name="Bronze" component={BronzeScreen} />
    </TopTab.Navigator>
  );
}

function Bottom_stack_top() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="event"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'event') {
              iconName = focused ? 'calendar-outline' : 'calendar';
            } else if (route.name === 'network') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'sponsor') {
              iconName = focused ? 'cash-outline' : 'cash';
            } else if (route.name === 'message') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbox-ellipses-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="event" component={Event} options={{ headerShown: false }} />
        <Tab.Screen name="network" component={Network} options={{ headerShown: false }} />
        <Tab.Screen name="message" component={Message} options={{ headerShown: false }} />
        <Tab.Screen name="sponsor" component={TopTabNavigator} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Bottom_stack_top;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'home';
          if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Send') {
            iconName = focused ? 'send' : 'send-outline';
          } else if (route.name === 'Receive') {
            iconName = focused ? 'arrow-down' : 'arrow-down-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen name="Wallet" component={() => null} options={{ title: 'Wallet' }} />
      <Tab.Screen name="Send" component={() => null} options={{ title: 'Send' }} />
      <Tab.Screen name="Receive" component={() => null} options={{ title: 'Receive' }} />
      <Tab.Screen name="Settings" component={() => null} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
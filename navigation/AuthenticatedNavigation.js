import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import ChatScreen from '../screens/ChatScreen';
import Header from '../component/Header';

const tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName={'Main'}
      screenOptions={{
        header: props => <Header {...props} />,
        tabBarActiveTintColor: '#a100f2',
      }}>
      <tab.Screen
        name={'Main'}
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-sharp" size={size} color={color} />,
        }}
      />
      <tab.Screen
        name={'Chat'}
        component={ChatScreen}
        options={{
          tabBarLabel: 'Messages',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

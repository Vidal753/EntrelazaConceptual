import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Header from '../component/Header';

const tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        header: props => <Header {...props} />,
        tabBarActiveTintColor: '#a100f2',
      }}>
      <tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
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

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

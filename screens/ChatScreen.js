import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export default function() {
  return (
    <View>
      <Text>ChatScreen</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
    </View>
  );
}

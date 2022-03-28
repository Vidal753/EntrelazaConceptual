import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function() {
  const choices = useSelector(reducer => reducer.choice.choice);
  return (
    <View>
      <Text>ChatScreen</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <FlatList data={choices} renderItem={({ item, index }) => <Text>{item.choice}</Text>} />
    </View>
  );
}

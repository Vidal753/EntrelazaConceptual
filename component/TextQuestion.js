import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constant/Colors';
import TextInput from './TextInput';

const makeStyles = function(color) {
  return StyleSheet.create({
    containerTextQuestion: {
      margin: 14,
      paddingVertical: 35,
      paddingHorizontal: 15,
      borderRadius: 15,
      borderColor: color.surface,
      borderWidth: 3,
    },
  });
};

export default function(props) {
  const color = { ...colors };
  const style = makeStyles(color);
  return (
    <View style={style.containerTextQuestion}>
      <Text style={{ textAlign: 'center' }}>{props.question.quest}</Text>
      <TextInput
        placeholder={'Escribir'}
        multiline
        containerStyle={{ height: 150 }}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

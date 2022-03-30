import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioButton from './RadioButton';
import { colors } from '../Constant/Colors';

const makeStyles = function(color) {
  return StyleSheet.create({
    containerRadioQuestion: {
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
    <View style={style.containerRadioQuestion}>
      <Text style={{ textAlign: 'center' }}>{props.question.quest}</Text>
      <RadioButton
        selected={props.selected}
        options={props.options}
        onChangeSelect={props.onChangeSelect}
        vertical
      />
    </View>
  );
}

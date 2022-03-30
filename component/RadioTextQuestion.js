import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constant/Colors';
import TextInput from './TextInput';
import RadioButton from './RadioButton';

const makeStyles = function(color) {
  return StyleSheet.create({
    containerRadioTextQuestion: {
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
    <View>
      <View style={style.containerRadioTextQuestion}>
        <Text style={{ textAlign: 'left' }}>
          {props.question.num}.{props.question.quest}
        </Text>
        <RadioButton
          selected={props.selected}
          options={props.options}
          onChangeSelect={props.onChangeSelect}
          vertical
        />
        <TextInput
          placeholder={'Si contesta "No", explique...'}
          containerStyle={{ borderRadius: 25 }}
        />
      </View>
    </View>
  );
}

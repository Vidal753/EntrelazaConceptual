import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constant/Colors';
import RadioButton from './RadioButton';

const makeStyles = function(color) {
  return StyleSheet.create({
    containerImageQuestion: {
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
    <View style={style.containerImageQuestion}>
      <Text style={{ textAlign: 'center' }}>{props.question.quest}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image source={require('../assets/icon.png')} style={{ width: '40%', height: '100%' }} />
        <RadioButton
          selected={props.selected}
          options={props.options}
          onChangeSelect={props.onChangeSelect}
          vertical
          verticalPosition
        />
      </View>
    </View>
  );
}

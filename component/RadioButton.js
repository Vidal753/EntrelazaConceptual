import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../Constant/Colors';

const makeStyles = function(color) {
  return StyleSheet.create({
    radioContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
      color: 'black',
      padding: 10,
    },
    buttonOff: {
      width: 30,
      height: 30,
      borderRadius: 30,
      borderColor: color.surface,
      borderWidth: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.accent,
    },
    buttonOn: {
      width: 18,
      height: 18,
      borderRadius: 10,
      backgroundColor: color.card,
      borderColor: color.card,
      borderWidth: 2,
    },
  });
};

const RadioButton = ({ options = [], onChangeSelect, selected, vertical }) => {
  const color = { ...colors };
  const styles = makeStyles(color);
  return (
    <View style={styles.radioContainer}>
      {options.map((opt, index) => (
        <TouchableOpacity
          onPress={() => onChangeSelect(opt, index)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: vertical === true ? 'column' : 'row',
          }}>
          <Text style={styles.text}>{opt}</Text>
          <View style={styles.buttonOff}>
            {selected === index && <View style={styles.buttonOn} />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Constant/Colors';

const makeStyles = function(colors, props) {
  return StyleSheet.create({
    container: {
      minHeight: hp(5.5),
      minWidth: wp(75),
      margin: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: props.multiple ? hp(10) : 10,
      borderColor: colors.surface,
      borderWidth: 2,
      ...props.containerStyle,
    },
    TextInput: {
      padding: 7,
      width: '100%',
      fontSize: hp(2),
      color: colors.card,
      ...props.style,
    },
    securityEntry: {
      position: 'absolute',
      right: 15,
      top: hp(1.5),
    },
  });
};

export default function(props) {
  const color = { ...colors };
  const styles = makeStyles(color, props);
  const [securityEntry, setSecurityEntry] = useState(props.securityEntry || false);

  const renderSecurityText = () => {
    const onPress = () => setSecurityEntry(!securityEntry);
    return props.securityEntry ? (
      <TouchableOpacity onPress={onPress} style={styles.securityEntry}>
        <FontAwesome5
          name={securityEntry ? 'eye-slash' : 'eye'}
          size={24}
          color={props.color ? props.color : colors.card}
        />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.TextInput, props.style]}
        secureTextEntry={securityEntry}
        {...props}
      />
      {renderSecurityText()}
    </View>
  );
}

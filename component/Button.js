import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../Constant/Colors';

const makeStyles = function(colors) {
  return StyleSheet.create({
    container: {
      width: wp(60),
      height: hp(4.5),
      margin: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: hp(4.5),
    },
  });
};

export default function(props) {
  const color = { ...colors };
  const styles = makeStyles(color, props);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={{ color: color.background, fontSize: 20 }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

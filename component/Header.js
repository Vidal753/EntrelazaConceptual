import React, { Fragment } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Constant/Colors';

const Header = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const color = { ...colors };
  let styles = makeStyles(color);

  return (
    <Fragment>
      <View style={[styles.container, options.headerStyle]}>
        {back ? (
          <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
            <FontAwesome name="chevron-left" size={hp(3)} color={'white'} />
          </TouchableOpacity>
        ) : (
          <View style={styles.button} />
        )}
        <Text style={{ fontSize: 25, color: color.background }}>{title}</Text>
        <View style={styles.button} />
      </View>
    </Fragment>
  );
};

function makeStyles(color) {
  return StyleSheet.create({
    container: {
      backgroundColor: color.card,
      height: hp(12),
      width: wp(100),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: hp(2),
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height: '100%',
      width: wp(100),
    },
    button: {
      minWidth: wp(10),
      minHeight: 14,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
}

export default Header;

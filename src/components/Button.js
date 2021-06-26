import React from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { themebg, themefg } from '../utils/colors';

export default function ButtonComponent({text, color, bg, onPress, weight}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonStyle, {backgroundColor: bg ? bg : themebg}]}>
      <Text
        style={[styles.text,{
          fontWeight: weight ? weight : '600',
          color: color ? color : themefg,
        }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 22,
  },
  text: {
      fontFamily: 'Nunito',
    textAlign: 'center',
    fontSize: 15
  },
});

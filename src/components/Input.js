import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Image} from 'react-native';
import {themebg} from '../utils/colors';
import {icons} from '../utils/icons';

export default function InputComponent({icon, type, secure, placeholder}) {
  const [val, setVal] = useState('');
  return (
    <View style={styles.inputBox}>
      <Text>AS</Text>
      {/* <Image source={icons.mail} style={{borderRightWidth: 1, borderColor: themebg}} /> */}
      <TextInput
        value={val}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
        onChangeText={v => {
          setVal(v);
        }}
        password={true}
        secureTextEntry={secure}
        autoCompleteType="password"
        textContentType="password"
        //   inlineImageLeft={icons.mail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    height: 40,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: themebg,
  },
  inputField: {},
});

// 1. bishal, 2. api, 3 ecommerce,

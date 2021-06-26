import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { purple, themebg, themefg, white } from '../utils/colors'
import {icons} from '../utils/icons';

export default function login({navigation}) {
    return (
        <View>
            <Text>LOGIN PAGE</Text>
        <View style={{width: '60%', marginHorizontal: '20%'}}>
            <Input type="" placeholder="Your Name" secure={false} icon={icons.mail} />
            <Input type="" />
            <Input type="numeric" placeholder="Phone Number" />
            <Button onPress={()=>navigation.navigate('Register')} text="Register Here" color={themefg} bg={themebg}></Button>
        </View>
        </View>
    )
}

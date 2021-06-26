import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import Home from './src/screens/Home';
const Stack = createStackNavigator();
//initialRouteName="Login"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen
          name="Home"
         // component={AppComponent}
         component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


function AppComponent({navigation}) {
  return (
    <View style={styles.container}>
      <Text> HELLO WORKD </Text>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        title="LOGIN"
      />
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
        title="Register"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react'
import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import {TabView,TabBar ,SceneMap} from 'react-native-tab-view'
import login from './login'
import register from './register'
import test from './test' 



const Home = () => {
    const layout=useWindowDimensions();
    const [index, setIndex] = useState(0)
    const [routes] =React.useState([
        {key:"first",title:"first"},
        {key:"second",title:"second"}
    ]);

    const renderScreen=SceneMap({
        first: login,
    second: register,
    })
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStylee={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'pink' }}
          activeColor="blue"
          inactiveColor='white'
        />
    );

    return (
        <TabView
       renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScreen}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    )
}

export default Home

const styles = StyleSheet.create({})

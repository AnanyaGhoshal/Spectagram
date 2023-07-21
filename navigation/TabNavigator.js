import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator 
            labeled={false}
            barStyle={styles.bottomTabStyle}
       
        screenOptions ={
            ({route})=>({
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name===Feed){
                        iconName=focused
                        ?'book'
                        :'book-outline'
                    }else if(route.name==='CreatePost'){
                        iconName=focused
                        ?'create'
                        :'create-outline'
                    }
                    return <Ionicons name={iconName} color={color} size={RFValue(25)} style={styles.icon}></Ionicons>
                }
            })
        }
        tabBarOptions={{
            activeTintColor: 'pink',
            inactiveTintColor: 'blue'
        }}
        >
            <Tab.Screen name ="Feed" component ={Feed} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name ="CreatePost" component={CreatePost} options={{headerShown:false}}></Tab.Screen>
        </Tab.Navigator>
    )
}
const styles= StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:"#45ae0d",
        height:'8%' ,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"

    },
    icon:{
        width: RFValue(30),
        height: RFValue(30)
    }
})
export default BottomTabNavigator;
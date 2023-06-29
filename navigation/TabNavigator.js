import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator 
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
                    return <Ionicons name={iconName} color={color} size={size}></Ionicons>
                }
            })
        }
        tabBarOptions={{
            activeTintColor: 'pink',
            inactiveTintColor: 'blue'
        }}
        >
            <Tab.Screen name ="Feed" component ={Feed}></Tab.Screen>
            <Tab.Screen name ="CreatePost" component={CreatePost}></Tab.Screen>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
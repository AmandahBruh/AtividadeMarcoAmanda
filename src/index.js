import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UseGallery from './gallery';
import UseReviews from './reviews';
import UseAbout from './about';
import {Colors} from '../../Theme/Variables';
import {hp} from '../../Config/responsive';
import {styles} from './style';

export default function CustomTabs({gallery, about}) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: Colors.textGray,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarItemStyle: {
          tabBarScrollEnabled: true,
        },
      }}
      style={{maxHeight: hp('60')}}
      sceneContainerStyle={{
        backgroundColor: Colors.themeBlack,
        minHeight: 'auto',
      }}>
      <Tab.Screen
        name="About"
        options={{
          title: 'About',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}>
        {() => <UseAbout about={about} />}
      </Tab.Screen>
      <Tab.Screen
        name="Gallery"
        options={{
          title: 'Gallery',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}>
        {() => <UseGallery gallery={gallery} />}
      </Tab.Screen>
      <Tab.Screen
        name="Reviews"
        options={{
          title: 'Reviews',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}>
        {() => <UseReviews gallery={gallery} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

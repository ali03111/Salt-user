import {StyleSheet, Text, View, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {arrowBack, exp, fav} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {CircleImage} from '../../Components/CircleImage';
import useReduxStore from '../../Hooks/UseReduxStore';
import {imageUrl} from '../../Utils/Urls';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import useGallery from './gallery';
import useReviews from './reviews';
import useAbout from './about';
import {Colors} from '../../Theme/Variables';
import {hp} from '../../Config/responsive';

export default function CustomTabs({gallery}) {
  console.log('gallerygallery', gallery);
  const Tab = createMaterialTopTabNavigator();

  return (
    // <View style={{height: hp('60'), flex: 1}}>
    <Tab.Navigator
      initialRouteName={'Gallery'}
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
      style={{height: hp('60')}}
      sceneContainerStyle={{
        backgroundColor: Colors.themeBlack,
      }}>
      <Tab.Screen
        name={`About`}
        options={{
          title: 'About',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}
        component={useAbout}
      />
      <Tab.Screen
        name={`useGallery`}
        options={{
          title: 'Gallery',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}
        component={useGallery}
        initialParams={gallery}
      />
      <Tab.Screen
        name={`useReviews`}
        options={{
          title: 'Reviews',
          tabBarAllowFontScaling: false,
          animationEnabled: true,
          tabBarLabelStyle: {
            fontStyle: 'normal',
            textTransform: 'none',
          },
        }}
        component={useReviews}
      />
    </Tab.Navigator>
    // </View>
  );
}

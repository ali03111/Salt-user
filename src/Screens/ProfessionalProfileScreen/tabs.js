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
import { hp } from '../../Config/responsive';

export default function CustomTabs() {
  const Tab = createMaterialTopTabNavigator();

    function MyTabBar({state, descriptors, navigation, msgCount}) {
        return (
          <View style={styles.mainTabStyle}>
            {state.routes.map((route, index) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
      
              const isFocused = state.index === index;
      
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  console.log('on pressssss', route.name);
                  navigation.navigate(route.name);
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };
      
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityStates={isFocused ? ['selected'] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.TabStyle}>
                  {isFocused == false && (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{...styles.text, color: 'black'}}>{label}</Text>
                    </View>
                  )}
                  {isFocused == true && (
                    // <LinearGradient
                    //   start={{x: 0, y: 0}}
                    //   end={{x: 1, y: 0}}
                    //   colors={[Colors.themeColorDark, Colors.themeColorLight]}
                    //   style={styles.Gradientbtn}>
                    <Text style={styles.text}>{label}</Text>
                    // </LinearGradient>
                  )}
                </Pressable>
              );
            })}
          </View>
        );
      }
  return (
    <View style={{flexGrow: 1, height: '100%'}}>
    <Tab.Navigator
      initialRouteName={'Gallery'}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: Colors.textGray,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,

      }}
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
     </View>
  )
}


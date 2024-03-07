import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {arrowBack, exp, fav} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
// import {ScrollView} from 'react-native-gesture-handler';
import {CircleImage} from '../../Components/CircleImage';
import useReduxStore from '../../Hooks/UseReduxStore';
import {imageUrl} from '../../Utils/Urls';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import useGallery from './gallery';
import useReviews from './reviews';
import useAbout from './about';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import CustomTabs from './tabs';
import ThemeButton from '../../Components/ThemeButton';

const ProfessionalProfileScreen = () => {
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
    <>
      <BackHeader
        isBack={true}
        headerTitle={'Professional List'}
        saveReset={fav}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.pImage}>
          <CircleImage
            // image={profileData?.uri ?? imageUrl(userData?.image)}
            image={null}
            styles={styles.profileView}
            uri={true}
          />
        </View>
        <TextComponent text={'James Dean'} styles={styles.userName} />
        <TextComponent
          text={'House Call service provider'}
          styles={styles.userDesignation}
        />
        <View style={styles.infoMain}>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'10+'} styles={styles.expNumber} />
            <TextComponent text={'Years Experience'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'4.8'} styles={styles.expNumber} />
            <TextComponent text={'Rating'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'37+'} styles={styles.expNumber} />
            <TextComponent text={'Reviews'} styles={styles.expText} />
          </View>
        </View>
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

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextComponent text={'Price'} styles={styles.aboutTitle} />
          <TextComponent text={`$${'10'}`} styles={styles.aboutTitle} />
        </View>

        <View
          style={{
            borderTopWidth: 0.5,
            borderColor: Colors.grayFaded,
            paddingTop: hp('4'),
            marginTop: hp('3'),
            paddingBottom: hp('3'),
            marginHorizontal: wp('4'),
          }}>
          <ThemeButton title={'Book An Appointment'} />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(ProfessionalProfileScreen);

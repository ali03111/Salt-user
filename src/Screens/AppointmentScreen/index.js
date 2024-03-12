import React from 'react';
import {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {addCircle} from '../../Assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingApp from './UpcomingApp';
import HistoryApp from './HistoryApp';
import {styles} from './styles';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import useAppointmentScreen from './useAppointmentScreen';

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

const AppointmentScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  const {dataHistoryUpcoming} = useAppointmentScreen();

  console.log('uphome', dataHistoryUpcoming?.upcoming);

  return (
    <View style={{flex: 1}}>
      <BackHeader
        saveReset={addCircle}
        headerTitle={'Appointments'}
        onRightPress={() => navigation.navigate('BookAnAppointment')}
      />
      <Tab.Navigator
        initialRouteName={'Upcoming'}
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
          name={`Upcoming`}
          options={{
            title: 'Upcoming',
            tabBarAllowFontScaling: false,
            animationEnabled: true,
            tabBarLabelStyle: {
              fontStyle: 'normal',
              textTransform: 'none',
            },
          }}
          component={UpcomingApp}
        />
        <Tab.Screen
          name={`History`}
          options={{
            title: 'History',
            tabBarAllowFontScaling: false,
            animationEnabled: true,
            tabBarLabelStyle: {
              fontStyle: 'normal',
              textTransform: 'none',
            },
          }}
          component={HistoryApp}
        />
      </Tab.Navigator>
    </View>
  );
};

export default memo(AppointmentScreen);

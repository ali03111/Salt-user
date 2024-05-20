import React from 'react';
import {memo} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {addCircle} from '../../Assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingApp from './UpcomingApp';
import HistoryApp from './HistoryApp';
import {styles} from './styles';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import useAppointmentScreen from './useAppointmentScreen';

const AppointmentScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  const {dataHistoryUpcoming} = useAppointmentScreen();

  // console.log('uphome', dataHistoryUpcoming?.upcoming);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} />
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
          // component={HistoryApp}
        >
          {() => (
            <HistoryApp
              data={dataHistoryUpcoming?.history}
              navigation={navigation}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default memo(AppointmentScreen);

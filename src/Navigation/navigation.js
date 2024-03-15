import React from 'react';
import * as Screens from '../Screens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MybottomTabs from './bottomNavigation';
import useReduxStore from '../Hooks/UseReduxStore';
import NavigationService from '../Services/NavigationService';
import {Colors} from '../Theme/Variables';
import {Platform} from 'react-native';
import HistoryApp from '../Screens/AppointmentScreen/HistoryApp';

const Stack = createNativeStackNavigator();
const StackNavigatior = () => {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  const {isLogin, userData} = getState('Auth');
  const statusBarColor =
    Platform.OS == 'android' ? {statusBarColor: Colors.themeRed} : {};
  return (
    <NavigationContainer
      ref={ref => {
        NavigationService.setRef(ref);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
          statusBarAnimation: 'slide',
          statusBarStyle: 'light',
          ...statusBarColor,
        }}>
        {!onboarding && (
          <Stack.Screen
            name="OnBoardScreen"
            component={Screens.OnBoardScreen}
          />
        )}
        {!isLogin && (
          <>
            {/* <Stack.Screen name="MybottomTabs" component={MybottomTabs} /> */}
            {/* <Stack.Screen
              name="AppTestNew"
              component={Screens.AppTestN}
            /> */}

            <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={Screens.RegisterScreen}
            />
          </>
        )}
        {isLogin && (
          <>
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen
              name="AllProfessionalScreen"
              component={Screens.AllProfessionalScreen}
            />
            <Stack.Screen
              name="ProfessionalProfileScreen"
              component={Screens.ProfessionalProfileScreen}
            />
            <Stack.Screen
              name="ProfessionalList"
              component={Screens.ProfessionalList}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={Screens.EditProfileScreen}
            />
            <Stack.Screen
              name="ChangePasswordScreen"
              component={Screens.ChangePasswordScreen}
            />
            <Stack.Screen
              name="BookAnAppointment"
              component={Screens.BookAnAppointment}
            />
            <Stack.Screen
              name="AppointmentDetailScreen"
              component={Screens.AppointmentDetailScreen}
            />
            <Stack.Screen name="History" component={HistoryApp} />
            <Stack.Screen
              name="SettingScreen"
              component={Screens.SettingScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigatior;

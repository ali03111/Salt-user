import React from 'react';
import * as Screens from '../Screens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MybottomTabs from './bottomNavigation';
import useReduxStore from '../Hooks/UseReduxStore';
import NavigationService from '../Services/NavigationService';
import {Colors} from '../Theme/Variables';
import {Platform} from 'react-native';

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
            {/* {!userData.is_verified && (
              <Stack.Screen
                name="EditPhoneNumberScreen"
                component={Screens.EditPhoneNumberScreen}
              />
            )} */}
            {/* <Stack.Screen name="BookAnAppointment" component={Screens.BookAnAppointment} /> */}
            {/* <Stack.Screen
              name="ProfessionalProfile"
              component={Screens.ProfessionalProfile}
            /> */}
            <Stack.Screen
              name="ProfessionalProfileScreen"
              component={Screens.ProfessionalProfileScreen}
            />
            <Stack.Screen
              name="ProfessionalList"
              component={Screens.ProfessionalList}
            />
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen
              name="EditProfileScreen"
              component={Screens.EditProfileScreen}
            />
            <Stack.Screen
              name="ChangePasswordScreen"
              component={Screens.ChangePasswordScreen}
            />
            {/* <Stack.Screen name="BookAnAppointment" component={Screens.BookAnAppointment} /> */}

            {/* <Stack.Screen name="MybottomTabs" component={MybottomTabs} /> */}

            {/* <Stack.Screen
              name="EditPhoneNumberScreen"
              component={Screens.EditPhoneNumberScreen}
            />
            <Stack.Screen
              name="VerficationScreen"
              component={Screens.VerficationScreen}
            />
            <Stack.Screen
              name="EditTripScreen"
              component={Screens.EditTripScreen}
            />
            <Stack.Screen
              name="MapAndChatScreen"
              component={Screens.MapAndChatScreen}
            />
            <Stack.Screen name="ChatScreen" component={Screens.ChatScreen} />
            <Stack.Screen
              name="EditProfileScreen"
              component={Screens.EditProfileScreen}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={Screens.ResetPasswordScreen}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={Screens.ProfileScreen}
            />
            <Stack.Screen
              name="SyncingScreen"
              component={Screens.SyncingScreen}
            />
            <Stack.Screen name="MapScreen" component={Screens.MapScreen} />
            <Stack.Screen
              name="InvitationScreen"
              component={Screens.InvitationScreen}
            />
            <Stack.Screen
              name="GeneralNotification"
              component={Screens.GeneralNotification}
            />
            <Stack.Screen name="SyncScreen" component={Screens.SyncScreen} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigatior;

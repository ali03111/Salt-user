/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  LogBox,
  StatusBar,
  Platform,
  TextInput,
  AppState,
} from 'react-native';
import StackNavigatior from './src/Navigation/navigation';
import {SplashScreen} from './src/Assets';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useReduxStore from './src/Hooks/UseReduxStore';
import Overlay from './src/Components/Overlay';
import {fcmRegister, verifyUser} from './src/Redux/Action/AuthAction';
import {Colors} from './src/Theme/Variables';
import {hp, wp} from './src/Config/responsive';
import {QueryClient} from '@tanstack/react-query';
import {fcmService} from './src/Services/Notifications';
import usePushNotification from './src/Services/usePushNotification';
import notifee, {EventType} from '@notifee/react-native';
import NavigationService from './src/Services/NavigationService';

const App = () => {
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          const notify = detail.notification;
          if (notify?.data?.payload) {
            console.log(
              'payloadDatapayloadDatapayloadDatapayloadDatapayloadData',
              payloadData,
            );
            const payloadData = JSON.parse(notify?.data?.payload);
            if (payloadData?.isRoute) {
              NavigationService.navigate(
                payloadData?.screenRoute,
                payloadData?.app_data?.id && payloadData?.app_data,
              );
            }
          }
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);
  // const {
  //   requestUserPermission,
  //   getFCMToken,
  //   listenToBackgroundNotifications,
  //   listenToForegroundNotifications,
  //   onNotificationOpenedAppFromBackground,
  //   onNotificationOpenedAppFromQuit,
  // } = usePushNotification();

  // useEffect(() => {
  //   const listenToNotifications = () => {
  //     try {
  //       getFCMToken();
  //       requestUserPermission();
  //       onNotificationOpenedAppFromQuit();
  //       listenToBackgroundNotifications();
  //       listenToForegroundNotifications();
  //       onNotificationOpenedAppFromBackground();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   listenToNotifications();
  // }, []);

  const flexStyle = {flex: 1};
  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const {getState, dispatch} = useReduxStore();
  const {isloading} = getState('isloading');
  const {isAlert} = getState('isAlert');
  const {isLogin} = getState('Auth');

  const appState = useRef(AppState.currentState);

  const time = () => {
    return 2000;
  };

  useEffect(() => {
    /* It's a function that registers the device to receive push notifications. */
    if (isLogin) {
      setTimeout(() => {
        fcmService.register(
          onRegister,
          onOpenNotification,
          appState.current,
          () => {},
        );
      }, 5000);
    }
    return () => {
      /* It's a function that unregisters the device from receiving push notifications. */
      if (isLogin) {
        fcmService.unRegister();
      }
    };
  }, [isLogin]);
  const onRegister = fcm_token => {
    console.log('fcm_token', Platform.OS, fcm_token);
    dispatch(fcmRegister(fcm_token));
  };

  const onOpenNotification = notify => {
    if (notify?.data?.payload) {
      console.log(
        'payloadDatapayloadDatapayloadDatapayloadDatapayloadData',
        payloadData,
      );
      const payloadData = JSON.parse(notify?.data?.payload);
      if (payloadData?.isRoute) {
        NavigationService.navigate(
          payloadData?.screenRoute,
          payloadData?.app_data?.id && payloadData?.app_data,
        );
      }
    } else {
      NavigationService.navigate('NotificationScreen');
    }
  };

  const queryClient = new QueryClient({});

  queryClient.defaultQueryOptions({
    networkMode: 'online',
    refetchOnReconnect: true,
  });

  const useEffectFun = () => {
    // dispatch(verifyUser());
    // GoogleSignin.configure({
    //   webClientId:
    //     '1005053076444-mgrhj94e5bcv1a937pc07914jmevu2gv.apps.googleusercontent.com',
    // });
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
      'ViewPropTypes will be removed from React Native',
      'Settings is not yet supported on Android',
      'ViewPropTypes will be removed',
      "exported from 'deprecated-react-native-prop-types'.",
      'Sending...',
      'Non-serializable values were found in the navigation state',
    ]);
    LogBox.ignoreAllLogs(true);
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    View.defaultProps = View.defaultProps || {};
    View.defaultProps.allowFontScaling = false;
  };

  useEffect(useEffectFun, []);

  let Splash_Screen = (
    <ImageBackground
      source={SplashScreen}
      style={styles.SplashScreen_RootView}></ImageBackground>
  );

  return (
    <View style={flexStyle}>
      {isloading && <Overlay />}
      {Platform.OS == 'ios' ? (
        <StatusBar
          hidden={isVisible}
          backgroundColor={'white'}
          barStyle={'light-content'}
        />
      ) : (
        <StatusBar hidden={isVisible} />
      )}
      {isVisible === true ? Splash_Screen : <StackNavigatior />}
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  actionViewStyle: {
    width: wp('80'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: wp('2'),
    paddingVertical: hp('2'),
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: '600',
    color: Colors.black,
    fontSize: hp('2.5'),
  },
  modalMsg: {
    color: Colors.gray,
    fontSize: hp('1.8'),
    marginBottom: hp('3'),
  },
  cancelButtonStyle: {
    width: wp('33'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: hp('5'),
    borderColor: Colors.primaryColor,
    borderWidth: 0.2,
    borderRadius: 5,
  },
  confirmButtonStyle: {
    width: wp('33'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    height: hp('5'),
    borderRadius: 8,
    alignSelf: 'center',
    // marginTop: hp('1'),
  },
  modalCancelBtnText: {
    fontSize: hp('1.8'),
    color: '#212759',
  },
  modalcConfirmBtnText: {
    fontSize: hp('1.8'),
  },
});

export default App;

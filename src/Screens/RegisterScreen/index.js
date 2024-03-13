import React, {memo} from 'react';
import {View, Text, Image, ScrollView, StatusBar, Platform} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {globalHeading} from '../../Config/globalStyles';
import MaskedView from '@react-native-masked-view/masked-view';
// import ButtonWithIcon from '../../Components/ButtonWithIcon';
import {
  email,
  lock,
  userIcon,
  phone,
  arrowBack,
  loginBgBlack,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';
import {hp, wp} from '../../Config/responsive';
import DashText from '../LoginScreen/DashText';
import SocialBottomView from '../LoginScreen/SocialBottomView';
import BottomText from '../LoginScreen/BottomText';
import {Colors} from '../../Theme/Variables';
import ThemeButton from '../../Components/ThemeButton';

const RegisterScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    setRemember,
    rememberValue,
    remember,
    goBack,
    loginNav,
    signUpButton,
    error,
    number,
    setNumber,
  } = useRegister(navigation);
  const isIOS = Boolean(Platform.OS == 'ios');

  return (
    <KeyBoardWrapper
      showsVerticalScrollIndicator={false}
      styles={styles.logInMain}>
      <StatusBar barStyle={isIOS ? 'light-content' : 'dark-content'} />
      <Image
        source={loginBgBlack}
        style={{
          width: wp('100'),
          top: hp('-12'),
        }}
      />
      <TextComponent text={'Sign Up'} styles={styles.topImage(isIOS)} />
      <View style={styles.inputView}>
        <InputComponent
          {...{
            name: 'name',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Name',
            isImage: userIcon,
            tintColor: Colors.themeRed,
            defaultValue: __DEV__ ? 'userHund' : '',
          }}
        />
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Email',
            isImage: email,
            defaultValue: '',
            tintColor: Colors.themeRed,
          }}
        />
        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            inputIconStyle: styles.lockstyle,
            tintColor: Colors.themeRed,
            defaultValue: __DEV__ ? 'Test@123' : '',
          }}
        />
        <InputComponent
          {...{
            name: 'confirm_password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Confirm Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            inputIconStyle: styles.lockstyle,
            tintColor: Colors.themeRed,
            defaultValue: __DEV__ ? 'Test@123' : '',
          }}
        />
        <ThemeButton
          title={'Sign Up'}
          style={{marginTop: hp('4'), marginBottom: hp('2')}}
          onPress={handleSubmit(signUpButton)}
        />
      </View>
      <DashText text={'Sign Up'} localStyle={{marginTop: hp('4')}} />
      <SocialBottomView />
      <BottomText
        text={'Already have an account?'}
        ButtonText={'Log In'}
        viewStyle={{marginTop: hp('-2')}}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </KeyBoardWrapper>
  );
};
export default memo(RegisterScreen);

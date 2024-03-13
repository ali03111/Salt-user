import React, {memo} from 'react';
import {StatusBar, View} from 'react-native';
import {Colors} from '../../Theme/Variables';
import BackHeader from '../../Components/BackHeader';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {InputComponent} from '../../Components/InputComponent';
import {styles} from './styles';
import useChangePasswordScreen from './useChangePasswordScreen';
import {lock} from '../../Assets';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';

const ChangePasswordScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, changePassword} =
    useChangePasswordScreen(navigation);

  const InputViewWithHeading = ({title, inputVal, viewStyle}) => {
    return (
      <View style={viewStyle}>
        <TextComponent text={title} fade={true} styles={{color: 'gray'}} />
        <InputComponent
          {...{
            name: inputVal,
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: title,
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            inputIconStyle: styles.lockstyle,
            tintColor: Colors.themeRed,
            viewStyle: {width: wp('85'), marginTop: hp('1')},
            errorTextStyle: {color: 'black', width: wp('80')},
          }}
        />
      </View>
    );
  };

  return (
    <KeyBoardWrapper
      styles={{
        // flex: 1,
        backgroundColor: Colors.themeBlack,
        position: 'relative',
      }}>
      <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} />
      <BackHeader
        headerTitle={'Change Password'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      {/* <KeyBoardWrapper styles={{paddingBottom: hp('5')}}> */}
      <TextComponent text={'Create New Password'} styles={styles.heading} />
      <TextComponent
        text={
          'Your new password must be different from your previous password.'
        }
        styles={styles.des}
        numberOfLines={2}
        fade={true}
      />
      <View style={styles.centerView}>
        <InputViewWithHeading
          title={'Current Password'}
          inputVal={'password'}
        />
        <InputViewWithHeading
          title={'New Password'}
          inputVal={'new_password'}
          viewStyle={{marginTop: hp('5')}}
        />
        <InputViewWithHeading
          title={'Re-type New Password'}
          inputVal={'confirm_password'}
          viewStyle={{marginTop: hp('2')}}
        />
        <ThemeButton
          title={'Change'}
          onPress={handleSubmit(changePassword)}
          style={styles.btn}
        />
      </View>
      {/* </KeyBoardWrapper> */}
    </KeyBoardWrapper>
  );
};

export default memo(ChangePasswordScreen);

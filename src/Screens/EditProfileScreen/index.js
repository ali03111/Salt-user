import React from 'react';
import {memo} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {styles} from './styles';
import {CircleImage} from '../../Components/CircleImage';
import {imageUrl} from '../../Utils/Urls';
import useEditProfileScreen from './useEditProfileScreen';
import {Touchable} from '../../Components/Touchable';
import {hp} from '../../Config/responsive';
import {
  addProfileImage,
  circleWhite,
  email,
  lock,
  userIcon,
} from '../../Assets';
import ThemeButton from '../../Components/ThemeButton';
import {InputComponent} from '../../Components/InputComponent';
import {Colors} from '../../Theme/Variables';
import {TextComponent} from '../../Components/TextComponent';

const EditProfileScreen = ({navigation}) => {
  const {
    userData,
    onSave,
    uploadFromGalary,
    profileData,
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  } = useEditProfileScreen();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <BackHeader
        headerTitle={'Edit Profile'}
        goBack={() => navigation.goBack()}
        isBack={true}
      />
      <View style={styles.editProfileMain}>
        <ImageBackground
          source={circleWhite}
          resizeMode="contain"
          style={styles.whiteCircle}>
          <CircleImage
            image={profileData?.uri ?? imageUrl(userData?.image)}
            styles={styles.profileView}
            uri={true}
          />
          <Touchable style={styles.addIcon} onPress={uploadFromGalary}>
            <Image
              source={addProfileImage}
              resizeMode="contain"
              style={{height: hp('6')}}
            />
          </Touchable>
        </ImageBackground>
      </View>
      {/* <ThemeButton onPress={() => onSave({name: 'test'})} /> */}
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
          }}
        />
        <Pressable style={styles.inputDisable}>
          <Image source={email} style={styles.DisableIcon} />
          <TextComponent
            text={'dinojames@supportsnap.com'}
            styles={styles.disableText}
          />
        </Pressable>
        <Pressable
          style={styles.inputDisable}
          onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Image source={lock} style={styles.DisableIcon} />
          <TextComponent text={'***************'} styles={styles.passText} />
        </Pressable>
        <View style={styles.btns}>
          <ThemeButton
            title={'Cancel'}
            style={styles.cancelBtn}
            textStyle={styles.cancelBtnText}
            onPress={() => navigation.navigate('SettingScreen')}
          />
          <ThemeButton
            title={'Save'}
            style={styles.loginBtn}
            textStyle={styles.loginBtnText}
            onPress={handleSubmit(onSave)}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(EditProfileScreen);

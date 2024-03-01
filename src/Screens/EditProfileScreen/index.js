import React from 'react';
import {memo} from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {styles} from './styles';
import {CircleImage} from '../../Components/CircleImage';
import {imageUrl} from '../../Utils/Urls';
import useEditProfileScreen from './useEditProfileScreen';
import {Touchable} from '../../Components/Touchable';
import {hp} from '../../Config/responsive';
import {addProfileImage, circleWhite, userIcon} from '../../Assets';
import ThemeButton from '../../Components/ThemeButton';
import {InputComponent} from '../../Components/InputComponent';
import {Colors} from '../../Theme/Variables';

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
      <BackHeader headerTitle={'Edit Profile'} />
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

        <ThemeButton
          title={'Log In'}
          style={{marginTop: hp('4')}}
          onPress={handleSubmit(onSave)}
        />
      </View>
    </View>
  );
};

export default memo(EditProfileScreen);

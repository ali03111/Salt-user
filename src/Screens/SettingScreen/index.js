import React from 'react';
import {memo} from 'react';
import {ScrollView, View} from 'react-native';
import {ProfileCardView} from './ProfileCardView';
import BackHeader from '../../Components/BackHeader';
import {hp} from '../../Config/responsive';
import IconBtnView from '../../Components/IconBtnView';
import {
  arrowLeftOld,
  dollarCircle,
  information,
  lockWhite,
  logOutWhite,
  receiptWhite,
  starWhite,
  termsWhite,
  trashRed,
} from '../../Assets';
import {MultiView} from './MultiView';

const centerView = [
  {
    title: 'Change Password',
    leftIcon: lockWhite,
    rightText: 'Change',
  },
  {
    title: 'About Salt',
    leftIcon: information,
    rightIcon: arrowLeftOld,
  },
  {
    title: 'Privacy Policy',
    leftIcon: receiptWhite,
    rightIcon: arrowLeftOld,
  },
  {
    title: 'Terms and Conditions',
    leftIcon: termsWhite,
    rightIcon: arrowLeftOld,
  },
  {
    title: 'Rate Us',
    leftIcon: starWhite,
    rightIcon: arrowLeftOld,
  },
];

const bottomView = [
  {
    title: 'Log Out',
    leftIcon: logOutWhite,
  },
  {
    title: 'Delete Account',
    leftIcon: trashRed,
  },
];

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <BackHeader headerTitle={'Setting'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled
        contentContainerStyle={{flexGrow: 1, paddingBottom: hp('20')}}>
        <ProfileCardView
          onpress={() => navigation.navigate('EditProfileScreen')}
        />
        {/* <IconBtnView
          viewStyle={{marginTop: hp('5')}}
          title={' Earnings'}
          leftIcon={dollarCircle}
          rightIcon={arrowLeftOld}
        /> */}
        <MultiView data={centerView} />
        <MultiView data={bottomView} />
      </ScrollView>
    </View>
  );
};

export default memo(SettingScreen);

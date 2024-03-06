import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  editProfileMain: {
    marginVertical: hp('6'),
  },
  whiteCircle: {
    height: hp('16'),
    width: wp('32'),
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    width: Dimensions.get('window').width * 0.31,
    height: Dimensions.get('window').width * 0.31,
  },
  addIcon: {
    position: 'absolute',
    left: wp('12'),
    height: hp('6'),
    top: hp('11'),
  },
  inputView: {
    width: wp('90'),
    backgroundColor: 'white',
    alignSelf: 'center',
    // marginTop: hp('-30'),
    // position: 'absolute',
    zIndex: 1,
    borderRadius: 20,
    paddingHorizontal: wp('3'),
    paddingVertical: wp('2'),
    // height: hp('100'),
    overflow: 'visible',
    shadowColor: '#011111',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 3,
    shadowRadius: 7.68,
    elevation: 10,
  },
  inputDisable: {
    width: '100%',
    borderWidth: 1,
    height: hp('7'),
    marginVertical: hp('0'),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'rgb(118, 118, 118)',
    marginTop: hp('2'),
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingHorizontal: wp('2'),
  },
  DisableIcon: {
    flex: 0.5,
    resizeMode: 'contain',
  },
  disableText: {
    width: '86%',
    color: Colors.black,
    paddingHorizontal: wp('2'),
    paddingLeft: wp('3'),
    fontWeight: '500',
  },
  passText: {
    width: '86%',
    color: Colors.black,
    paddingHorizontal: wp('2'),
    paddingLeft: wp('3'),
    fontWeight: '500',
    lineHeight: hp('7.5'),
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('2'),
    paddingTop: hp('4'),
  },
  cancelBtn: {
    backgroundColor: 'rgba(215, 48, 0, 0.1)',
    width: wp('40'),
  },
  cancelBtnText: {
    color: Colors.themeRed,
  },
  loginBtn: {
    backgroundColor: Colors.themeRed,
    width: wp('40'),
  },
  loginBtnText: {
    color: Colors.white,
  },
});

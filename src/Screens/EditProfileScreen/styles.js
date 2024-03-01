import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../Config/responsive';

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
});

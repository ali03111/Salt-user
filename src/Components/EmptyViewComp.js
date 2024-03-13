import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextComponent} from './TextComponent';
import {Touchable} from './Touchable';
import ThemeButton from './ThemeButton';
import {clipboardClose, dataNotFound1, dataNotFound2} from '../Assets';

export const EmptyViewComp = ({onRefresh, refreshStyle}) => {
  return (
    <View
      style={{
        width: wp('100'),
        flex: 1,
        borderRadius: 10,
        ...refreshStyle,
      }}>
      <Image
        source={dataNotFound1}
        resizeMode="contain"
        style={styles.dataNotFound}
        tintColor={Colors.themeRed}
      />
      <Image
        source={clipboardClose}
        resizeMode="contain"
        style={styles.noDataIcon}
      />
      <TextComponent text={'Data not found'} styles={styles.heading} />
      <TextComponent
        text={'No data, please try again later'}
        styles={styles.text}
      />
      <Image
        source={dataNotFound2}
        resizeMode="contain"
        style={styles.dataNotFoundTwo}
      />
      <ThemeButton style={styles.btnSt} title={'Refresh'} onPress={onRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  dataNotFound: {
    width: wp('90'),
    alignSelf: 'flex-start',
    height: hp('20'),
    tintColor: Colors.themeRed,
  },
  dataNotFoundTwo: {
    width: wp('90'),
    alignSelf: 'flex-end',
    height: hp('20'),
    marginTop: hp('-5'),
  },
  noDataIcon: {
    alignSelf: 'center',
    width: wp('30'),
    height: hp('15'),
    marginTop: hp('-3'),
  },
  heading: {
    fontSize: hp('3'),
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginTop: hp('1'),
  },
  text: {
    fontSize: hp('1.8'),
    color: 'gray',
    textAlign: 'center',
    marginTop: hp('1'),
  },
  btnSt: {
    backgroundColor: Colors.themeRed,
    marginTop: hp('6'),
    width: wp('50'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('-5'),
  },
});
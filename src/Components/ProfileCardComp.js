import React, {useCallback} from 'react';
import {memo} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {CircleImage} from './CircleImageComponent';
import {TextComponent} from './TextComponent';
import {divider, star} from '../Assets';
import ThemeButton from './ThemeButton';

export const ProfileCardComp = () => {
  const url =
    'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';
  return (
    <View style={styles.viewStyle}>
      <CircleImage uri={true} image={url} styles={styles.circleImage} />
      <TextComponent text={'Ricky Jonathan'} styles={styles.name} />
      <View style={styles.reviewView}>
        <Image source={star} resizeMode="contain" style={styles.starImage} />
        <TextComponent
          text={'24 Reviews'}
          fade={true}
          styles={{fontSize: hp('1.8')}}
        />
      </View>
      <ThemeButton title={'View Profile'} style={styles.viewBtn} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.themeBlack,
    borderRadius: 10,
    borderColor: Colors.grayFaded,
    borderWidth: 0.2,
    paddingVertical: hp('2'),
    paddingHorizontal: wp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50'),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 24,
    marginRight: wp('3'),
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
  },
  name: {marginTop: hp('2'), fontWeight: '400'},
  reviewView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp('1'),
  },
  starImage: {
    width: wp('5'),
    height: hp('3'),
    marginRight: wp('2'),
  },
  viewBtn: {width: wp('45'), marginTop: hp('2'), height: hp('5')},
});

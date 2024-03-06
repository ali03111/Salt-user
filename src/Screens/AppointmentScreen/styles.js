import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: Colors.themeRed,
    height: hp('0.5'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: wp('50'),
    alignSelf: 'center',
    marginLeft: wp('0.5'),
  },
  tabBarStyle: {
    paddingTop: hp('2'),
    backgroundColor: Colors.themeBlack,
    width: wp('100'),
    alignSelf: 'center',
    borderBottomColor: Colors.grayFaded,
    borderBottomWidth: 0.5,
  },
  upComingFlatlistView: {
    alignItems: 'center',
    paddingVertical: hp('2'),
  },
});

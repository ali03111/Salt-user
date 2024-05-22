import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeBlack,
    paddingHorizontal: wp('4'),
    paddingTop: hp('2.5'),
  },
  upComingFlatlistView: {
    alignItems: 'center',
    paddingVertical: hp('2'),
    paddingBottom: hp('10'),
  },
});

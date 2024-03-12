import {Dimensions} from 'react-native';
import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  bgImg: {
    width: wp('100'),
    // height: hp('60'),
    marginTop: hp('-3'),
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: hp('-8'),
  },
  profileStyle: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  titleStyle: {
    paddingVertical: hp('1'),
    fontSize: hp('2.5'),
    fontWeight: '500',
  },
  tagLineStyle: {
    fontSize: hp('1.6'),
  },
  topTier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp('3'),
  },
  cardContainer: {
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: hp('1.5'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: Colors.grayFaded,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('1'),
    paddingVertical: wp('3.5'),
    marginHorizontal: wp('2'),
    borderBottomWidth: wp('0.1'),
    borderColor: Colors.grayFaded,
  },
  braidTitle: {
    fontSize: hp('1.6'),
  },
  viewBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2'),
    alignItems: 'center',
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewAppBtn: {
    backgroundColor: Colors.themeBlack,
    width: wp('43'),
    height: hp('5'),
    alignItems: 'center',
    fontSize: hp('1.5'),
  },
});

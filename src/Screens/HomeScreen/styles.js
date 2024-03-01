import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.themeRed,
    width: wp('100'),
    paddingTop: hp('2'),
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? hp('2') : hp('-2'),
    width: wp('92'),
    alignSelf: 'center',
    paddingBottom: hp('2'),
  },
  nameText: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    marginTop: hp('2.5'),
  },
  notiIcon: {width: wp('7')},
  setIcon: {width: wp('7')},
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('92'),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp('3'),
  },
  comingView: {
    width: wp('90'),
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // height: hp('10'),
    paddingVertical: hp('2'),
    paddingHorizontal: wp('3'),
    marginLeft: hp('1.5'),
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    height: hp('18.5'),
    // backgroundColor: 'white',
  },
  upperView: {flexDirection: 'row', alignItems: 'center'},
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5'),
    marginLeft: wp('1.5'),
  },
  locationIcon: {width: wp('75'), fontSize: hp('1.7'), marginLeft: wp('1')},
  divider: {width: wp('70'), marginTop: hp('1'), marginLeft: wp('1')},
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2'),
    marginTop: hp('1'),
    width: wp('70'),
  },
  dateText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
    marginRight: wp('10'),
  },
  timeText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
  },
  upComingFlatlistView: {
    height: hp('25'),
    alignItems: 'center',
    paddingRight: wp('4'),
    marginLeft: wp('1'),
  },
  bookBtnView: {
    backgroundColor: 'white',
    width: wp('92'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnImage: {
    tintColor: 'red',
    width: wp('20'),
    height: hp('3'),
    marginRight: wp('-2'),
    transform: [{ rotate: '180deg'}]
  },
  btnText: {color: 'black', fontWeight: 'bold', marginLeft: wp('4')},
  topRatedView: {
    paddingRight: wp('3'),
    paddingLeft: wp('3'),
    marginTop: hp('2'),
    marginLeft: wp('1'),

  },
});

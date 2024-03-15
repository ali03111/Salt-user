import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors, FontSize} from '../../Theme/Variables';

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
  textDes: {
    fontSize: FontSize.scale16,
    fontWeight: '300',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: hp('1'),
  },
  bottom: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.themeBlack,
  },
  modalText: {
    fontSize: FontSize.scale20,
    fontWeight: '600',
    marginBottom: hp('1'),
    marginTop: hp('6'),
  },
  topLine: {
    borderRadius: 10,
    height: hp('0.8'),
    width: wp('15'),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginBottom: hp('1'),
    marginTop: hp('-1.5'),
  },
  inputView: {
    flexDirection: 'row',
    width: wp('93'),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    height: hp('6'),
    marginTop: hp('3'),
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  icon: {width: wp('10'), height: hp('3')},
  dec: {
    fontSize: hp('1.8'),
    marginLeft: wp('5'),
    marginTop: hp('1'),
  },
  viewProfile1: {
    alignSelf: 'center',
    width: wp('50'),
    height: hp('7'),
    borderRadius: 5,
    backgroundColor: Colors.themeRed,
    marginTop: hp('2'),
  },
});

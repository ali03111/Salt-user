import {hp, wp} from '../../Config/responsive';
const {StyleSheet, Platform, Dimensions} = require('react-native');
const {Colors, FontSize} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeBlack,
  },
  innerContainer: {
    width: wp('92'),
    paddingTop: hp('2.5'),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: hp('5'),
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
    // backgroundColor: Colors.grayFadedBtn,
    width: wp('43'),
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: hp('1.5'),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.grayFaded,
    shadowColor: '#181818',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.themeBlack,
  },
  buttonText: {
    color: Colors.white,
    fontSize: hp('1.5'),
  },
  selectedButton: {
    backgroundColor: 'white',
    color: Colors.themeBlack,
  },
  selectedButtonText: {
    color: 'black',
  },
  titleStyle: {
    marginTop: hp('2'),
  },
  locationMarkStyle: {
    width: wp('92'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: wp('4'),
    marginTop: hp('2'),
    height: hp('6'),
  },
  markerTitle: {
    fontSize: hp('1.6'),
    color: Colors.white,
  },
  markerIconStyle: {
    position: 'absolute',
    right: wp('2.5'),
  },
  profesStyle: {
    // backgroundColor: Colors.grayFadedBtn,
    marginTop: hp('5'),
    marginBottom: hp('2'),
  },
  rangeSld: {
    width: wp('95'),
    height: hp('2'),
    marginLeft: wp('-3'),
    marginTop: hp('1'),
  },
  rangeView: {
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp('2'),
  },
  kmText: {
    width: wp('43'),
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    paddingVertical: hp('1'),
    paddingHorizontal: wp('2'),
  },
});

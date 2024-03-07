import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform, Dimensions} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.themeBlack,
    paddingTop: hp('2.5'),
  },
  imageView: {
    marginVertical: hp('2'),
    marginHorizontal: wp('2'),
    width: wp('45'),
    height: hp('20'),
    borderRadius: 10,
  },
  profileView: {
    width: Dimensions.get('window').width * 0.31,
    height: Dimensions.get('window').width * 0.31,
  },
  pImage: {
    height: hp('16'),
    width: wp('32'),
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    textAlign: 'center',
    marginTop: hp('2'),
    marginBottom: hp('1'),
    fontSize: hp('2.5'),
    fontWeight: 600,
  },
  userDesignation: {
    fontSize: hp('1.8'),
    color: Colors.grayFaded,
    textAlign: 'center',
    marginBottom: hp('2'),
  },
  userInfo: {
    width: wp('30'),
    alignItems: 'center',
  },
  expIcon: {
    width: wp('9'),
    height: hp('4.5'),
  },
  expIconMain: {
    padding: 15,
    borderColor: Colors.grayFadedBtn,
    backgroundColor: '#181818',
    borderWidth: 0.5,
    width: wp('20'),
    height: hp('10'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 3,
    shadowRadius: 1,
    elevation: 6,
  },
  infoMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.grayFadedBtn,
    paddingVertical: hp('2.5'),
    marginVertical: hp('2.5'),
    marginHorizontal: wp('4'),
  },
  expNumber: {
    fontSize: hp('1.8'),
    color: Colors.white,
    marginTop: hp('1.5'),
  },
  expText: {
    fontSize: hp('1.5'),
    color: Colors.grayFaded,
    textAlign: 'center',
    marginTop: hp('.5'),
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.themeRed,
    height: hp('0.5'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: wp('33'),
    alignSelf: 'center',
    marginLeft: wp('0.5'),
  },
  tabBarStyle: {
    paddingTop: hp('0'),
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
  aboutTitle: {
    fontSize: hp('2.5'),
    fontWeight: '500',
    paddingHorizontal: wp('3'),
    paddingTop: hp('2'),
  },
  aboutText: {
    fontSize: hp('1.6'),
    paddingHorizontal: wp('3'),
    paddingTop: hp('1'),
  },
});

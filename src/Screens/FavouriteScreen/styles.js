import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform, Dimensions} = require('react-native');
const {Colors, FontSize} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  favContainer: {
    width: wp('95'),
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // marginLeft: hp('1.5'),
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
    marginBottom: hp('2'),
    paddingBottom: hp('2'),
  },
  innerFav: {
    flexDirection: 'row',
    padding: 10,
  },
  name: {
    fontSize: FontSize.scale20,
  },
  rating: {
    fontSize: FontSize.scale12,
    marginLeft: wp('2'),
  },
  viewProfile: {
    alignSelf: 'center',
    width: wp('90'),
    height: hp('5'),
    borderRadius: 5,
    backgroundColor: Colors.grayFadedBtn,
    marginTop: hp('2'),
  },
  hearticon: {
    aspectRatio: 1,
    // height:hp('2'),
    width: wp('6'),
    // alignSelf: 'center',
    marginTop: hp('1'),
    marginRight: wp('2'),
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').width * 0.13,
  },
});

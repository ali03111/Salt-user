import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: hp('3'),
    marginTop: hp('8'),
    fontWeight: 'bold',
  },
  des: {
    width: wp('90'),
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp('1'),
  },
  centerView: {
    width: wp('93'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: hp('3'),
    alignItems: 'center',
    marginTop: hp('5'),
    marginBottom: hp('10'),
  },
  btn: {width: wp('85'), marginTop: hp('5')},
  lockstyle: {
    flex: 0.3,
  },
});

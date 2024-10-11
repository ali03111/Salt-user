import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    backgroundColor: Colors.themeBlack,
    borderRadius: 5,
    height: hp('6'),
    marginTop: hp('2'),
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    alignItems: 'center',
    paddingLeft: wp('3'),
  },
  searchIcon: {height: hp('3'), width: wp('8')},
  input: {
    overflow: 'hidden',
    width: wp('70'),
    color: 'white',
  },
});

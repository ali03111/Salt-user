import {StyleSheet, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

const {TextComponent} = require('../../Components/TextComponent');

const DashText = ({text, localStyle}) => {
  return (
    <View style={{...styles.barMain, ...localStyle}}>
      <View style={styles.barLine}></View>
      <TextComponent text={'Or Sign Up with'} styles={styles.barText} />
      <View style={styles.barLine}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  barMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('10'),
  },
  barLine: {
    width: wp('23'),
    borderBottomWidth: 1,
    height: hp('.5'),
  },
  barText: {
    paddingHorizontal: wp('4'),
    color: Colors.black,
  },
});
export default DashText;

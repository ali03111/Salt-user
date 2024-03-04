import React from 'react';
import {StyleSheet, Text, Image, View, Platform} from 'react-native';
import {TextComponent} from './TextComponent';
import {Touchable} from './Touchable';
import {arrowBack} from '../Assets';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

const BackHeader = ({
  headerTitle,
  style,
  saveReset,
  icon,
  backText,
  saveResetStyle,
  goBack,
  backTextStyle,
  titleStyle,
  numberOfLines,
}) => {
  return (
    <View style={[styles.TopHeader, {...style}]}>
      <View style={styles.HeaderLeft}>
        <Touchable onPress={goBack} style={styles.backMain}>
          <Image
            source={arrowBack}
            style={{
              resizeMode: 'contain',
              ...styles.arrowback,
            }}
          />
          <TextComponent
            text={backText}
            styles={{...styles.backBtn, ...backTextStyle}}
          />
        </Touchable>
      </View>
      <View style={styles.HeaderCenter}>
        <TextComponent
          text={headerTitle}
          //   text={headerTitle}
          numberOfLines={numberOfLines ?? 1}
          styles={{...styles.HeaderTitle, ...titleStyle}}
        />
      </View>
      <View style={styles.HeaderRight}>
        <Touchable style={styles.backMain}>
          <Image
            source={icon}
            style={{
              resizeMode: 'contain',
              style: styles.arrowback,
            }}
          />
           <Image
            source={saveReset}
            style={{
              resizeMode: 'contain',
              style: styles.arrowback,
            }}
          />
          
          {/* <TextComponent
            text={saveReset}
            styles={{...styles.backBtn, ...saveResetStyle}}
          /> */}
        </Touchable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TopHeader: {
    flexDirection: 'row',
    // marginTop: Platform.OS == 'ios' ? hp('6') : hp('3'),
    paddingHorizontal: wp('3.5'),
    paddingBottom: hp('3'),
    backgroundColor: Colors.themeRed,
    paddingTop: Platform.OS == 'ios' ? hp('6') : hp('2'),
    height: Platform.OS == 'ios' ? hp('12') : hp('8'),
    alignItems: 'center',
  },

  backMain: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-end',

    // backgroundColor: 'red',
  },
  backBtn: {
    marginLeft: wp('1.5'),
    color: Colors.gray,
    fontSize: hp('2'),
  },
  HeaderTitle: {
    fontSize: hp('2'),
    color: Colors.white,
    fontWeight: '500',
    textAlignVertical: 'center',
    // justifyContent: 'center',
  },
  HeaderLeft: {
    flex: 0.5,
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  arrowback: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    width: wp('7'),    
  },
  HeaderCenter: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
    height: hp('5'),
    textAlignVertical: 'center',
    marginTop: hp('3'),
  },
  HeaderRight: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
export default BackHeader;

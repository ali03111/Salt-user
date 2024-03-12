import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';

export default function NoDataFoundVer({heading, subHeading, text}) {
  return (
    <View style={styles.main}>
      <TextComponent text={heading} styles={styles.headingOne} />
      <TextComponent text={subHeading} styles={styles.headingTwo} />
      <TextComponent text={text} styles={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: wp('3'),
    paddingVertical: hp('3'),
  },
  headingOne: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('4'),
  },
  headingTwo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3'),
  },
  text: {
    color: Colors.textGray,
    fontSize: hp('1.8'),
    marginTop: hp('1.3'),
  },
});

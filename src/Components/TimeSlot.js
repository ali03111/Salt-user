import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {Touchable} from './Touchable';

export default function TimeSlot({startTime, endTime}) {
  return (
    <>
      <View>
        <TextComponent text={'Time Slots'} styles={styles.titleStyle} />
        <View
          style={{
            width: wp('90'),
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: hp('1'),
          }}>
          {[1, 2, 3, 4, 5].map(res => {
            return (
              <Touchable style={styles.innerContainer}>
                <TextComponent
                  styles={styles.slotStyle}
                  text={`10:00 AM   to  12:00 PM `}
                />
              </Touchable>
            );
          })}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'left',
    fontSize: hp('2'),
  },
  innerContainer: {
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: wp('1'),
    // paddingVertical: hp('2'),
  },
  slotStyle: {
    fontSize: hp('1.6'),
    width: wp('42'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('1.5'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: Colors.grayFaded,
    textAlign: 'center',
    shadowColor: '#181818',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    // backgroundColor: Colors.themeBlack,
    marginBottom: hp('1.5'),
  },
});

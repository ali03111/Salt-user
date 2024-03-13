import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {Touchable} from './Touchable';

export default function TimeSlot({
  data,
  onSelectVal,
  selectedVal,
  title,
  mapViewStyles,
}) {
  return (
    <>
      <View>
        <TextComponent
          text={title ?? 'Time Slots'}
          styles={styles.titleStyle}
        />
        <View style={{...styles.mapView, ...mapViewStyles}}>
          {data.map(res => {
            return (
              <Touchable
                style={styles.innerContainer}
                onPress={() => onSelectVal(res)}>
                <TextComponent
                  styles={styles.slotStyle(Boolean(res?.id == selectedVal?.id))}
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
    // marginHorizontal: wp('1'),
    // paddingVertical: hp('2'),
  },
  slotStyle: isSelected => ({
    fontSize: hp('1.6'),
    width: wp('42'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('1.5'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: isSelected ? 'transparent' : Colors.grayFaded,
    textAlign: 'center',
    shadowColor: '#181818',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: isSelected ? Colors.themeBlack : 'white',
    backgroundColor: isSelected ? 'white' : Colors.themeBlack,
    marginBottom: hp('1.5'),
  }),
  mapView: {
    width: wp('90'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp('1'),
    justifyContent: 'space-between',
  },
});

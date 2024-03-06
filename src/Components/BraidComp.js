import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {wp, hp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {TextComponent} from './TextComponent';
import {Picker} from '@react-native-picker/picker';

export default function BraidComp({
  braidType,
  braidTitle,
  braidContainerStyles,
  onSelectValue,
  data,
  selectedVal,
}) {
  console.log(
    ' data?.find(res => res?.id == selectedAge) data?.find(res => res?.id == selectedAge) data?.find(res => res?.id == selectedAge) data?.find(res => res?.id == selectedAge)',
    data?.filter(res => res?.id == selectedVal),
    selectedVal,
  );

  return (
    <>
      <View style={{...braidContainerStyles, paddingBottom: hp('1')}}>
        <View style={styles.topTier}>
          <TextComponent
            //   numberOfLines={1}
            text={`Braid ${braidTitle}`}
            styles={styles.titleStyle}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardInner}>
            <View style={styles.innerWrapper}>
              <TextComponent text={'Braid Type'} styles={styles.braidTitle} />
              <View style={styles.agePicker}>
                <Picker
                  style={styles.pickerStyle}
                  dropdownIconColor={Colors.white}
                  itemStyle={{
                    fontSize: hp('1.5'),
                  }}
                  selectedValue={selectedVal}
                  onValueChange={(itemValue, itemIndex) => {
                    onSelectValue(itemValue);
                  }}>
                  <Picker.Item label={`Select ${braidTitle}`} value={null} />
                  {data?.map(res => {
                    return <Picker.Item label={res?.item} value={res.id} />;
                  })}
                </Picker>

                <TextComponent
                  text={
                    selectedVal
                      ? data?.filter(res => res?.id == selectedVal)[0]?.item
                      : 'Select braid'
                  }
                  styles={styles.pickerText(selectedVal)}
                />
              </View>
            </View>

            {/* <TextComponent
              text={braidType}
              fade={true}
              styles={styles.braidTitle}
            /> */}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    paddingBottom: hp('1'),
    fontSize: hp('2'),
    // fontWeight: '500',
  },
  topTier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp('2'),
  },
  cardContainer: {
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: hp('1.5'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
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
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('1'),
    paddingVertical: wp('3.5'),
    marginHorizontal: wp('2'),
    borderBottomWidth: wp('0.1'),
    borderColor: Colors.grayFaded,
  },
  braidTitle: {
    fontSize: hp('1.6'),
  },
  agePicker: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: hp('-1.5'),
  },

  pickerText: pickerText => ({
    color: pickerText ? 'white' : 'white',
    paddingRight: wp('10'),
    paddingVertical: hp('0.5'),
    position: 'absolute',
    // width: wp('25'),
    fontSize: hp('1.6'),
    top: hp('0'),
    // opacity: 0.9,
    // backgroundColor: 'black'
  }),
  pickerStyle: {
    width: wp('72'),
    height: hp('3.5'),
    alignItems: 'center',
    alignSelf: 'center',
    verticalAlign: 'middle',
    justifyContent: 'flex-end',
    color: 'transparent',
    // fontSize: hp('1'),
  },
});
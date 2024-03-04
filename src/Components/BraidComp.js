import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {wp, hp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {TextComponent} from './TextComponent';
import {Picker} from '@react-native-picker/picker';

export default function BraidComp({
  braidType,
  braidSize,
  braidLength,
  dateNtime,
  location,
  braidTitle,
  braidContainerStyles,
}) {
  const [selectedAge, setSelectedAge] = useState();
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
                  style={{
                    width: wp('72'),
                    height: hp('3.5'),
                    alignItems: 'center',
                    alignSelf: 'center',
                    verticalAlign: 'middle',
                    justifyContent: 'flex-end',
                    // fontSize: hp('1'),
                    color: 'transparent',
                    // backgroundColor: 'red',
                  }}
                  dropdownIconColor={Colors.white}
                  itemStyle={{
                    fontSize: 40,
                  }}
                  selectedValue={selectedAge}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedAge(itemValue)
                  }>
                  <Picker.Item label="Braid Type" value="" />
                  <Picker.Item label="8 - 13" value="8 - 13" />
                  <Picker.Item label="13 - 15" value="13 - 15" />
                  <Picker.Item label="15 - 18" value="15 - 18" />
                  <Picker.Item label="18 - 21" value="18 - 21" />
                  <Picker.Item label="21 - 24" value="21 - 24" />
                  <Picker.Item label="24 - 27" value="24 - 27" />
                </Picker>

                <TextComponent
                  text={selectedAge ? selectedAge : 'Select braid'}
                  styles={styles.pickerText(selectedAge)}
                />
              </View>
            </View>

            <TextComponent
              text={braidType}
              fade={true}
              styles={styles.braidTitle}
            />
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
});

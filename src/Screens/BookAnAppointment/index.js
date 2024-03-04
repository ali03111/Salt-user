import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../Components/BackHeader';
import {gps, sort} from '../../Assets';
import {Colors} from '../../Theme/Variables';
import UseCalendar from '../../Components/Calendar';
import {hp, wp} from '../../Config/responsive';
import TimeSlot from '../../Components/TimeSlot';
import BraidComp from '../../Components/BraidComp';
import ThemeButton from '../../Components/ThemeButton';
import {TextComponent} from '../../Components/TextComponent';

export default function BookAnAppoint() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = button => {
    setSelectedButton(button === selectedButton ? null : button);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; // Append ellipsis
    } else {
      return text;
    }
  };

  // Example text and maximum character limit
  const exampleText =
    'Select your location to get a service Select your location to get a service';
  const maxLength = 55;

  return (
    <>
      <ScrollView style={styles.container}>
        <BackHeader headerTitle={'Book an Appointment'} icon={sort} />
        <View style={styles.innerContainer}>
          <UseCalendar />
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.white,
              marginVertical: hp('3.5'),
            }}></View>
          <TimeSlot />
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.white,
              marginTop: hp('2'),
              marginBottom: hp('2'),
            }}></View>
          <BraidComp />
          <BraidComp />
          <BraidComp />
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.white,
              marginTop: hp('3'),
              marginBottom: hp('2'),
            }}></View>

          <TextComponent text={'Select Location'} styles={styles.titleStyle} />
          <View style={styles.viewBtnView}>
            <TouchableOpacity
              style={[
                styles.viewAppBtn,
                selectedButton === 'House Call' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('House Call')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'House Call' && styles.selectedButtonText,
                ]}>
                House Call
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewAppBtn,
                selectedButton === 'On - Site' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('On - Site')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 'On - Site' && styles.selectedButtonText,
                ]}>
                On - Site
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.white,
              marginTop: hp('5'),
              marginBottom: hp('2.5'),
            }}></View>

          <TextComponent text={'Select Location'} styles={styles.titleStyle} />

          <View style={styles.locationMarkStyle}>
            <TextComponent
              text={truncateText(exampleText, maxLength)}
              styles={styles.markerTitle}
            />
            <Image
              source={gps}
              resizeMode="contain"
              style={styles.markerIconStyle}
            />
          </View>

          <ThemeButton
            title={'Find Professionals'}
            style={styles.profesStyle}
            textStyle={{fontSize: hp('2')}}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeBlack,
  },
  innerContainer: {
    width: wp('92'),
    paddingTop: hp('2.5'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2'),
    alignItems: 'center',
    width: wp('90'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewAppBtn: {
    // backgroundColor: Colors.grayFadedBtn,
    width: wp('43'),
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: hp('1.5'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: Colors.white,
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
  buttonText: {
    color: Colors.white,
  },
  selectedButton: {
    backgroundColor: 'white',
    color: Colors.themeBlack,
  },
  selectedButtonText: {
    color: 'black',
  },
  titleStyle: {
    marginTop: hp('2'),
  },
  locationMarkStyle: {
    width: wp('92'),
    borderRadius: 10,
    borderWidth: wp('0.1'),
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: wp('4'),
    marginTop: hp('2'),
    height: hp('6'),
  },
  markerTitle: {
    fontSize: hp('1.6'),
    color: Colors.white,
  },
  markerIconStyle: {
    position: 'absolute',
    right: wp('2.5'),
  },
  profesStyle: {
    backgroundColor: Colors.grayFadedBtn,
    marginTop: hp('5'),
    marginBottom: hp('2'),
  },
});

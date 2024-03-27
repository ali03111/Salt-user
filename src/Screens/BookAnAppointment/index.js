import {
  Image,
  ScrollView,
  StatusBar,
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
import useBookAnAppointment from './useBookAnAppointment';
import {styles} from './styles';
import {locationType, timeSlots} from '../../Utils/localDB';
import Slider from '@react-native-community/slider';

export default function BookAnAppoint({navigation}) {
  const {
    data,
    onSelectValue,
    length,
    size,
    type,
    locationId,
    radius,
    date,
    findProfessFun,
    time,
  } = useBookAnAppointment(navigation);

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
      <BackHeader
        headerTitle={'Book an Appointment'}
        icon={sort}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <UseCalendar
            onSelectVal={data => onSelectValue('date', data)}
            selectedVal={date}
            markedDates={[]}
          />
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.grayFaded,
              marginVertical: hp('3.5'),
            }}></View>
          <TimeSlot
            data={timeSlots}
            selectedVal={time}
            onSelectVal={res => onSelectValue('time', res)}
          />
          <View
            style={{
              borderBottomWidth: 0.4,
              borderColor: Colors.grayFaded,
              marginTop: hp('2'),
              marginBottom: hp('2'),
            }}></View>
          <BraidComp
            onSelectValue={value => onSelectValue('type', value)}
            braidTitle={'Braid Type'}
            data={data?.braid_type ?? []}
            selectedVal={type}
          />
          <BraidComp
            onSelectValue={value => onSelectValue('size', value)}
            braidTitle={'Braid Size'}
            data={data?.braid_size ?? []}
            selectedVal={size}
          />
          <BraidComp
            onSelectValue={value => onSelectValue('length', value)}
            braidTitle={'Braid Length'}
            data={data?.braid_length ?? []}
            selectedVal={length}
          />
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.grayFaded,
              marginTop: hp('3'),
              marginBottom: hp('2'),
            }}></View>
          <TextComponent text={'Select Location'} styles={styles.titleStyle} />
          <View style={styles.viewBtnView}>
            <TouchableOpacity
              style={[
                styles.viewAppBtn,
                locationId == locationType[0]?.locId && styles.selectedButton,
              ]}
              onPress={() =>
                onSelectValue('locationId', locationType[0]?.locId)
              }>
              <TextComponent
                text={locationType[0]?.label}
                styles={{
                  ...styles.buttonText,
                  ...(locationId === locationType[0]?.locId &&
                    styles.selectedButtonText),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewAppBtn,
                locationId == locationType[1]?.locId && styles.selectedButton,
              ]}
              onPress={() =>
                onSelectValue('locationId', locationType[1]?.locId)
              }>
              <TextComponent
                text={locationType[1]?.label}
                styles={{
                  ...styles.buttonText,
                  ...(locationId === locationType[1]?.locId &&
                    styles.selectedButtonText),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: Colors.grayFaded,
              marginTop: hp('5'),
              marginBottom: hp('2.5'),
            }}></View>

          <Slider
            style={styles.rangeSld}
            minimumValue={10}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor={Colors.grayFaded}
            onValueChange={e => onSelectValue('radius', Math.floor(e))}
            thumbTintColor={Colors.themeRed}
          />
          <View style={styles.rangeView}>
            <TextComponent text={'0 km'} styles={styles.kmText} />
            <TextComponent text={radius + ' km'} styles={styles.kmText} />
          </View>
          {radius > 0 && (
            <ThemeButton
              title={'Find Professionals'}
              style={styles.profesStyle}
              textStyle={{fontSize: hp('2')}}
              onPress={findProfessFun}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

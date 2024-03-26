import React, {useState} from 'react';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import {Colors, FontSize} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UseCalendar = ({onSelectVal, selectedVal, markedDates}) => {
  const today = new Date(); // Get current date
  today.setDate(today.getDate() + 1); // Increase date by one day

  const minDate = today.toISOString().split('T')[0];

  let markedDay = {};

  markedDates.map(item => {
    markedDay[item] = {
      selected: true,
      marked: true,
      selectedColor: Colors.grayFadedBtn,
      disabled: true,
      inactive: true,
      disableTouchEvent: true,
    };
  });

  return (
    <Calendar
      firstDay={1}
      pastScrollRange={1}
      futureScrollRange={1}
      scrollEnabled
      minDate={minDate} // Set minimum selectable date
      showScrollIndicator={true}
      renderArrow={direction =>
        direction === 'left' ? (
          <MaterialCommunityIcons
            name="chevron-left"
            color="white"
            size={hp('3')}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-right"
            color="white"
            size={hp('3')}
          />
        )
      }
      onDayPress={day => {
        onSelectVal(day.dateString);
      }}
      markedDates={{
        [selectedVal]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'orange',
        },
        ...markedDay,
      }}
      style={{
        height: 'auto',
        width: wp('92'),
        marginLeft: wp('-1'),
        paddingBottom: wp('1'),
        paddingTop: 0,
        paddingVertical: hp('2'),
        borderWidth: 0.3,
        borderColor: Colors.grayFaded,
        borderRadius: 10,
        shadowColor: '#181818',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      theme={{
        calendarBackground: Colors.themeBlack,
        textSectionTitleColor: Colors.white,
        selectedDayBackgroundColor: Colors.themeRed,
        selectedDayTextColor: '#ffffff',
        todayTextColor: Colors.grayFaded,
        dayTextColor: Colors.white,
        textDisabledColor: Colors.grayFaded,
        monthTextColor: Colors.white,
        arrowColor: Colors.white,
        textDayFontSize: hp('1.5'),
        textMonthFontSize: hp('2'),
        textDayStyle: {
          alignItems: 'center',
          alignSelf: 'center',
          lineHeight: hp('2.6'),
        },

        'stylesheet.calendar.main': {},
        'stylesheet.calendar.header': {
          headerContainer: {
            //   backgroundColor: 'orange',
            position: 'absolute',
            flexDirection: 'row',
            left: wp('0'),
            gap: 5, // because of the loader spinner 'displayLoadingIndicator' if its active
          },
          header: {
            //   backgroundColor: 'purple',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: wp('0'),
            marginTop: hp('2'),
            alignItems: 'center',
          },
        },
      }}
    />
  );
};
export default UseCalendar;

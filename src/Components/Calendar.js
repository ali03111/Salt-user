import React, {useState} from 'react';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import { Colors, FontSize } from '../Theme/Variables';
import { hp, wp } from '../Config/responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


 const UseCalendar = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
    firstDay={1}
    pastScrollRange={1}
    futureScrollRange={1}
    scrollEnabled
    showScrollIndicator={true}
    renderArrow={(direction) => direction === 'left' ? <MaterialCommunityIcons
    name="chevron-left"
    color="white"
    size={hp('3')}
  /> : <MaterialCommunityIcons
  name="chevron-right"
  color="white"
  size={hp('3')}
/>}
    onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    style={{
        
        height: 'auto',
        shadowColor: '#000',
    
      }}
      theme={{
        backgroundColor: Colors.themeBlack,
        calendarBackground: Colors.themeBlack,
        textSectionTitleColor: Colors.white,
        selectedDayBackgroundColor: Colors.themeRed,
        selectedDayTextColor: '#ffffff',
        todayTextColor: 'white',        
        dayTextColor: Colors.grayFaded,
        textDisabledColor: Colors.grayFaded,
        monthTextColor: Colors.white,
        arrowColor: Colors.white,
        textDayFontSize: hp('1.6'),
        borderWidth: 0.1,
        borderColor: 'white',
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 5,
          backgroundColor: Colors.themeBlack,
          elevation: 24,
          'stylesheet.calendar.main': {
           
          },
        'stylesheet.calendar.header': {
            headerContainer: {
            //   backgroundColor: 'orange',
              position: 'absolute',
              flexDirection: 'row',
              left: wp('0'),
              gap: 5,  // because of the loader spinner 'displayLoadingIndicator' if its active 
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
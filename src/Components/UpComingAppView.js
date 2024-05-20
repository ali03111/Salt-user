import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ScrollView,
  Text,
  Switch,
} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  arrowLeftOld,
  arrows,
  calendarWhite,
  chatBtn,
  divider,
  downArrow,
  information,
} from '../Assets';
import ThemeButton from './ThemeButton';
import {Touchable} from './Touchable';
import {Colors} from '../Theme/Variables';
import Animatedd, {useSharedValue, withSpring} from 'react-native-reanimated';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {UpcomingData} from '../Utils/localDB';
import {imageUrl} from '../Utils/Urls';
import {extractTimeFromString} from '../Utils/globalFunctions';

export const UpComingAppView = ({
  data,
  viewStyle,
  onPressDetail,
  onPressProfile,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [accordionItem, setAccordionItem] = useState('');

  console.log('datadatadatadatadatadata', data);

  // const renderHeader = (item, index) => {
  //   const i = [index].toString() == accordionItem.toString();
  const address = JSON.parse(data?.location?.location);
  return (
    <View style={{...styles.comingView, ...viewStyle}}>
      <View style={styles.bottomViewTop}>
        <View style={styles.bottomView}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            color="white"
            size={hp('2.6')}
          />
          <View style={{flexDirection: 'row'}}>
            <TextComponent
              text={data?.date + ' - '}
              fade={true}
              styles={styles.dateText}
            />
            <TextComponent
              text={extractTimeFromString(data?.time)}
              fade={true}
              styles={styles.timeText}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextComponent
            text={'Cancelled'}
            styles={{
              fontSize: hp('1.6'),
              color: Colors.white,
              marginRight: wp('1.5'),
            }}
          />
          <Switch
            trackColor={{false: Colors.grayFaded, true: Colors.avtiveCard}}
            thumbColor={isEnabled ? Colors.themeRed : Colors.avtiveCard}
            ios_backgroundColor="#EAF6ED"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Touchable style={styles.userView} onPress={onPressProfile}>
        <CircleImage image={imageUrl(data?.professional?.image)} uri={true} />
        <View style={styles.nameView}>
          <TextComponent
            text={`With - ${data?.professional?.name}`}
            styles={{fontSize: hp('2.5'), fontWeight: '500'}}
          />
        </View>
      </Touchable>
      <View style={styles.locationStyle}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          color="white"
          size={hp('2.8')}
        />
        <TextComponent
          text={
            address?.currentLocation?.description ??
            'Street338 Catherine St, Columbia.'
          }
          fade={true}
          styles={{
            fontSize: hp('1.8'),
            width: wp('80'),
          }}
          numberOfLines={2}
        />
      </View>
      {/* <TextComponent
        text={'Appointment Details'}
        styles={{marginTop: hp('3'), marginLeft: wp('3')}}
      /> */}
      {/* <View style={styles.bottomTextView}>
        {['pny tall', 'Extra Small', 'CHain legth', 'House Call'].map(res => {
          return <TextComponent text={res} styles={styles.roundText} />;
        })}
      </View> */}
      <View style={styles.viewBtnView}>
        <ThemeButton
          title={'Chat'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
        />
        <ThemeButton
          title={'View Detail'}
          style={styles.viewAppBtn}
          image={downArrow}
          imageStyle={{
            tintColor: 'white',
            width: wp('2.5'),
            marginLeft: wp('2'),
          }}
          onPress={onPressDetail}
          textStyle={{fontSize: hp('1.5')}}
        />
      </View>
    </View>
  );
};

// const renderContent = item => {
//   // console.log('check asd', item.script_media);
//   return (
//     <View
//       style={{
//         ...styles.comingView,
//         borderTopWidth: 0,
//         // top: hp('-10'),
//       }}></View>
//   );
// };

// const renderAccordion = useCallback(() => {
//   return (
//     <>
//       <Accordion
//         underlayColor={Colors.themeBlack}
//         activeSections={accordionItem}
//         sections={data}
//         containerStyle={{backgroundColor: 'blue', alignItems: 'center'}}
//         expandFromBottom={false}
//         // renderSectionTitle={this._renderSectionTitle}
//         renderHeader={renderHeader}
//         renderContent={renderContent}
//         onChange={(i, index) => {
//           setAccordionItem(i);
//           console.log('i', i);
//         }}
//       />
//     </>
//   );
// });

// return renderAccordion();
// };

const styles = StyleSheet.create({
  bottomViewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('0'),
    paddingVertical: hp('2'),
    borderBottomWidth: wp('0.1'),
    borderColor: Colors.grayBorder,
    marginHorizontal: hp('1.5'),
    marginBottom: hp('2'),
  },
  comingView: {
    paddingBottom: hp('2'),
    width: wp('90'),
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // height: hp('10'),
    // paddingVertical: hp('2'),
    // paddingHorizontal: wp('3'),
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
    // height: hp('22'),
    // backgroundColor: 'white',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: wp('2'),
    // marginTop: hp('1'),

    overflow: 'hidden',
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    // height: hp('5'),
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    justifyContent: 'flex-start',
    paddingHorizontal: wp('0'),
    // borderRadius: 10,
  },
  dateText: {
    fontSize: hp('1.6'),
    marginLeft: wp('2'),
    marginRight: wp('0'),
    color: Colors.grayFaded,
  },
  timeText: {
    fontSize: hp('1.6'),
    marginLeft: wp('0'),
    color: Colors.grayFaded,
  },
  userView: {
    flexDirection: 'row',
    width: wp('90'),
    paddingHorizontal: wp('2.5'),
    marginTop: hp('1'),
    alignItems: 'center',
  },
  nameView: {marginLeft: wp('2'), justifyContent: 'space-between'},
  infIcon: {
    width: wp('6'),
    height: hp('5'),
    marginLeft: wp('1'),
  },
  viewBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2'),
    alignItems: 'center',
  },
  viewAppBtn: {
    backgroundColor: Colors.grayFadedBtn,
    width: wp('38'),
    height: hp('5'),
    alignItems: 'center',
    fontSize: hp('1.5'),
  },
  roundText: {
    paddingHorizontal: wp('2'),
    paddingVertical: hp('0.5'),
    backgroundColor: Colors.lightBlack,
    width: 'auto',
    borderRadius: 5,
    fontSize: hp('1.8'),
    marginVertical: hp('1.5'),
  },
  bottomTextView: {
    flexDirection: 'row',
    width: wp('85'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    //   marginVertical: hp('2'),
    flexWrap: 'wrap',
    marginBottom: hp('0.5'),
  },
  locationStyle: {
    marginTop: hp('2'),
    marginHorizontal: hp('1.5'),
    paddingBottom: hp('3'),
    borderBottomWidth: wp('0.1'),
    borderColor: Colors.grayBorder,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

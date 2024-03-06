import React from 'react';
import {Image, Platform, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {Colors} from '../../Theme/Variables';
import {CircleImage} from '../../Components/CircleImage';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {calendarWhite, divider} from '../../Assets';

const url =
  'https://images.pexels.com/photos/19321447/pexels-photo-19321447/free-photo-of-needle-branch-with-christmas-ornament.jpeg';

export const UpComingAppCards = ({data}) => {
  return (
    <View style={styles.comingView}>
      <View style={styles.upperView}>
        <CircleImage image={data?.image} uri={true} />
        <TextComponent
          text={`With - ${data?.name}`}
          styles={{marginLeft: wp('2')}}
        />
        <Entypo
          name="dots-three-vertical"
          color={'white'}
          size={hp('2')}
          style={{marginLeft: Platform.OS == 'ios' ? wp('25') : wp('30')}}
        />
      </View>
      <View style={styles.locationView}>
        <SimpleLineIcons name="location-pin" color="white" size={hp('2')} />
        <TextComponent
          text={data?.location}
          fade={true}
          numberOfLines={1}
          styles={styles.locationIcon}
        />
      </View>
      <Image source={divider} resizeMode="contain" style={styles.divider} />
      <View style={styles.bottomView}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          color="white"
          size={hp('3')}
        />
        <TextComponent text={data?.date} fade={true} styles={styles.dateText} />
        <MaterialCommunityIcons
          name="clock-outline"
          color="white"
          size={hp('3')}
        />
        <TextComponent text={data?.time} fade={true} styles={styles.timeText} />
      </View>
    </View>
  );
};

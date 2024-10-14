import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {CircleImage} from './CircleImage';
import {TextComponent} from './TextComponent';
import {Touchable} from './Touchable';
import {imageUrl} from '../Utils/Urls';

export const MessageViewComp = ({data, viewStyle, onPress, userData}) => {
  // Convert Firebase timestamp into a JS Date object
  const timestamp = data?.lastMessage?.createdAt?.seconds
    ? new Date(data?.lastMessage?.createdAt?.seconds * 1000)
    : '';

  // Format the date into a readable time (e.g., '4:32 PM')
  const formattedTime = !timestamp
    ? ''
    : timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
  const isUnread =
    userData?.id === data?.lastMessage?.receiver &&
    data?.lastMessage?.seen == 0;

  return (
    <Touchable style={{...styles.mainView, ...viewStyle}} onPress={onPress}>
      <View style={styles.userView}>
        <CircleImage
          image={imageUrl(data?.professional?.image)}
          styles={styles.circleImage}
          uri={true}
        />
        <View style={{marginLeft: wp('2'), marginTop: hp('-0.8')}}>
          <TextComponent
            text={data?.professional?.name}
            styles={{marginTop: hp('0')}}
          />
          <TextComponent
            text={`${data?.braid_type?.item}, ${data?.braid_type?.price} `}
            styles={{fontSize: hp('1.5'), marginTop: hp('0.5')}}
            numberOfLines={1}
            fade={true}
          />
          <TextComponent
            text={data?.lastMessage?.text || 'Start Conversation...'}
            styles={styles.lastMsg}
            numberOfLines={1}
          />
        </View>
        <TextComponent
          text={formattedTime}
          fade={true}
          styles={styles.timeText}
        />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('90'),
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: Colors.lightBlack,
    borderWidth: 0.3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
  },
  userView: {
    flexDirection: 'row',
    width: wp('90'),
    paddingHorizontal: wp('2'),
    marginVertical: hp('2'),
    // marginTop: hp('1'),
  },
  lastMsg: {
    fontSize: hp('1.7'),
    width: wp('60'),
    marginTop: hp('0.5'),
  },
  timeText: {
    textAlign: 'right',
    alignSelf: 'right',
    right: wp('2'),
    marginTop: hp('1'),
    position: 'absolute',
    fontSize: hp('1.5'),
  },
});

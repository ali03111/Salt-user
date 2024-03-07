import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImage';
import {downArrow, information} from '../Assets';
import ThemeButton from './ThemeButton';
import {Colors} from '../Theme/Variables';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {imageUrl} from '../Utils/Urls';

export const FavoriteComp = ({data, viewStyle, onReq, onProView}) => {
  return (
    <View style={{...styles.comingView, ...viewStyle}}>
      <View style={styles.userView}>
        <View style={{flexDirection: 'row'}}>
          <CircleImage
            image={imageUrl(data?.image)}
            uri={true}
            styles={styles.bigImg}
          />
          <View style={styles.nameView}>
            <TextComponent
              text={`${data?.user?.email}`}
              styles={{fontSize: hp('2.5'), fontWeight: '500'}}
            />
            <View style={styles.locationStyle}>
              <MaterialCommunityIcons
                name="star"
                color="#FFCB4B"
                size={hp('2')}
              />
              <TextComponent
                text={`( ${data?.rateCount} Reviews )`}
                fade={true}
                styles={{
                  fontSize: hp('1.6'),
                  marginLeft: wp('1'),
                }}
                numberOfLines={1}
              />
            </View>
          </View>
        </View>

        <View>
          <TextComponent
            text={`$${data?.price ?? '80'}`}
            styles={{
              fontSize: hp('2.5'),
              fontWeight: '500',
              marginRight: wp('1'),
            }}
          />
        </View>
      </View>

      <View style={styles.viewBtnView}>
        <ThemeButton
          title={'View Profile'}
          style={styles.viewAppBtn}
          image={downArrow}
          imageStyle={{
            tintColor: 'white',
            width: wp('2.5'),
            marginLeft: wp('2'),
          }}
          textStyle={{fontSize: hp('1.5')}}
          onPress={onProView}
        />
        <ThemeButton
          title={'Send Request'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
          onPress={onReq}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigImg: {
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').width * 0.13,
  },

  comingView: {
    paddingVertical: hp('2'),
    width: wp('90'),
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // height: hp('10'),
    // paddingVertical: hp('2'),
    // paddingHorizontal: wp('3'),
    overflow: 'hidden',
    shadowColor: '#181818',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    // marginTop: hp('1'),
    alignItems: 'top',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
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
    marginTop: hp('2.5'),
    alignItems: 'center',
  },
  viewAppBtn: {
    backgroundColor: Colors.grayFadedBtn,
    width: wp('38'),
    height: hp('5'),
    alignItems: 'center',
    fontSize: hp('1.5'),
  },

  locationStyle: {
    marginTop: hp('0.5'),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

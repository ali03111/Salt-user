import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {CircleImage} from './CircleImage';
import {downArrow, information} from '../Assets';
import ThemeButton from './ThemeButton';
import {Colors} from '../Theme/Variables';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Review = ({data, viewStyle}) => {
  return (
    <View style={{...styles.comingView, ...viewStyle}}>
      
      <View style={styles.userView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CircleImage image={data?.image} uri={true} />
        <View style={styles.nameView}>
          <TextComponent
            text={`${data?.name}`}
            styles={{fontSize: hp('2'), fontWeight: '500'}}
          />
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons
              name="star"
              color="#FFCB4B"
              size={hp('2')}
            />
            <TextComponent
              text={`${data?.rateCount}`}
              fade={true}
              styles={{
                fontSize: hp('1.6'),
                marginLeft: wp('0.5'),
                marginRight: wp('2'),               
              }}
              numberOfLines={1}
            />
        </View>
      </View>
      <View style={styles.locationStyle}>
        
        <TextComponent
          text={`${data?.reviewText}`}
          fade={true}
          styles={{
            fontSize: hp('1.6'),
            lineHeight: 15,
            width: '100%',
            // backgroundColor: 'red'
          }}
         
        />
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
 
  comingView: {
    paddingBottom: hp('2'),
    width: wp('100'),
 
   
    backgroundColor: Colors.themeBlack,
 
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
    width: '100%',
    paddingHorizontal: wp('2.5'),
    marginTop: hp('1'),
    alignItems: 'center',
    justifyContent: 'space-between'
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

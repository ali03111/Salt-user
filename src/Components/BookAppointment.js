import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../Theme/Variables';
import { wp, hp } from '../Config/responsive';
import { onBoardOne , profile , downArrow} from '../Assets';
import { CircleImage } from './CircleImageComponent';
import { TextComponent } from './TextComponent';
import ThemeButton from './ThemeButton';

export default function BookAppointment({
    profileImg,
    uri,
    title,
    tagline,
    onPress,
    braidType,
    braidSize,
    braidLength,
    dateNtime,
    location
}) {
  return (

   <View style={styles.container}>
        <Image
          source={onBoardOne}
          style={{...styles.bgImg}}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
        {/* <CircleImage image={data?.image} uri={true} /> */}
        <CircleImage image={profileImg} uri={uri} styles={styles.profileStyle} />
        <TextComponent numberOfLines={1}  text={title} styles={styles.titleStyle} />
        <TextComponent numberOfLines={1}  text={tagline} styles={styles.tagLineStyle} fade={true} />        
        </View>
        <View style={styles.topTier}>
                    <TextComponent numberOfLines={1}  text={'Appointment Details'} styles={styles.leftStyle} />
                    <TextComponent numberOfLines={1}  text={'Back to Home'} styles={styles.tagLineStyle} onPress={onPress} fade={true} />
            </View>
        <View style={styles.cardContainer}>
            <View style={styles.cardInner}>
                <TextComponent text={'Braid Type'} styles={styles.braidTitle}/>
                <TextComponent text={braidType} fade={true} styles={styles.braidTitle}/>
            </View>
            <View style={styles.cardInner}>
                <TextComponent text={'Braid Size'} styles={styles.braidTitle}/>
                <TextComponent text={braidSize} fade={true} styles={styles.braidTitle}/>
            </View>
            <View style={styles.cardInner}>
                <TextComponent text={'Braid Lengths'} styles={styles.braidTitle}/>
                <TextComponent text={braidLength} fade={true} styles={styles.braidTitle}/>
            </View>
            <View style={styles.cardInner}>
                <TextComponent text={'Date & Time'} styles={styles.braidTitle}/>
                <TextComponent text={dateNtime} fade={true} styles={styles.braidTitle}/>
            </View>
            <View style={styles.cardInner}>
                <TextComponent text={'Location'} styles={styles.braidTitle}/>
                <TextComponent text={location} fade={true} styles={styles.braidTitle}/>
            </View>
        </View>


        <View style={styles.viewBtnView}>
        <ThemeButton
          title={'Cancel'}
          style={styles.viewAppBtn}
          image={downArrow}
          imageStyle={{
            tintColor: 'white',
            width: wp('2.5'),
            marginLeft: wp('2'),
          }}
          textStyle={{fontSize: hp('1.5')}}
        />
        <ThemeButton
          title={'Chat'}
          style={{...styles.viewAppBtn, backgroundColor: 'red'}}
          textStyle={{fontSize: hp('1.5')}}
        />
      </View>

   </View>
  
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.black,
    },
    bgImg:{
        width: wp('100'),
          height: hp('60'),
          marginTop: hp('-25'),
    },
    topContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        marginTop: hp('-3'),
    },
    profileStyle:{
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,
    },
    titleStyle:{
        paddingVertical: hp('1'),
        fontSize: hp('2.5'),
        fontWeight: '500',
    },
    tagLineStyle:{
        fontSize: hp('1.6'),
    },
    topTier:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('90'),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp('3')              
    },
    cardContainer:{       
        width: wp('90'),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: hp('1.5'),
        borderRadius: 10,
        borderWidth: wp('0.1'),
        borderColor: Colors.grayFaded, 
        shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: Colors.themeBlack,
    },
    cardInner:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('1'),
        paddingVertical: wp('3.5'),
        marginHorizontal: wp('2'),
        borderBottomWidth: wp('0.1'),
        borderColor: Colors.grayFaded,
    },
    braidTitle:{
        fontSize: hp('1.6')
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
        backgroundColor: Colors.grayFadedBtn,
        width: wp('43'),
        height: hp('5'),
        alignItems: 'center',
        fontSize: hp('1.5'),
      },
});
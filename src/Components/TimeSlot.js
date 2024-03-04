import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextComponent } from './TextComponent'
import { hp, wp } from '../Config/responsive'
import { Colors } from '../Theme/Variables'

export default function TimeSlot({
    startTime,
    endTime
}) {
  return (
   <>
    <View>
        <TextComponent text={'Time Slots'} styles={styles.titleStyle}/>
        <View style={styles.innerContainer}>
            <TextComponent  styles={styles.slotStyle} text={`${startTime} to ${endTime}`}/>          
        </View>
    </View>
   </>
  )
}
const styles = StyleSheet.create({
    titleStyle:{
        textAlign: 'left',
        fontSize: hp('2'),
    },
    innerContainer:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp('2')
    },
    slotStyle:{
        fontSize: hp('1.6'),
        color: Colors.white,
        width: wp('44.5'),
        paddingHorizontal: wp('2'),
        paddingVertical: hp('1.5'),
        borderRadius: 8,
        borderWidth: wp('0.1'),
        borderColor: Colors.white,
        textAlign: 'center',
        shadowColor: "#181818",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,

    // backgroundColor: Colors.themeBlack,
    marginBottom: hp('1.5')
       }
})
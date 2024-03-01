import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/BackHeader'
import { sort } from '../../Assets'
import { Colors } from '../../Theme/Variables'
import UseCalendar from '../../Components/Calendar'
import { hp, wp } from '../../Config/responsive'


export default function BookAnAppoint() {
  return (
    <>  
    <ScrollView style={styles.container}>
        <BackHeader headerTitle={'Book an Appointment'} icon={sort} />
        <View style={styles.innerContainer}>
        <UseCalendar />
          
        </View>
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.themeBlack,
    },
    innerContainer:{
      width: wp('90'),
      paddingTop: hp('2.5'),
      marginLeft: 'auto',
      marginRight: 'auto'
    }
})
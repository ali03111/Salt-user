import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/BackHeader'
import { styles } from './style'
import { gps } from '../../Assets'

export default function ProfessionalList() {
  return (
  <>
    <BackHeader  headerTitle={'Professional List'} icon={gps} saveReset={gps} />
    <View style={styles.container}>

    </View>
  </>
  )
}


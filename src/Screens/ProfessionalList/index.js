import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/BackHeader'
import { styles } from './style'
import { arrowBack, filter, filterSet, gps } from '../../Assets'
import { TextComponent } from '../../Components/TextComponent'

export default function ProfessionalList() {
  return (
  <>
    <BackHeader  isBack={true} headerTitle={'Professional List'} icon={filterSet} saveReset={filter} />
    <View style={styles.container}>
        <TextComponent text={'tetsdsds'}/>
    </View>
  </>
  )
}


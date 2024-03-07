import { View, Text } from 'react-native'
import React from 'react'
import { TextComponent } from '../../Components/TextComponent'
import { styles } from './styles'

export default function ProfessionalProfile() {
  return (
    <>
       <View style={styles.container}>
          <TextComponent text={'Sort'} styles={styles.titleSytle} />
       </View>
    </>
  )
}
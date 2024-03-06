import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import BackHeader from '../../Components/BackHeader'
import { styles } from './style'
import { arrowBack, filter, filterSet, gps } from '../../Assets'
import { TextComponent } from '../../Components/TextComponent'
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {UpcomingData} from '../../Utils/localDB';

import {hp} from '../../Config/responsive';
import { FavoriteComp } from '../../Components/FavoriteComp'

const ProfessionalList = () => {
  return (
  <>
    <BackHeader  isBack={true} headerTitle={'Professional List'} icon={filterSet} saveReset={filter} />
      <View style={styles.container}>
      <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={UpcomingData}
        flatViewStyle={styles.upComingFlatlistView}
        InnerCompnonet={item => (
          <FavoriteComp
            viewStyle={{
              marginBottom: hp('2'),
            }}
            data={item}
          />
        )}
      />
      </View>
     </View> 
  </>
  )
}
export default memo(ProfessionalList);


import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {arrowBack, filter, filterSet, gps} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {UpcomingData} from '../../Utils/localDB';

import {hp} from '../../Config/responsive';
import {FavoriteComp} from '../../Components/FavoriteComp';
import useProfessionalList, {mutate} from './useProfessionalList';

const ProfessionalList = ({navigation, route}) => {
  const {appData, profData, onBook} = useProfessionalList(navigation, route);
  return (
    <>
      <BackHeader
        isBack={true}
        headerTitle={'Professional List'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AniFlatOneByOne
          data={profData}
          flatViewStyle={styles.upComingFlatlistView}
          InnerCompnonet={item => (
            <FavoriteComp
              viewStyle={{
                marginBottom: hp('2'),
              }}
              data={item}
              appData={appData}
              onReq={() => {
                onBook(appData?.id, item?.user?.id);
              }}
              onProView={() =>
                navigation.navigate('ProfessionalProfileScreen', {
                  item: {user: item, appData},
                })
              }
            />
          )}
        />
      </View>
    </>
  );
};
export default memo(ProfessionalList);

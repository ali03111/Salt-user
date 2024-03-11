import React, {useCallback} from 'react';
import {memo} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import HomeHeader from './homeHeader';
import {HeadingView} from './headingView';
import {UpComingAppCards} from './UpComingAppCard';
import {UpcomingData} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';
import {hp, wp} from '../../Config/responsive';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {arrowRightIcon} from '../../Assets';
import {ProfileCardComp} from '../../Components/ProfileCardComp';
import useHomeScreen from './useHomeScreen';

const HomeScreen = ({navigation}) => {
  const {homeContent, userData} = useHomeScreen();
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <UpComingAppCards
          onPress={() => {
            navigation.navigate('AppointmentDetailScreen', item);
          }}
          data={item}
        />
      );
    },
    [homeContent],
  );
  console.log(JSON.stringify(homeContent), 'kladjs');
  const topRatedrenderItem = useCallback(
    ({item, index}) => {
      // console.log('item', item);
      return (
        <ProfileCardComp
          data={item}
          onPress={() =>
            navigation.navigate('ProfessionalProfileScreen', {
              item: {user: item},
            })
          }
        />
      );
    },
    [UpcomingData],
  );

  return (
    <View style={{flex: 1}}>
      <HomeHeader text={userData.name} />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('5')}}
        showsVerticalScrollIndicator={false}>
        <HeadingView
          title={'Upcoming Appointments'}
          onPress={() => navigation.navigate('AppointmentScreen')}
        />
        <FlatList
          data={homeContent?.upcoming}
          renderItem={renderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upComingFlatlistView}
        />
        <ThemeButton
          title={'Book an Appointment'}
          style={styles.bookBtnView}
          textStyle={styles.btnText}
          image={arrowRightIcon}
          imageStyle={styles.btnImage}
          onPress={() => navigation.navigate('BookAnAppointment')}
        />
        <HeadingView title={'Top-rated professionals '} />
        <FlatList
          data={homeContent?.top_rated}
          renderItem={topRatedrenderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topRatedView}
        />
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);

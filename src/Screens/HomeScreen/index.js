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
import NoDataFoundVer from '../../Components/NoDataFoundVer';
import {RefreshControl} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const {homeContent, onRefresh, refresh} = useHomeScreen();
  const renderItem = useCallback(
    ({item, index}) => {
      return <UpComingAppCards data={item} />;
    },
    [UpcomingData],
  );
  const topRatedrenderItem = useCallback(
    ({item, index}) => {
      // console.log('item', item);
      return <ProfileCardComp data={item} />;
    },
    [UpcomingData],
  );

  return (
    <View style={{flex: 1}}>
      <HomeHeader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        contentContainerStyle={{paddingBottom: hp('5')}}
        showsVerticalScrollIndicator={false}>
        <HeadingView title={'Upcoming Appointments'} />
        <FlatList
          data={UpcomingData}
          renderItem={renderItem}
          scrollEnabled
          refreshing={false}
          extraData={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upComingFlatlistView}
          ListEmptyComponent={
            <NoDataFoundVer
              heading={'Oops...'}
              subHeading={'no upcoming appointments !'}
              text={'Accept requests to view appintments here...'}
            />
          }
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
          ListEmptyComponent={
            <NoDataFoundVer
              heading={'Sorry...'}
              subHeading={'appointments requests !'}
              text={'Complete your profile to get maximum requests...'}
            />
          }
        />
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);

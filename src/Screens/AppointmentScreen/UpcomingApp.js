import {memo, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
// import UpComingAppView from '../../Components/UpComingAppView';
import {UpComingAppView} from '../../Components/UpComingAppView';
import {UpcomingData} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';
import {styles} from './styles';
import {hp} from '../../Config/responsive';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import AniLeftScroll from '../../AnimatedComp/AniLeftScroll';
import useAppointmentScreen from './useAppointmentScreen';
import {EmptyViewComp} from '../../Components/EmptyViewComp';

const UpcomingApp = () => {
  // const renderItem = useCallback(({item, index}) => {
  //   return (
  //     <UpComingAppView
  //       viewStyle={{
  //         marginBottom: hp('2'),
  //       }}
  //     />
  //   );
  // }, []);
  const {dataHistoryUpcoming, onRefresh} = useAppointmentScreen();
  console.log('up', dataHistoryUpcoming?.upcoming);
  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={dataHistoryUpcoming?.upcoming}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{
          ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
        }}
        InnerCompnonet={item => (
          <UpComingAppView
            viewStyle={{
              marginBottom: hp('2'),
            }}
            data={item}
          />
        )}
      />
      {/* <AniLeftScroll /> */}

      {/* <FlatList
        data={UpcomingData}
        renderItem={renderItem}
        scrollEnabled
        refreshing={false}
        extraData={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.upComingFlatlistView}
      /> */}
      {/* <AppointmentReqCompSkeleton /> */}
      {/* <SkeletonPlaceholder>
      <AppointmentReqCompSkeleton />
      <AppointmentReqCompSkeleton />
      <AppointmentReqCompSkeleton />
    </SkeletonPlaceholder> */}
    </View>
  );
};
export default memo(UpcomingApp);

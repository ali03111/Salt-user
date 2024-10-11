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

const UpcomingApp = ({navigation}) => {
  const {dataHistoryUpcoming, onRefresh} = useAppointmentScreen();
  console.log(
    'usdfsdksvdjksdkvkjsdvklcbvdklsbvilsdbilvesdoip',
    dataHistoryUpcoming?.upcoming,
  );
  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={dataHistoryUpcoming?.upcoming}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{
          ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
          onRefresh,
        }}
        InnerCompnonet={item => (
          <UpComingAppView
            viewStyle={{
              marginBottom: hp('2'),
            }}
            onPressDetail={() =>
              navigation.navigate('AppointmentDetailScreen', {
                ...item,
              })
            }
            onChatPress={() =>
              navigation.navigate('ChatScreen', {
                app_id: item?.id,
                userId: item?.professional?.id,
              })
            }
            onPressProfile={() =>
              navigation.navigate('ProfessionalProfileScreen', {
                item: {
                  user: {
                    user: {
                      ...item?.professional,
                      location: item?.location,
                      past_works: item?.past_work,
                      appointment_dates: item?.appointment_dates,
                    },
                    isProfile: true,
                  },
                },
              })
            }
            data={item}
          />
        )}
      />
    </View>
  );
};
export default memo(UpcomingApp);

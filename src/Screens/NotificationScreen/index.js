import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import {styles} from './styles';
import NotificationComp from '../../Components/NotificationComp';
import useNotificationScreen from './useNotificationScreen';
import {divider} from '../../Assets';
import {hp, wp} from '../../Config/responsive';

const NotificationScreen = ({navigation}) => {
  const {notiData, onRefresh} = useNotificationScreen();
  console.log('kdjvbkjsdbvksbdvkbsdklvbsdlkvsd', notiData);
  return (
    <>
      <BackHeader
        isBack={true}
        headerTitle={'Notifications'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AniFlatOneByOne
          data={notiData?.notifications}
          flatViewStyle={styles.upComingFlatlistView}
          flatListProps={{
            ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
            onRefresh,
            ItemSeparatorComponent: (
              <Image
                source={divider}
                resizeMode="contain"
                style={{aspectRatio: 1, width: wp('100'), height: hp('2')}}
              />
            ),
          }}
          InnerCompnonet={item => (
            <NotificationComp
              item={item}
              disabled={item?.appointment_status == 0 ? true : false}
              onPress={() => {
                navigation.navigate(
                  'AppointmentDetailScreen',
                  item?.appointments,
                );
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default memo(NotificationScreen);

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {memo} from 'react';
import ThemeButton from '../../Components/ThemeButton';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {profleImg, textureBg} from '../../Assets';
import {imageUrl} from '../../Utils/Urls';
import {styles} from './styles';
import useAppointmentDetail from './useAppointmentDetail';
import {locationType} from '../../Utils/localDB';
import {CircleImage} from '../../Components/CircleImage';
import {openGoogleMaps} from '../../Utils/globalFunctions';

const AppointmentDetailScreen = ({route, navigation}) => {
  const {data, onAcceptPress, onCancelPress, status} = useAppointmentDetail(
    navigation,
    route,
  );

  console.log('data?.usersdata?.usersdata?.usersdata?.usersdata?.users', data);

  const address = JSON.parse(data?.users?.location?.location);

  const isHouseCall = Boolean(
    locationType.filter(
      res => res?.locId == data?.users?.locations?.loc_data,
    )[0]?.label == locationType[0]?.locId,
  );

  console.log('address?.aaaaaasdsdsdsdsdsdsa', data?.professional);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor={Colors.themeBlack}
        barStyle={'light-content'}
      />
      <Image
        source={textureBg}
        style={{...styles.bgImg}}
        resizeMode="contain"
      />
      <View style={styles.topContainer}>
        {/* {/ <CircleImage image={data?.image} uri={true} /> /} */}
        <CircleImage
          uri={true}
          image={imageUrl(data?.professional?.image)}
          styles={styles.profileStyle}
        />
        <TextComponent
          numberOfLines={1}
          text={data?.professional?.name}
          styles={styles.titleStyle}
          onPress={() =>
            navigation.navigate('ProfessionalProfileScreen', {
              item: {
                user: {
                  user: {
                    ...data?.professional,
                    location: data?.location,
                    past_works: data?.past_work,
                    appointment_dates: data?.appointment_dates,
                  },
                  isProfile: true,
                },
              },
            })
          }
        />
        <TextComponent
          numberOfLines={1}
          text={`${data?.braid_type?.item} Professional`}
          styles={styles.tagLineStyle}
          fade={true}
        />
      </View>
      <View style={styles.topTier}>
        <TextComponent
          numberOfLines={1}
          text={'Appointment Details'}
          styles={styles.leftStyle}
        />
        <TextComponent
          numberOfLines={1}
          text={'Back to Home'}
          styles={styles.tagLineStyle}
          onPress={() => navigation.navigate('MybottomTabs')}
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Type'} styles={styles.braidTitle} />
          <TextComponent
            // text={'gel twist'}
            text={data?.braid_type?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Size'} styles={styles.braidTitle} />
          <TextComponent
            // text={'extra small'}
            text={data?.braid_size?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Braid Lengths'} styles={styles.braidTitle} />
          <TextComponent
            // text={'thigh length'}
            text={data?.braid_length?.item}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Date & Time'} styles={styles.braidTitle} />
          <TextComponent
            text={`${data?.date} ${data?.time}`}
            fade={true}
            styles={styles.braidTitle}
          />
        </View>
        <View style={styles.cardInner}>
          <TextComponent text={'Location'} styles={styles.braidTitle} />
          <View style={{flexDirection: 'row'}}>
            <TextComponent
              text={`( ${
                locationType.filter(
                  res => res?.locId == data?.users?.location?.loc_data,
                )[0]?.label
              } ) `}
              fade={true}
              styles={styles.braidTitle}
            />
            <TextComponent
              text={'View on map'}
              styles={{color: Colors.themeRed, fontSize: hp('1.5')}}
              onPress={() =>
                openGoogleMaps(
                  address?.currentLocation?.coords?.latitude,
                  address?.currentLocation?.coords?.longitude,
                )
              }
            />
          </View>
        </View>
        {!isHouseCall && (
          <View style={styles.cardInner}>
            <TextComponent text={'Address'} styles={styles.braidTitle} />
            <TextComponent
              text={`${address?.currentLocation?.description}`}
              fade={true}
              styles={styles.braidTitle}
            />
          </View>
        )}
      </View>

      {!data.isCompleted && (
        <View style={styles.viewBtnView}>
          {/* {status == null ? ( */}
          <ThemeButton
            title={data?.isPending ? 'Reject' : 'Cancel'}
            style={styles.viewAppBtn}
            textStyle={{fontSize: hp('1.5')}}
            onPress={onCancelPress[data?.isPending]}
          />
          {/* ) : ( */}
          {/* // <TextComponent text={'hufhucvjvcc'} /> */}
          {/* )} */}
          <ThemeButton
            title={data?.isPending ? 'Accept' : 'Chat'}
            style={{...styles.viewAppBtn, backgroundColor: 'red'}}
            textStyle={{fontSize: hp('1.5')}}
            onPress={onAcceptPress[data?.isPending]}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default memo(AppointmentDetailScreen);

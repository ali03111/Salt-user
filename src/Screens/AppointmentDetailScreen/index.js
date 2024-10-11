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
import {StripePublicKey, imageUrl} from '../../Utils/Urls';
import {styles} from './styles';
import useAppointmentDetail from './useAppointmentDetail';
import {locationType} from '../../Utils/localDB';
import {CircleImage} from '../../Components/CircleImage';
import {openGoogleMaps} from '../../Utils/globalFunctions';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';

const AppointmentDetailScreen = ({route, navigation}) => {
  const {data, onAcceptPress, onCancelPress, status, hitPayment, onChatClick} =
    useAppointmentDetail(navigation, route);

  const {
    confirmPayment,
    initPaymentSheet,
    presentPaymentSheet,
    retrievePaymentIntent,
    retrieveSetupIntent,
  } = useStripe();

  const address = data?.users?.location?.location
    ? JSON.parse(data?.users?.location?.location)
    : 'kjdsbklvsbdk';

  const isHouseCall = Boolean(
    locationType.filter(
      res => res?.locId == data?.users?.locations?.loc_data,
    )[0]?.label == locationType[0]?.locId,
  );

  console.log(
    'sldbvlksbdlkvbsdklvbslkdbvlksdbvlksdblkbdsksdlbvlksdbvklsdbvlk',
    JSON.stringify(data),
  );

  return (
    <StripeProvider publishableKey={StripePublicKey}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        {/* <StatusBar
          backgroundColor={Colors.themeBlack}
          barStyle={'light-content'}
        /> */}
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
            <TextComponent text={'Price'} styles={styles.braidTitle} />
            <TextComponent
              text={data?.braid_type?.price}
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
          <View style={styles.cardInner}>
            <TextComponent text={'Job Status'} styles={styles.braidTitle} />
            <TextComponent
              text={data?.appointment_status ?? 'Pending'}
              fade={true}
              styles={styles.braidTitle}
            />
          </View>
        </View>

        {data?.appointment_status == 'completed' ? (
          <TextComponent
            text={'Job has been Completed'}
            styles={{
              textAlign: 'center',
              marginTop: hp('3'),
            }}
          />
        ) : (
          !data?.isCompleted && (
            <View style={styles.viewBtnView}>
              <ThemeButton
                title={'Chat'}
                style={styles.viewAppBtn}
                textStyle={{fontSize: hp('1.5')}}
                onPress={onChatClick}
              />
              <ThemeButton
                title={'Complete Job'}
                style={{...styles.viewAppBtn, backgroundColor: 'red'}}
                textStyle={{fontSize: hp('1.5')}}
                // disable={data?.appointment_status == 'started' ? false : true}
                onPress={hitPayment}
              />
            </View>
          )
        )}
      </ScrollView>
    </StripeProvider>
  );
};

export default memo(AppointmentDetailScreen);

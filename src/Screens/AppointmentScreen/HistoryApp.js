import {memo, useCallback, useState} from 'react';
import {Image, TextInput, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {UpcomingData} from '../../Utils/localDB';
import {styles} from './styles';
import {HistoryReqComp} from '../../Components/HistoryReqComp';
import {hp} from '../../Config/responsive';
import useAppointmentScreen from './useAppointmentScreen';
import BottomModal from '../../Components/BottomModal';
import {TextComponent} from '../../Components/TextComponent';
import {Colors, FontSize} from '../../Theme/Variables';
import {AirbnbRating} from 'react-native-ratings';
import ThemeButton from '../../Components/ThemeButton';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {customerRateUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {loadingFalse} from '../../Redux/Action/isloadingAction';
import {errorMessage} from '../../Config/NotificationMessage';
import useReduxStore from '../../Hooks/UseReduxStore';
import {EmptyViewComp} from '../../Components/EmptyViewComp';

const HistoryApp = ({navigation, data}) => {
  console.log(JSON.stringify(data), 'HISTORYYRYRYYRRY');
  const [isModalVisible, setModalVisible] = useState(false);
  const [star, setStar] = useState(0);
  const [about, setAbout] = useState(false);
  const [professional_id, setProfessional_id] = useState(false);
  const [isReview, setIsReview] = useState(0);
  const {dispatch, getState} = useReduxStore();

  const toggleModal = (id, isReview) => {
    console.log(isReview);
    setModalVisible(!isModalVisible);
    setProfessional_id(id);
    setIsReview(isReview);
  };
  console.log(isReview, 'as;dl1111111;');
  const onFinishRating = useCallback(
    val => {
      console.log(val);
      setStar(val);
    },
    [star],
  );
  const {onRefresh} = useAppointmentScreen();
  // const rateReviewFunction = useCallback(() => {}, []);
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log('bodybodybodybodybodybodybodybodybodybodybody', body);
      return API.post(customerRateUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['contentHistoryUpcoming']});
        // setStatus(data?.aor);

        successMessage(data?.message);
        dispatch(loadingFalse());
      } else {
        dispatch(loadingFalse());

        errorMessage(data?.message);
      }
    },
    onError: ({message}) => {
      dispatch(loadingFalse());
      errorMessage(message);
    },
  });
  return (
    <View style={{flex: 1}}>
      <AniFlatOneByOne
        data={data}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{
          onRefresh: () => onRefresh(),
          ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
        }}
        InnerCompnonet={item => (
          <HistoryReqComp
            onPress={() => {
              toggleModal(item.professional_id);
            }}
            viewStyle={{
              marginBottom: hp('2'),
            }}
            onPressDetail={() =>
              navigation.navigate('AppointmentDetailScreen', {
                ...item,
                isCompleted: true,
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
            reShedulePress={() =>
              navigation.navigate('ProfessionalProfileScreen', {
                item: {
                  user: {
                    user: {...item, ...item?.professional},
                    isProfile: true,
                    isReShedule: true,
                    braid_type: item?.braid_type,
                    braid_length: item?.braid_length,
                    braid_size: item?.braid_size,
                    appointment_id: item?.id,
                  },
                },
              })
            }
            // isReview={item?.ratings[0].is_review}
            data={item}
          />
        )}
      />

      <BottomModal isVisible={isModalVisible} onClose={toggleModal}>
        <View style={styles.bottom}>
          <View style={styles.topLine} />
          <TextComponent
            numberOfLines={2}
            text={`What is you rate? `}
            styles={{...styles.modalText}}
          />
          <AirbnbRating
            defaultRating={4}
            count={5}
            showRating={false}
            onFinishRating={onFinishRating}
            size={hp('4.5')}
            starContainerStyle={{
              padding: 5,
            }}
          />
          <TextComponent
            numberOfLines={2}
            text={'Please share your opinion about the service'}
            styles={{
              color: Colors.avtiveCard,
              fontSize: FontSize.scale16,
              marginTop: hp('4'),
              fontWeight: '600',
            }}
          />
          <View
            style={{
              ...styles.inputView,
              marginTop: hp('2'),
              height: hp('15'),
              alignItems: 'flex-start',
            }}>
            {/* <Image
              source={information}
              resizeMode="contain"
              style={{...styles.icon, marginTop: hp('1.5')}}
            /> */}
            <TextInput
              placeholder={'Share your opinion'}
              placeholderTextColor={Colors.placeholderColor}
              style={{
                flex: 1,
                color: Colors.placeholderColor,
                fontWeight: '400',
                fontSize: FontSize.scale12,
                overflow: 'scroll',
                padding: 10,
              }}
              // value={about}
              onChangeText={t => setAbout(t)}
              multiline={true}
              value={about}
            />
          </View>
          <ThemeButton
            onPress={() => {
              setModalVisible(!isModalVisible);
              setAbout('');
              mutate({
                professional_id: professional_id,
                rate: star,
                comment: about,
              });
            }}
            title={'Rate'}
            style={styles.viewProfile1}
          />
        </View>
      </BottomModal>
    </View>
  );
};
export default memo(HistoryApp);

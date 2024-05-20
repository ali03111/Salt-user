import {TouchableOpacity, View} from 'react-native';
import UseCalendar from '../../Components/Calendar';
import {Colors} from '../../Theme/Variables';
import TimeSlot from '../../Components/TimeSlot';
import {locationType, timeSlots} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import BraidComp from '../../Components/BraidComp';
import {Touchable} from '../../Components/Touchable';
import {styles} from './style';
import {useState} from 'react';
import ThemeButton from '../../Components/ThemeButton';
import {getProperLocation} from '../../Utils/globalFunctions';
import useReduxStore from '../../Hooks/UseReduxStore';
import {loadingTrue} from '../../Redux/Action/isloadingAction';
import {createAppeUrl, createResAppUrl} from '../../Utils/Urls';

const AppointmentBookView = ({
  user,
  onBook,
  priceRef,
  isSuccess,
  BraidLength,
  BraidType,
  BraidSize,
  isReShedule,
}) => {
  const {dispatch} = useReduxStore();

  const address = user?.users?.location?.location
    ? JSON.parse(user?.users?.location?.location)
    : '';

  const [details, setDetails] = useState({
    type: BraidType?.id ?? null,
    size: BraidSize?.id ?? null,
    length: BraidLength?.id ?? null,
    locationId: null,
    date: null,
    time: user?.time ? {id: 1, label: user?.time} : null,
    locationDes: address?.currentLocation,
  });

  const {length, locationDes, size, time, type, locationId, date} = details;

  const updateState = data => setDetails(prev => ({...prev, ...data}));

  const isBoth = Boolean(user?.location?.loc_data == locationType[2]?.locId);

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  const DividerComp = ({styles}) => {
    return (
      <View
        style={{
          borderBottomWidth: wp('0.1'),
          borderColor: Colors.grayFaded,
          width: wp('90'),
          ...styles,
        }}></View>
    );
  };
  return (
    <View style={styles.appMainView}>
      <DividerComp />
      <TextComponent text={'Availability'} styles={styles.heading} />
      <UseCalendar
        onSelectVal={data => onSelectValue('date', data)}
        selectedVal={date}
        markedDates={user?.appointment_dates ?? []}
      />
      <DividerComp styles={{marginVertical: hp('5')}} />
      <TimeSlot
        data={timeSlots}
        title={'Select Time'}
        selectedVal={time}
        onSelectVal={res => onSelectValue('time', res)}
      />
      <DividerComp styles={{marginVertical: hp('5')}} />
      <BraidComp
        onSelectValue={value => {
          onSelectValue('type', value);
          priceRef(
            user?.braid_type.filter(res => res?.id == value)[0]?.price ??
              BraidType?.price,
          );
        }}
        braidTitle={'Braid Type'}
        data={user?.braid_type}
        selectedVal={type}
      />
      <BraidComp
        onSelectValue={value => onSelectValue('size', value)}
        selectedVal={size}
        braidTitle={'Braid Size'}
        data={user?.braid_size}
      />
      <BraidComp
        onSelectValue={value => onSelectValue('length', value)}
        selectedVal={length}
        braidTitle={'Braid Length'}
        data={user?.braid_length}
      />

      <DividerComp styles={{marginVertical: hp('5')}} />
      <TextComponent text={'Select location service'} />

      {isBoth ? (
        <View style={styles.viewBtnView}>
          <Touchable
            style={{
              ...styles.viewAppBtn,
              ...(locationId == locationType[0]?.locId &&
                styles.selectedButton),
            }}
            onPress={() => onSelectValue('locationId', locationType[0]?.locId)}>
            <TextComponent
              text={locationType[0]?.label}
              styles={{
                ...styles.buttonText,
                ...(locationId === locationType[0]?.locId &&
                  styles.selectedButtonText),
              }}
            />
          </Touchable>
          <Touchable
            style={{
              ...styles.viewAppBtn,
              ...(locationId == locationType[1]?.locId &&
                styles.selectedButton),
            }}
            onPress={() => onSelectValue('locationId', locationType[1]?.locId)}>
            <TextComponent
              text={locationType[1]?.label}
              styles={{
                ...styles.buttonText,
                ...(locationId === locationType[1]?.locId &&
                  styles.selectedButtonText),
              }}
            />
          </Touchable>
        </View>
      ) : (
        <Touchable
          style={{
            ...styles.viewAppBtn,
            ...(locationId ==
              locationType.filter(
                res => res.locId == user?.location?.loc_data,
              )[0]?.locId && styles.selectedButton),
            marginTop: hp('2'),
          }}
          onPress={() =>
            onSelectValue(
              'locationId',
              locationType.filter(
                res => res.locId == user?.location?.loc_data,
              )[0]?.locId,
            )
          }>
          <TextComponent
            text={
              locationType.filter(
                res => res.locId == user?.location?.loc_data,
              )[0]?.label
            }
            styles={{
              ...styles.buttonText,
              ...(locationId ===
                locationType.filter(
                  res => res.locId == user?.location?.loc_data,
                )[0]?.locId && styles.selectedButtonText),
            }}
          />
        </Touchable>
      )}
      {/* <View style={styles.btnView}> */}
      <ThemeButton
        title={'Book An Appointment'}
        style={{marginTop: hp('5')}}
        onPress={async () => {
          dispatch(loadingTrue());
          const loc = await getProperLocation();
          updateState({locationDes: loc});
          onBook({
            ...details,
            proId: user?.id,
            locationDes: loc,
            url: isReShedule ? createResAppUrl : createAppeUrl,
          });
          updateState({
            type: null,
            size: null,
            length: null,
            locationId: null,
            date: null,
            time: null,
            locationDes: {coords: {}, des: null},
          });
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default AppointmentBookView;

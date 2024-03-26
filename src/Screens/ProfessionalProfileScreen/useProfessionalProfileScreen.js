import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {addfavoriteUrl, createAppeUrl, sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useProfessionalProfileScreen = ({navigate, goBack}, {params}) => {
  const {item} = params;

  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [fav, setFav] = useState(item?.user?.user?.is_favorite);
  const [price, setPrice] = useState(item?.user?.braid_type?.price);
  const [isSuccess, setIsSuccess] = useState(false);

  const priceRef = useRef(null);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onBookPress = {
    true: body =>
      mutate({
        consumer_location: {currentLocation: body?.locationDes},
        braid_type_id: body?.type,
        braid_length_id: body?.length,
        braid_size_id: body?.size,
        location_id: body?.locationId,
        date: body?.date,
        time: body?.time?.label,
        professional_id: body?.proId,
        url: body?.url,
        appointment_id: item?.user?.appointment_id,
        timezone: timeZone,
      }),
    false: ({appId, proId}) =>
      mutate({
        appointment_id: appId,
        professional_id: proId,
        url: sendReqUrl,
        timezone: timeZone,
      }),
  };
  const {mutate} = useMutation({
    mutationFn: body => {
      console.log(
        'skldbvklbsdlvbklsdbvklbsdklvbklsdbvklsdblvksbdvbsdlkvd',
        JSON.stringify(body),
      );
      return API.post(body?.url, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('datadatadatadatadatadatadatadatadatadatadata', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['favData']});
        queryClient.invalidateQueries({queryKey: ['homeDataCous']});
        queryClient.invalidateQueries({queryKey: ['topRatedPro']});
        queryClient.invalidateQueries({queryKey: ['contentHistoryUpcoming']});
        queryClient.invalidateQueries({queryKey: ['profList']});
        setIsSuccess(true);
        successMessage(data?.message);
        if (!item?.user?.isProfile) goBack();
      } else errorMessage(data?.message);
    },
    onError: e => console.log('skljdbvjksdbvkjbsdkjvbsdjkvbjksdbv', e),
  });
  const {mutateAsync} = useMutation({
    mutationFn: ({proId}) => {
      return API.post(addfavoriteUrl, {
        professional_id: proId,
      });
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['favData']});
        queryClient.invalidateQueries({queryKey: ['homeDataCous']});
        queryClient.invalidateQueries({queryKey: ['topRatedPro']});
        queryClient.invalidateQueries({queryKey: ['contentHistoryUpcoming']});
        setFav(data?.is_favorite);
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
    onError: e => errorMessage(e),
  });

  return {
    user: item?.user,
    appData: item?.appData,
    isFav: fav,
    priceRef,
    setPrice,
    price,
    isSuccess,
    braid_type: item?.user?.braid_type,
    braid_length: item?.user?.braid_length,
    braid_size: item?.user?.braid_size,
    onBook: body => {
      onBookPress[item?.user?.isProfile ?? false](body);
    },
    onFavPress: proId => {
      mutateAsync({proId});
    },
  };
};

export default useProfessionalProfileScreen;

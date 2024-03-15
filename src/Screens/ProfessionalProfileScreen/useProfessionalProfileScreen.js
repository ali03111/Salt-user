import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {addfavoriteUrl, createAppeUrl, sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useProfessionalProfileScreen = ({navigate}, {params}) => {
  const {item} = params;

  const [fav, setFav] = useState(item?.user?.user?.is_favorite);
  const [price, setPrice] = useState(null);

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
        url: createAppeUrl,
      }),
    false: ({appId, proId}) =>
      mutate({
        appointment_id: appId,
        professional_id: proId,
        url: sendReqUrl,
      }),
  };

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(body?.url, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        successMessage(data?.message);
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
    onBook: body => {
      onBookPress[item?.user?.isProfile](body);
    },
    onFavPress: proId => {
      mutateAsync({proId});
    },
  };
};

export default useProfessionalProfileScreen;

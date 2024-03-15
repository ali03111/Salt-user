import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {addfavoriteUrl, getfavoriteUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useFavouriteScreen = () => {
  //   const [fav, setFav] = useState();
  const [rating, setRating] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexNumber, setInderNumber] = useState(0);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {data} = useQuery({
    queryKey: ['favData'],
    queryFn: () => API.get(getfavoriteUrl),
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    setRating(rating);
  };

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
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
    onError: e => errorMessage(e),
  });

  const removeFav = () => {
    mutateAsync({proId: data?.data?.favorites[indexNumber]?.id});
    toggleModal();
  };

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['favData'],
      staleTime: 1000,
    });
  }, []);

  return {
    setRating,
    rating,
    isModalVisible,
    setIsModalVisible,
    toggleModal,
    ratingCompleted,
    data: data?.data,
    onRefresh,
    indexNumber,
    setInderNumber,
    removeFav,
  };
};

export default useFavouriteScreen;

import {} from 'react-native';
import React from 'react';
import API from '../../Utils/helperFunc';
import {homeContentUrl} from '../../Utils/Urls';
import {useQuery} from '@tanstack/react-query';
import useReduxStore from '../../Hooks/UseReduxStore';

export default function useHomeScreen() {
  const {data} = useQuery({
    queryKey: ['homeDataCous'],
    queryFn: () => API.get(homeContentUrl),
  });
  const {getState, dispatch} = useReduxStore();
  const {userData} = getState('Auth');
  //   console.log('first', data?.data);

  return {homeContent: data?.data, userData};
}

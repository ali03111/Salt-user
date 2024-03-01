import {} from 'react-native';
import React from 'react';
import API from '../../Utils/helperFunc';
import {homeContentUrl} from '../../Utils/Urls';
import {useQuery} from '@tanstack/react-query';

export default function useHomeScreen() {
  const {data} = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(homeContentUrl),
  });
  console.log('first', data?.data);

  return {data};
}

import {} from 'react-native';
import React, {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {homeContentUrl} from '../../Utils/Urls';
import {useQuery, useQueryClient} from '@tanstack/react-query';

export default function useHomeScreen() {
  const {data} = useQuery({
    queryKey: ['homeDataCous'],
    queryFn: () => API.get(homeContentUrl),
  });
  //   console.log('first', data?.data);
  const [refresh, setRefresh] = useState(false);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    setRefresh(true);
    queryClient.fetchQuery({
      queryKey: ['homeDataCous'],
      staleTime: 1000,
    });
    setRefresh(false);
  }, []);

  return {homeContent: data?.data, onRefresh, refresh};
}

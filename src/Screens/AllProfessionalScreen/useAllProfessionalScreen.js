import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {TopRatedProUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useAllProfessionalScreen = ({navigate}) => {
  const {data} = useQuery({
    queryKey: ['topRatedPro'],
    queryFn: () => API.get(TopRatedProUrl),
  });

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['topRatedPro'],
      staleTime: 1000,
    });
  }, []);

  const dynamicNav = (key, route) => navigate(key, route);
  return {dynamicNav, data: data?.data, onRefresh};
};

export default useAllProfessionalScreen;

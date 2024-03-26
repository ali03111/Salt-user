import React, {useCallback, useEffect} from 'react';
import API from '../../Utils/helperFunc';
import {contentHistoryUpcoming} from '../../Utils/Urls';
import {useQuery, useQueryClient} from '@tanstack/react-query';

const useAppointmentScreen = () => {
  const {data, fetchStatus, error, failureReason, status} = useQuery({
    queryKey: ['contentHistoryUpcoming'],
    queryFn: () => API.get(contentHistoryUpcoming),
    enabled: true,
  });

  console.log('datadatadatadatadatadatadatadatasdsddatadata', data?.data);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['contentHistoryUpcoming'],
      staleTime: 1000,
    });
  }, []);

  return {dataHistoryUpcoming: data?.data, onRefresh};
};
export default useAppointmentScreen;

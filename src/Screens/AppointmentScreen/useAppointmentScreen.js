import React, {useEffect} from 'react';
import API from '../../Utils/helperFunc';
import {contentHistoryUpcoming} from '../../Utils/Urls';
import {useQuery} from '@tanstack/react-query';

const useAppointmentScreen = () => {
  const {data} = useQuery({
    queryKey: ['contentHistoryUpcoming'],
    queryFn: () => API.get(contentHistoryUpcoming),
  });
  console.log('upasd', data?.data);
  useEffect(() => {
    data?.data;
  }, [1]);
  return {dataHistoryUpcoming: data?.data};
};
export default useAppointmentScreen;

import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {braidDataUrl} from '../../Utils/Urls';
import {useState} from 'react';

const useBookAnAppointment = () => {
  const {data} = useQuery({
    queryKey: ['braidData'],
    queryFn: () => API.get(braidDataUrl),
  });

  const [details, setDetails] = useState({
    type: null,
    size: null,
    length: null,
    locationId: null,
    data: null,
    time: null,
    locationDes: {coords: {}, des: null},
    radius: 10,
  });

  const {length, locationDes, size, time, type, locationId, radius} = details;

  const updateState = data => setDetails(prev => ({...prev, ...data}));

  const onSelectValue = (key, val) => {
    console.log('kjsgdvjkgsdkvkjsdvjksdbkjvbsdkbvkjsdbkvbsdkjvbksdbvksd', val);
    updateState({[key]: val});
  };

  console.log('kjsdbvkjsbdkjvbsdkjvbksjdbkjsdbvkjsdb', data?.data);

  return {
    data: data?.data,
    onSelectValue,
    type,
    size,
    length,
    locationId,
    radius,
  };
};

export default useBookAnAppointment;

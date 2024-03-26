import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {braidDataUrl, findProfessUrl, getAppProUrl} from '../../Utils/Urls';
import {useState} from 'react';
import {errorMessage} from '../../Config/NotificationMessage';
import {locationType} from '../../Utils/localDB';
import {getProperLocation} from '../../Utils/globalFunctions';

const useBookAnAppointment = ({navigate}) => {
  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const {data} = useQuery({
    queryKey: ['braidData'],
    queryFn: () => API.get(braidDataUrl),
  });

  const [details, setDetails] = useState({
    type: null,
    size: null,
    length: null,
    locationId: null,
    date: null,
    time: null,
    locationDes: {coords: {}, des: null},
    radius: 10,
  });

  const {length, locationDes, size, time, type, locationId, radius, date} =
    details;

  const updateState = data => setDetails(prev => ({...prev, ...data}));

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log('bodybodybodybodybodybodybodybodybodybodybody', body);
      return API.post(findProfessUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        navigate('ProfessionalList', {
          createdObj: data?.appointmentCreated,
          url: getAppProUrl,
        });
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  const findProfessFun = async () => {
    if (
      type != null &&
      size != null &&
      length != null &&
      date != null &&
      locationId != null
    ) {
      const loc = await getProperLocation();
      console.log('sdlkbcklsdbvlkdbklsd', {...loc, range: radius});
      updateState({locationDes: {...loc, range: radius}});
      mutate({
        consumer_location: {currentLocation: {...loc, range: radius}},
        braid_type_id: type,
        braid_length_id: length,
        braid_size_id: size,
        location_id: locationId,
        date: date,
        time: time?.label,
        timezone: timeZone,
      });
    } else errorMessage('Please select all options!');
  };

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  return {
    data: data?.data,
    onSelectValue,
    type,
    size,
    length,
    locationId,
    radius,
    date,
    findProfessFun,
    time,
  };
};

export default useBookAnAppointment;

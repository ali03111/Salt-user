import {useMutation, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {changeAppStatusUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useState} from 'react';

const useAppointmentDetail = ({goBack}, {params}) => {
  const data = params;

  const [status, setStatus] = useState(null);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log('bodybodybodybodybodybodybodybodybodybodybody', body);
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        setStatus(data?.aor);
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const onCancelPress = {
    true: () =>
      mutate({
        appointment_id: data?.id,
        aor: false,
      }),
    false: () => goBack(),
  };
  const onAcceptPress = {
    true: () =>
      mutate({
        appointment_id: data?.id,
        aor: true,
      }),
    false: () => console.log('klsnvlksdnlkvnsdkl'),
  };

  return {data, onAcceptPress, onCancelPress, status};
};

export default useAppointmentDetail;

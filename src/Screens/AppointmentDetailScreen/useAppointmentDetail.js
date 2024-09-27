import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {
  AfterPaymentUrl,
  CheckIsCurrentDateUrl,
  CreateIntentUrl,
  GetDetailsUrl,
  changeAppStatusUrl,
} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useEffect, useState} from 'react';
import {useStripe} from '@stripe/stripe-react-native';
import useReduxStore from '../../Hooks/UseReduxStore';
import {Colors} from '../../Theme/Variables';
import {
  extractTimeFromString,
  removeTimeFromDate,
} from '../../Utils/globalFunctions';

const useAppointmentDetail = ({goBack}, {params}) => {
  const {data, error, isSuccess, isLoading} = useQuery({
    queryKey: ['appointDetail'],
    queryFn: () => API.get(GetDetailsUrl + params?.id),
  });

  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');

  const [status, setStatus] = useState(null);

  const [appointData, setAppointData] = useState(null);

  const NewDate = new Date();

  console.log(
    'slkdnvklsd klv sdlkv klsd vklsd vkls dklv sdklv klsd',
    data?.data,
  );

  const checkIsDate = useMutation({
    mutationFn: body => {
      return API.post(CheckIsCurrentDateUrl, {
        app_id:
          data?.data?.user_appointment?.appointment_request[0]?.appointment_id,
        current_date: removeTimeFromDate(NewDate),
      });
    },
    onSuccess: ({ok, data}) => {
      console.log('jksdbvjksdkbvdjksbvjkldsjklvbdsklvbdlvks', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['appointDetail']});
      } else errorMessage(data?.message);
    },
  });

  useEffect(() => {
    if (isSuccess && !isLoading) {
      checkIsDate.mutate();
    }
  }, []);

  // Stripe functions
  const {
    confirmPayment,
    initPaymentSheet,
    presentPaymentSheet,
    retrievePaymentIntent,
    retrieveSetupIntent,
  } = useStripe();

  const {mutateAsync} = useMutation({
    mutationFn: body => {
      return API.post(CreateIntentUrl, {
        amount: data?.data?.user_appointment?.braid_type?.price * 100,
      });
    },
    onSuccess: ({ok, data}) => {
      console.log('lksdbvklbslkbskdlbvbsdklvbsdkl', data);
      if (ok) {
        initPaymentScreenStripe(data?.client_secret);
      } else errorMessage(data?.message ?? 'Network request failed');
    },
  });
  const afterPayment = useMutation({
    mutationFn: body => {
      return API.post(AfterPaymentUrl, {
        data: {
          ...body,
          app_id:
            data?.data?.user_appointment?.appointment_request[0]
              ?.appointment_id,
        },
      });
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        // setAppointData(data?.appointment_data);
        queryClient.invalidateQueries({queryKey: ['appointDetail']});
        queryClient.invalidateQueries({queryKey: ['homeData']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const initPaymentScreenStripe = async data => {
    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: data,
      merchantDisplayName: 'Salt',
      primaryButtonColor: Colors.primaryColor,
      customerId: userData?.id,
    });
    if (error) {
      errorMessage('Error while fetching client data.');
      console.log(119, error);
    } else {
      handlePayment(data);
    }
  };

  const handlePayment = async data => {
    const {error} = await presentPaymentSheet({
      clientSecret: data,
    });

    if (error) {
      console.log(156, error);
    } else {
      const {paymentIntent, error} = await retrievePaymentIntent(data);
      if (paymentIntent.status == 'Succeeded') {
        afterPayment.mutate(paymentIntent);
      } else errorMessage(error);
    }
  };

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
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
        appointment_id: data?.data?.user_appointment?.id,
        aor: false,
      }),
    undefined: () => mutateAsync(),
  };
  const onAcceptPress = {
    true: () =>
      mutate({
        appointment_id: data?.data?.user_appointment?.id,
        aor: true,
      }),
    false: () => console.log('klsnvlksdnlkvnsdkl'),
  };

  return {
    data: data?.data?.user_appointment,
    onAcceptPress,
    onCancelPress,
    status,
    hitPayment: mutateAsync,
  };
};

export default useAppointmentDetail;

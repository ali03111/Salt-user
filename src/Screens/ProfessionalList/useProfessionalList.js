import {useMutation, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useProfessionalList = ({navigate}, {params}) => {
  const {data} = params;
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: ({appId, proId}) => {
      console.log('idididid', proId, appId);
      return API.post(sendReqUrl, {
        appointment_id: appId,
        professional_id: proId,
      });
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
    onError: e => console.log('skljdbvjksdbvkjbsdkjvbsdjkvbjksdbv', e),
  });

  return {
    profData: data?.professionals,
    appData: data?.appointmentCreated,
    onBook: (appId, proId) => {
      mutate({appId, proId});
    },
  };
};

export default useProfessionalList;

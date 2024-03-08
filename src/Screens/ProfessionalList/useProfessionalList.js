import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useProfessionalList = ({navigate}, {params}) => {
  const {createdObj, url} = params;

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {data} = useQuery({
    queryKey: ['profList'],
    queryFn: () => API.get(`${url}/${createdObj.id}`),
  });
  console.log(
    'datadatadatadatadatadatadatadata',
    data?.data?.professionals[0]?.requested_apointments,
  );

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
        queryClient.invalidateQueries({queryKey: ['profList']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
    onError: e => console.log('skljdbvjksdbvkjbsdkjvbsdjkvbjksdbv', e),
  });

  return {
    profData: data?.data?.professionals,
    appData: createdObj,
    onBook: (appId, proId) => {
      mutate({appId, proId});
    },
  };
};

export default useProfessionalList;

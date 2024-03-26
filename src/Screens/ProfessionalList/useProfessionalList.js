import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback} from 'react';

const useProfessionalList = ({navigate}, {params}) => {
  const {createdObj, url} = params;

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const {data} = useQuery({
    queryKey: ['profList'],
    queryFn: () => API.get(`${url}/${createdObj.id}`),
  });
  console.log('datadatadatadatadatadatadatadata', JSON.stringify(data?.data));

  const {mutate} = useMutation({
    mutationFn: ({appId, proId}) => {
      console.log('idididid', proId, appId);
      return API.post(sendReqUrl, {
        appointment_id: appId,
        professional_id: proId,
        timezone: timeZone,
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

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['profList'],
      staleTime: 1000,
    });
  }, []);

  return {
    profData: data?.data?.professionals,
    appData: createdObj,
    onRefresh,
    onBook: (appId, proId) => {
      mutate({appId, proId});
    },
  };
};

export default useProfessionalList;

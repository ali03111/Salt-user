import {View, Text} from 'react-native';
import React from 'react';
import {useMutation} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useProfessionalProfileScreen = ({navigate}, {params}) => {
  const {item} = params;
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
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
    onError: e => console.log('skljdbvjksdbvkjbsdkjvbsdjkvbjksdbv', e),
  });

  return {
    user: item?.user,
    appData: item?.appData,
    onBook: (appId, proId) => {
      mutate({appId, proId});
    },
  };
};

export default useProfessionalProfileScreen;

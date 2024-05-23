import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {getNotificationUrl, sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback, useEffect} from 'react';
import notifee, {
  EventType,
  AndroidLaunchActivityFlag,
} from '@notifee/react-native';

const useNotificationScreen = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    // App launched, remove the badge count
    notifee.setBadgeCount(0).then(() => console.log('Badge count removed'));
  }, []);

  const {data} = useQuery({
    queryKey: ['getAllNoti'],
    queryFn: () => API.get(getNotificationUrl),
  });

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['getAllNoti'],
      staleTime: 1000,
    });
  }, []);

  return {
    notiData: data?.data,
    onRefresh,
  };
};

export default useNotificationScreen;

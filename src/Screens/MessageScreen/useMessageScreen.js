import {useQuery} from '@tanstack/react-query';
import API, {fetchGetWithToken} from '../../Utils/helperFunc';
import {GetChatListUrl} from '../../Utils/Urls';
import {useCallback, useEffect, useRef, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import {db} from '../../Services/FirebaseServicsConfig';

const useMessageScreen = ({navigate, addListener}) => {
  const {data} = useQuery({
    queryKey: ['chatList'],
    queryFn: () => API.get(GetChatListUrl),
  });

  const [users, setUsers] = useState([]);
  const isUnreadRef = useRef(false);

  const {getState, dispatch, queryClient} = useReduxStore();
  const {userData} = getState('Auth');
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchUsersAndMessages = async () => {
    try {
      const fetchedUsers = await fetchGetWithToken(GetChatListUrl);

      const unsubscribeFunctions = fetchedUsers.map(async appointments => {
        const chatroomDocRef = doc(
          db,
          'messages',
          appointments?.id?.toString(),
        );
        const chatroomDocSnap = await getDoc(chatroomDocRef);

        if (chatroomDocSnap.exists()) {
          return listenForLastMessage(appointments);
        }
      });
      setUsers(fetchedUsers);
      return () => {
        unsubscribeFunctions.forEach(unsub => unsub());
      };
    } catch (error) {
      console.error('Error fetching users or messages:', error);
    }
  };

  const listenForLastMessage = appointment => {
    const appId = appointment.id;

    const messageRef = query(
      collection(db, 'messages', appId.toString(), 'messages'),
      orderBy('createdAt', 'desc'),
      limit(1),
    );

    const unsubscribe = onSnapshot(messageRef, querySnapshot => {
      let lastMessage = null;

      querySnapshot.forEach(doc => {
        lastMessage = doc.data();
      });

      setUsers(prevUsers =>
        prevUsers.map(u => {
          return u.id == appId.toString() ? {...u, lastMessage} : u;
        }),
      );

      // Count unread messages
      const isUnread =
        userData?.id === lastMessage?.receiver && lastMessage?.seen == 0;
      isUnreadRef.current = isUnread;

      // Update unread count
      if (isUnread) {
        setUnreadCount(prevCount => prevCount + 1);
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    // Update unread count in Redux whenever unreadCount changes
    // dispatch(updateUnreadCount(unreadCount));
  }, [unreadCount]);

  const initializeChat = async () => {
    try {
      // Reset the unread count  when the Chat screen is focused
      //   dispatch(resetUnreadCount());
      queryClient.fetchQuery({
        queryKey: ['chatList'],
        staleTime: 1000,
      });
      await fetchUsersAndMessages();
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  };
  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      initializeChat();
    });
    return unsubscribe;
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    initializeChat();
  }, []);

  const dynamicNav = (screenName, screenData) =>
    navigate(screenName, screenData);

  return {
    messageList: data?.data ?? [],
    dynamicNav,
    users,
    userData,
    onRefresh,
  };
};

export default useMessageScreen;

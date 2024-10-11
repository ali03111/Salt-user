import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {GetChatListUrl} from '../../Utils/Urls';
import {useEffect, useRef, useState} from 'react';
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

  const {getState, dispatch} = useReduxStore();
  const {userData} = getState('Auth');
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchUsersAndMessages = async () => {
    try {
      const fetchedUsers = data?.data || [];

      const unsubscribeFunctions = fetchedUsers.map(async appointments => {
        const chatroomDocRef = doc(db, 'messages', appointments?.id);
        const chatroomDocSnap = await getDoc(chatroomDocRef);

        console.log(
          'skbvklsbdlkvbsdlkbvklsdbvlksdbvklsdblkbsdklvblkdsbvkldsbvklsdblkvdsblkvbdsklvbkdlsv',
          chatroomDocSnap.exists(),
        );

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

    console.log('appIdappIdappIdappIdappIdappIdappIdappIdappId', appId);

    const messageRef = query(
      collection(db, 'messages', appId, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(1),
    );

    console.log(
      'messageRefmessageRefmessageRefmessageRefmessageRef',
      messageRef,
    );

    const unsubscribe = onSnapshot(messageRef, querySnapshot => {
      let lastMessage = null;
      console.log(
        'querySnapshotquerySnapshotquerySnapshotquerySnapshotquerySnapshotquerySnapshotquerySnapshot',
        querySnapshot,
      );
      querySnapshot.forEach(doc => {
        lastMessage = doc.data();
      });

      setUsers(prevUsers =>
        prevUsers.map(u => (u.id == appId ? {...u, lastMessage} : u)),
      );

      // Count unread messages
      const isUnread =
        authUser?.user?.id === lastMessage?.receiver && lastMessage?.seen == 0;
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

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      const initializeChat = async () => {
        try {
          // Reset the unread count  when the Chat screen is focused
          //   dispatch(resetUnreadCount());

          await fetchUsersAndMessages();
        } catch (error) {
          console.error('Error initializing chat:', error);
        }
      };
      initializeChat();
    });
    return unsubscribe;
  }, [dispatch]);

  const dynamicNav = (screenName, screenData) =>
    navigate(screenName, screenData);

  return {
    messageList: data?.data ?? [],
    dynamicNav,
    users,
  };
};

export default useMessageScreen;

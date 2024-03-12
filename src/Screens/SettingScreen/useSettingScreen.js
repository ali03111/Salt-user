import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutAuth} from '../../Redux/Action/AuthAction';

const useSettingScreen = ({navigate}) => {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');
  const {isloading} = getState('isloading');

  const [alertState, setAlertState] = useState({
    logoutAlert: false,
    deleteAlert: false,
  });

  const {deleteAlert, logoutAlert} = alertState;

  const updateState = data => setAlertState(prev => ({...prev, ...data}));

  const toggleAlert = state => updateState({[state]: !alertState[state]});

  const dynamicRoute = route => navigate(route);

  const onConfirm = val => {
    if (val == 'logoutAlert') logoutFunc();
    else {
    }
  };

  const logoutFunc = () => {
    toggleAlert(
      (logoutAlert && 'logoutAlert') || (deleteAlert && 'deleteAlert'),
    );
    setTimeout(() => {
      dispatch(logOutAuth());
    }, 900);
  };

  return {
    toggleAlert,
    logoutAlert,
    deleteAlert,
    onConfirm,
    dynamicRoute,
    isloading,
    userData,
  };
};
export default useSettingScreen;

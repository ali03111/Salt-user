import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {useMutation} from '@tanstack/react-query';
import {formDataFunc} from '../../Utils/helperFunc';
import {updateProfileUrl} from '../../Utils/Urls';
import useFormHook from '../../Hooks/UseFormHooks';
import Schemas from '../../Utils/Validation';
import {types} from '../../Redux/types';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {launchImageLibrary} from 'react-native-image-picker';

export default function useEditProfileScreen() {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');
  const [profileData, setProfileData] = useState(null);

  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.editProfile,
  );

  const {mutate} = useMutation({
    mutationFn: data => {
      return formDataFunc(updateProfileUrl, data, 'image');
    },
    onSuccess: ({ok, data}) => {
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', data);
      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: data.user,
        });
        successMessage('Your profile updated sucessfully!');
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const onSave = ({name}) => {
    mutate({name: name, profileData: profileData});
  };

  //GET IMAGE From Mobile
  const uploadFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          console.log('imag222e', res.assets);
          setProfileData(res?.assets[0]);
          // endPointRef.current = updateProfilePicNameUrl;
          // mutate({image: res?.assets[0]});
        }
      },
    );
  };

  return {
    userData,
    uploadFromGalary,
    onSave,
    profileData,
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  };
}

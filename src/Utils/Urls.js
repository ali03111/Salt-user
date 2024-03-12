const getCredentials = () => {
  if (__DEV__)
    return {
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://virtualrealitycreators.com/salt/',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://virtualrealitycreators.com/salt/',
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
    };
  }
};

export const {baseURL, imageURL, twiloURL} = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};
export const imageUrl = url => {
  return url ? imageURL + url : '';
  // : 'https://res.cloudinary.com/dd6tdswt5/image/upload/v1684830799/UserImages/mhysa2zj0sbmvnw69b35.jpg';
};

export const registerUrl = 'register-user';
export const loginUrl = 'login';
export const homeContentUrl = 'customer/home-content';
export const updateProfileUrl = 'customer/update-user';
export const braidDataUrl = 'braid-data';
export const findProfessUrl = 'customer/set-appointment';
export const sendReqUrl = 'customer/send-request';
export const getAppProUrl = 'customer/appointment-professionals';

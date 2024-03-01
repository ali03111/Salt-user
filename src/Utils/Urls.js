const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://c88c-175-107-236-153.ngrok-free.app/api/',
      imageURL: 'https://virtualrealitycreators.com/trackpal/public/',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://c88c-175-107-236-153.ngrok-free.app/api/',
      imageURL: 'https://virtualrealitycreators.com/trackpal/public/',
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

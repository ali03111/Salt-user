const getCredentials = () => {
  if (__DEV__)
    return {
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
      // baseURL: 'https://saltbraiding.com/salt/api/',
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://saltbucket1.s3.us-east-2.amazonaws.com/',
    };
  else {
    console.log = () => {};
    return {
      // baseURL: 'https://saltbraiding.com/salt/api/',
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://saltbucket1.s3.us-east-2.amazonaws.com/',
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
    };
  }
};

export const StripePublicKey =
  'pk_test_51L3FxODOXZK7YV6slAtL46RT2WW38ikItXTNalrundN9kcsekaF7w5DV7P4IpDW9QqnB1wR5UBloDDfpSWv7OQZh00lnb5EoTB';

export const aboutUrl = 'https://saltbraiding.com/deletion_policy';
export const privacyUrl = 'https://saltbraiding.com/privacy_policy';
export const termsUrl = 'https://saltbraiding.com/terms_and_conditions';

export const APIKey = 'AIzaSyDQ_pjAQYvVcGWNLy-ND_ZtyufjXtiUAxs';

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
export const contentHistoryUpcoming = 'customer/home-content-history-upcoming';
export const customerRateUrl = 'customer/rate';
export const addfavoriteUrl = 'customer/favorite';
export const getfavoriteUrl = 'customer/user-fav';
export const createAppeUrl = 'customer/create-appointment';
export const TopRatedProUrl = 'customer/top-rated-list';
export const createResAppUrl = 'customer/reschedule-appointment';
export const deleteAccUrl = 'customer/deactive-user';
export const verifyUserUrl = 'customer/verify';
export const CreateIntentUrl = 'customer/create-payment-intent';
export const AfterPaymentUrl = 'customer/create-payment-data';
export const CheckIsCurrentDateUrl = 'customer/current-date';
export const FcmTokenUrl = 'customer/add-fcm-token';
export const getNotificationUrl = 'customer/all-notifications';
export const changeAppStatusUrl = 'customer/current-date';
export const GetDetailsUrl = 'customer/appointment-detail/';

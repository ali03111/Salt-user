import {PermissionsAndroid, Platform} from 'react-native';
import Geolocationios from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';

const getSingleCharacter = text => {
  let letter = text?.charAt(0).toUpperCase();
  return letter;
};

const getProperLocation = () => {
  return new Promise(async (resolve, reject) => {
    console.log('first');

    try {
      // Request permission to access geolocation if needed
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          throw new Error('Location permission denied');
        }
      }

      if (Platform.OS === 'android') {
        Geolocation.getCurrentPosition(
          async info => {
            console.log(
              'kjsdbvjklsbdklvbsdklbvlksdbvlksdbvkljsblkvbsdlkvblskdbvlsdbvbsdkvds',
              info,
            );
            // const locationName = await getLocationName(
            //   info.coords.latitude,
            //   info.coords.longitude,
            // );
            resolve({
              coords: {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
              },
              description: 'Street338 Catherine St, Columbia.',
            });
          },
          error => {
            reject(error);
          },
          {enableHighAccuracy: true, accuracy: true},
        );
      } else {
        Geolocationios.getCurrentPosition(
          async info => {
            // const locationName = await getLocationName(
            //   info.coords.latitude,
            //   info.coords.longitude,
            // );
            resolve({
              coords: {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
              },
              description: 'Street338 Catherine St, Columbia.',
            });
          },
          error => {
            reject(error);
          },
          {enableHighAccuracy: true, accuracy: true},
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getLocationName = async (latitude, longitude) => {
  console.log('third');

  const geocodingAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDQ_pjAQYvVcGWNLy-ND_ZtyufjXtiUAxs`;

  // Replace "YOUR_API_KEY" with your actual Google Maps Geocoding API key

  const res = await fetch(geocodingAPI);
  const response = await res.json();
  console.log('kjsdbvjklsbklvbsdklvbskdlbvsdbvbsdbksjdvsd', response);
  if (response.results.length > 0) {
    const locationName = response.results[0].formatted_address;
    console.log(
      'locationNamelocationNamelocationNamelocationNamelocationNamelocationNamelocationNamelocationNamelocationNamelocationNamelocationName',
      locationName,
    );
    return locationName;
  }
};

export {getSingleCharacter, getProperLocation};

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const useFavouriteScreen = () => {
  //   const [fav, setFav] = useState();
  const [rating, setRating] = useState();
  return {setRating, rating};
};

export default useFavouriteScreen;

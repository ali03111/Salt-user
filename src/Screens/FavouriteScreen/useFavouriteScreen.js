import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const useFavouriteScreen = () => {
  //   const [fav, setFav] = useState();
  const [rating, setRating] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return {setRating, rating, isModalVisible, setIsModalVisible, toggleModal};
};

export default useFavouriteScreen;

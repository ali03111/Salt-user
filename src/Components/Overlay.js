import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Lottie from 'lottie-react-native';
import {saltBlack, saltWhite} from '../Assets';
import {hp, wp} from '../Config/responsive';

const Overlay = ({childern}) => (
  <View
    style={{
      width: '100%',
      height: '100%',
      zIndex: 100,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    }}>
    {childern ? (
      childern
    ) : (
      <Lottie
        source={saltWhite}
        resizeMode="contain"
        loop
        autoPlay
        // duration={1000}
        style={{width: wp('10'), height: hp('10')}}
      />
    )}
  </View>
);

export default Overlay;

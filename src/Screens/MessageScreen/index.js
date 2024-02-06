import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import BackHeader from '../../Components/BackHeader';

const MessageScreen = () => {
  return (
    <View>
      <BackHeader />
    </View>
  );
};

export default memo(MessageScreen);

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {hp} from '../theme/responsive';

const BottomModal = ({isVisible, onClose, children, showCenter}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{justifyContent: showCenter ? 'center' : 'flex-end', margin: 0}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          margin: showCenter ? 10 : 0,
          borderRadius: showCenter ? 10 : 0,
        }}>
        {children}
        <TouchableOpacity
          style={{
            marginBottom: hp('2'),
            justifyContent: 'center',
            alignSelf: 'center',
          }}></TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BottomModal;

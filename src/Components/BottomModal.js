import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';
import ThemeButton from './ThemeButton';

const BottomModal = ({isVisible, onClose, children}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={{justifyContent: 'flex-end', margin: 0}}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={['down']}>
      <View
        style={{
          backgroundColor: Colors.themeBlack,
          padding: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        {children}
      </View>
    </Modal>
  );
};

export default BottomModal;

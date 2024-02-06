import React from 'react';
import {View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

export const HeadingView = ({title, onPress}) => {
  return (
    <View style={styles.headingView}>
      <TextComponent text={title} />
      <TextComponent
        text={'View All'}
        styles={{fontSize: hp('1.8')}}
        fade={true}
        onPress={onPress}
      />
    </View>
  );
};

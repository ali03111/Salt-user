import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {
  handShake,
  handShakeLottie,
  notificationWhite,
  settingWhite,
} from '../../Assets';
import {styles} from './styles';
import {Touchable} from '../../Components/Touchable';
import Lottie from 'lottie-react-native';

const HomeHeader = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.firstView}>
        <View style={{flexDirection: 'row', alignItems: 'center', width: wp('70') }}>

        
        <View>
          <TextComponent
            omponent
            text={'Hello Melaa'}
            styles={styles.nameText}
          />
          <TextComponent text={'Welcome to Salt!'} styles={{top: hp('0')}} />
          
        </View>
        <Lottie
          source={handShakeLottie}
          resizeMode="contain"
          style={{width: wp('10')}}
          loop
          autoPlay
        />
        </View>
        <Touchable >
          <Image
            source={notificationWhite}
            resizeMode="contain"
            style={styles.notiIcon}
          />
        </Touchable>
        <Touchable >
          <Image
            source={settingWhite}
            resizeMode="contain"
            style={styles.setIcon}
          />
        </Touchable>
      </View>
    </View>
  );
};
export default HomeHeader;

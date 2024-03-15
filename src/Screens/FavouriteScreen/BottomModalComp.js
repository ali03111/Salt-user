import {View, Text, Image} from 'react-native';
import React from 'react';
import BottomModal from '../../Components/BottomModal';
import {TextComponent} from '../../Components/TextComponent';
import {divider} from '../../Assets';
import {styles} from './styles';
import {CircleImage} from '../../Components/CircleImage';
import {AirbnbRating} from 'react-native-ratings';
import ThemeButton from '../../Components/ThemeButton';
import {wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

const BottomModalComp = ({isModalVisible, toggleModal, removeFav, rating}) => {
  console.log('lksdnvklsnlvnskldnvklsndlkvnsdklvnksd', rating);

  return (
    <BottomModal isVisible={isModalVisible} onClose={toggleModal}>
      <TextComponent
        text={'Remove from Favorites ?'}
        styles={{
          fontWeight: '600',
        }}
      />
      <Image source={divider} resizeMode="contain" style={styles.divider} />
      <View style={styles.favContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.innerFav}>
            <CircleImage styles={styles.circleImage} />
            <View style={{marginLeft: wp('3'), alignSelf: 'center'}}>
              <TextComponent styles={styles.name} text={'James Dean'} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AirbnbRating
                  isDisabled
                  showRating={false}
                  count={5}
                  defaultRating={rating ?? 0}
                  size={10}
                />
                <TextComponent styles={styles.rating} text={rating} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnView}>
        <ThemeButton
          onPress={toggleModal}
          title={'Cancel'}
          style={styles.viewProfile1}
        />
        <ThemeButton
          title={'Yes, Remove'}
          style={{...styles.viewProfile1, backgroundColor: Colors.themeRed}}
          onPress={removeFav}
        />
      </View>
    </BottomModal>
  );
};

export default BottomModalComp;

import React from 'react';
import {memo} from 'react';
import {FlatList, Image, Pressable, TouchableOpacity, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {CircleImage} from '../../Components/CircleImage';
import {hp, wp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';
import {heartFill} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';
import useFavouriteScreen from './useFavouriteScreen';
import BottomModal from '../../Components/BottomModal';
import {Colors} from '../../Theme/Variables';
import {divider} from '../../Assets';
import NoDataFoundVer from '../../Components/NoDataFoundVer';
import {EmptyViewComp} from '../../Components/EmptyViewComp';

const FavouriteScreen = ({navigation, onPress}) => {
  const {setIsModalVisible, isModalVisible, rating, setRating, toggleModal} =
    useFavouriteScreen();
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    setRating(rating);
  };
  const renderItem = () => {
    return (
      <View style={styles.favContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                  showRating={false}
                  count={5}
                  // reviews={[
                  //   'Terrible',
                  //   'Bad',
                  //   'Meh',
                  //   'OK',
                  //   'Good',
                  //   'Hmm...',
                  //   'Very Good',
                  //   'Wow',
                  //   'Amazing',
                  //   'Unbelievable',
                  //   'Jesus',
                  // ]}
                  defaultRating={0}
                  size={10}
                  onFinishRating={ratingCompleted}
                />
                <TextComponent styles={styles.rating} text={rating} />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
            <Image source={heartFill} style={styles.hearticon} />
          </TouchableOpacity>
        </View>
        <ThemeButton
          onPressProfile={() =>
            navigation.navigate('ProfessionalProfileScreen')
          }
          onPress={onPress}
          title={'View Profile'}
          style={styles.viewProfile}
        />
      </View>
    );
  };
  return (
    <>
      <BackHeader headerTitle={'Favorites'} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: hp('3'),
            paddingBottom: hp('5'),
          }}
          data={[]}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyViewComp onRefresh={onRefresh} />}
        />
      </View>
      <BottomModal isVisible={isModalVisible} onClose={toggleModal}>
        <TextComponent
          text={'Remove from Favourites ?'}
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
                    // reviews={[
                    //   'Terrible',
                    //   'Bad',
                    //   'Meh',
                    //   'OK',
                    //   'Good',
                    //   'Hmm...',
                    //   'Very Good',
                    //   'Wow',
                    //   'Amazing',
                    //   'Unbelievable',
                    //   'Jesus',
                    // ]}

                    defaultRating={0}
                    size={10}
                    onFinishRating={ratingCompleted}
                  />
                  <TextComponent styles={styles.rating} text={rating} />
                </View>
              </View>
            </View>
            {/* <TouchableOpacity
              onPress={() => setIsModalVisible(!isModalVisible)}>
              <Image source={heartFill} style={styles.hearticon} />
            </TouchableOpacity> */}
          </View>

          {/* <ThemeButton title={'View Profile'} style={styles.viewProfile} /> */}
        </View>
        <View
          style={{
            marginTop: hp('4'),
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            width: wp('90'),
          }}>
          <ThemeButton
            onPress={() => setIsModalVisible(false)}
            title={'Cancel'}
            style={styles.viewProfile1}
          />
          <ThemeButton
            title={'Yes, Remove'}
            style={{...styles.viewProfile1, backgroundColor: Colors.themeRed}}
          />
        </View>
      </BottomModal>
    </>
  );
};

export default memo(FavouriteScreen);

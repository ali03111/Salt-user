import React from 'react';
import {memo} from 'react';
import {FlatList, Image, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {CircleImage} from '../../Components/CircleImageComponent';
import {hp, wp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';
import {heartFill} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';
import useFavouriteScreen from './useFavouriteScreen';
const FavouriteScreen = () => {
  const {} = useFavouriteScreen();
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
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
                  defaultRating={5}
                  size={10}
                  onFinishRating={ratingCompleted}
                />
                <TextComponent styles={styles.rating} text={'4.9'} />
              </View>
            </View>
          </View>
          <Image source={heartFill} style={styles.hearticon} />
        </View>
        <ThemeButton title={'View Profile'} style={styles.viewProfile} />
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
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default memo(FavouriteScreen);

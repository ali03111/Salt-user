import React from 'react';
import {memo} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import BottomModalComp from './BottomModalComp';
import {imageUrl} from '../../Utils/Urls';

const FavouriteScreen = ({navigation}) => {
  const {
    setIsModalVisible,
    isModalVisible,
    rating,
    setRating,
    toggleModal,
    ratingCompleted,
    data,
    onRefresh,
    setInderNumber,
    indexNumber,
    removeFav,
  } = useFavouriteScreen();

  const RenderItem = ({item, index}) => {
    console.log('datafayuvcsvjasvjkcasvbkjbvaskljbklbad', item);
    return (
      <View style={styles.favContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.innerFav}>
            <CircleImage
              styles={styles.circleImage}
              image={imageUrl(item?.image)}
              uri={true}
            />
            <View style={{marginLeft: wp('3'), alignSelf: 'center'}}>
              <TextComponent styles={styles.name} text={item?.name} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AirbnbRating
                  showRating={false}
                  count={5}
                  defaultRating={item?.rating ?? 0}
                  size={10}
                  onFinishRating={ratingCompleted}
                />
                <TextComponent styles={styles.rating} text={item?.rating} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setInderNumber(index);
              setIsModalVisible(!isModalVisible);
            }}>
            <Image source={heartFill} style={styles.hearticon} />
          </TouchableOpacity>
        </View>
        <ThemeButton
          onPress={() =>
            navigation.navigate('ProfessionalProfileScreen', {
              item: {user: {user: item, isProfile: true}},
            })
          }
          title={'View Profile'}
          style={styles.viewProfile}
        />
      </View>
    );
  };
  return (
    <>
      {/* <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} /> */}
      <BackHeader headerTitle={'Favorites'} />
      <View style={styles.container}>
        <AniFlatOneByOne
          data={data?.favorites}
          flatViewStyle={styles.flatListView}
          flatListProps={{
            onRefresh: () => onRefresh(),
            ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
          }}
          InnerCompnonet={(item, index) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
      <BottomModalComp
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        ratingCompleted={ratingCompleted}
        rating={data?.favorites[indexNumber]?.rating}
        removeFav={removeFav}
      />
    </>
  );
};

export default memo(FavouriteScreen);

import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {
  arrowBack,
  exp,
  fav,
  heartFill,
  heartWhite,
  messagefill,
  starfill,
} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
// import {ScrollView} from 'react-native-gesture-handler';
import {CircleImage} from '../../Components/CircleImage';
import useReduxStore from '../../Hooks/UseReduxStore';
import {imageUrl} from '../../Utils/Urls';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import useGallery from './gallery';
import useReviews from './reviews';
import useAbout from './about';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import CustomTabs from './tabs';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';
import useProfessionalProfileScreen from './useProfessionalProfileScreen';
import {locationType} from '../../Utils/localDB';
import AppointmentBookView from './AppointmentBookView';

const ProfessionalProfileScreen = ({navigation, route}) => {
  const {user, appData, onBook, onFavPress, isFav, priceRef, price, setPrice} =
    useProfessionalProfileScreen(navigation, route);

  console.log('12361267387isajdhakjshdk', user);

  return (
    <View style={{flexGrow: 1, backgroundColor: Colors.themeBlack}}>
      <BackHeader
        isBack={true}
        headerTitle={'Professional Detail'}
        saveReset={isFav ? heartWhite : fav}
        goBack={() => navigation.goBack()}
        onRightPress={() => onFavPress(user?.user?.id)}
        rightIconStyle={{tintColor: 'white'}}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.pImage}>
          <CircleImage
            image={imageUrl(user?.user?.image)}
            styles={styles.profileView}
            uri={true}
          />
        </View>
        <TextComponent text={user?.user?.name} styles={styles.userName} />
        <View style={styles.infoMain}>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent
              text={user?.user?.experience ?? 0}
              styles={styles.expNumber}
            />
            <TextComponent text={'Years Experience'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={starfill} style={styles.expIcon} />
            </View>
            <TextComponent
              text={user?.user?.rating ?? 0}
              styles={styles.expNumber}
            />
            <TextComponent text={'Rating'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={messagefill} style={styles.expIcon} />
            </View>
            <TextComponent text={'37+'} styles={styles.expNumber} />
            <TextComponent text={'Reviews'} styles={styles.expText} />
          </View>
        </View>
        <CustomTabs gallery={user?.user?.past_works} about={user?.about} />

        {user?.isProfile == true && (
          <AppointmentBookView
            user={user?.user}
            onBook={onBook}
            priceRef={setPrice}
          />
        )}
        {/* {user?.isPorfile} */}
        {price && (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextComponent text={'Price'} styles={styles.aboutTitle} />
            <TextComponent text={`$${price}`} styles={styles.aboutTitle} />
          </View>
        )}
        {!user?.isProfile && (
          <View style={styles.btnView}>
            <ThemeButton
              title={'Book An Appointment'}
              onPress={() =>
                onBook({appId: appData?.id, proId: user?.user?.id})
              }
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default memo(ProfessionalProfileScreen);

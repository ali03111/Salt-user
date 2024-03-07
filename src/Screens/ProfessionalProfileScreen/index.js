import {StyleSheet, Text, View, Image} from 'react-native';
import React, {memo} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {arrowBack, exp, fav} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {ScrollView} from 'react-native-gesture-handler';
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

const ProfessionalProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
    {/* <> */}
      <BackHeader
        isBack={true}
        headerTitle={'Professional List'}
        saveReset={fav}
      />
      <ScrollView contentContainerStyle={styles.container} >
        <View style={styles.pImage}>
          <CircleImage
            // image={profileData?.uri ?? imageUrl(userData?.image)}
            image={null}
            styles={styles.profileView}
            uri={true}
          />
        </View>
        <TextComponent text={'James Dean'} styles={styles.userName} />
        <TextComponent
          text={'House Call service provider'}
          styles={styles.userDesignation}
        />
        <View style={styles.infoMain}>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'10+'} styles={styles.expNumber} />
            <TextComponent text={'Years Experience'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'4.8'} styles={styles.expNumber} />
            <TextComponent text={'Rating'} styles={styles.expText} />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.expIconMain}>
              <Image source={exp} style={styles.expIcon} />
            </View>
            <TextComponent text={'37+'} styles={styles.expNumber} />
            <TextComponent text={'Reviews'} styles={styles.expText} />
          </View>
        </View>
        <CustomTabs />
       
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextComponent text={'Price'} styles={styles.aboutTitle} />
          <TextComponent text={`$${'10'}`} styles={styles.aboutTitle} />
        </View>

        <View style={{borderTopWidth: 0.5, borderColor: Colors.grayFaded, paddingTop: hp('4') , marginTop: hp('3') , paddingBottom: hp('3'), marginHorizontal: wp('4')}}>
          <ThemeButton title={'Book An Appointment'}/>
          </View>     

      </ScrollView>
      </View>

  );
};
export default memo(ProfessionalProfileScreen);

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

const ProfessionalProfileScreen = () => {
  return (
    <>
      <BackHeader
        isBack={true}
        headerTitle={'Professional List'}
        saveReset={fav}
      />
      <ScrollView contentContainerStyle={styles.container}>
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
      </ScrollView>
    </>
  );
};
export default memo(ProfessionalProfileScreen);

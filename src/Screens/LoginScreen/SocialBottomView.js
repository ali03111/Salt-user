import {Image, View} from 'react-native';
import {Touchable} from '../../Components/Touchable';
import {appleImage, facebookImage, googleImage} from '../../Assets';
import {styles} from './styles';

const SocialBottomView = ({onSocialPress}) => {
  return (
    <View style={styles.socialView}>
      <Touchable onPress={() => onSocialPress('Google')}>
        <Image
          source={googleImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
      <Touchable onPress={() => onSocialPress('appleID')}>
        <Image
          source={appleImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
      <Touchable onPress={() => onSocialPress('facebook')}>
        <Image
          source={facebookImage}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </Touchable>
    </View>
  );
};

export default SocialBottomView;

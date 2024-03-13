import {memo} from 'react';
import {Image, View} from 'react-native';
import {portfolioImages} from '../../Utils/localDB';
import {styles} from './style';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';

const UseAbout = ({gallery}) => {
  console.log(gallery, 'skkkskskskskskskskskskssk');
  return (
    <View>
      <TextComponent text={'About'} styles={styles.aboutTitle} />
      <TextComponent
        fade={true}
        text={`${gallery.about}`}
        // text={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`}
        styles={styles.aboutText}
      />
    </View>
  );
};

export default memo(UseAbout);

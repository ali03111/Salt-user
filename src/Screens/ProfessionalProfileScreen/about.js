import {memo} from 'react';
import {Image, View} from 'react-native';
import {portfolioImages} from '../../Utils/localDB';
import {styles} from './style';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';

const UseAbout = ({about}) => {
  console.log(
    'lksdbklsdbvlksdbvlkjsbdlkvbsdlkvblksdbvlksdbvklsdbvklsdbvklsdbvlksdbvlksd',
    about,
  );
  return (
    <View>
      <TextComponent text={'About'} styles={styles.aboutTitle} />
      {about ? (
        <TextComponent
          fade={true}
          text={`${about ?? ''}`}
          // text={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`}
          styles={styles.aboutText}
        />
      ) : (
        <TextComponent
          text={'Professional has not yet added their information.'}
          styles={styles.emptyText}
          fade={true}
        />
      )}
    </View>
  );
};

export default memo(UseAbout);

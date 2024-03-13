import {memo} from 'react';
import {Image, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {portfolioImages} from '../../Utils/localDB';
import {styles} from './style';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {imageUrl} from '../../Utils/Urls';

const UseGallery = ({gallery}) => {
  console.log('gallarygallarygallarygallarygallarygallarygallary', gallery);
  const photoCount = 10;
  return (
    <View>
      <TextComponent
        text={`Photos (${photoCount})`}
        styles={styles.aboutTitle}
      />
      <AniFlatOneByOne
        flatListProps={{numColumns: 5, nestedScrollEnabled: true}}
        data={gallery.past_works}
        // emptyView={}
        InnerCompnonet={res => {
          return (
            <Image
              // source={{uri: res?.uri ?? res?.work_image}}
              source={{
                uri: imageUrl(res.work_image),
              }}
              progressiveRenderingEnabled
              style={styles.imageView}
              flatListProps={{nestedScrollEnabled: true}}
            />
          );
        }}
      />
    </View>
  );
};

export default memo(UseGallery);

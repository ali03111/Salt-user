import {memo} from 'react';
import {Image, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {portfolioImages} from '../../Utils/localDB';
import {styles} from './style';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {imageUrl} from '../../Utils/Urls';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import BlurImage from '../../Components/BlurImage';

const UseGallery = ({gallery}) => {
  console.log('gallarygallarygallarygallarygallarygallarygallary', gallery);
  return (
    <View style={{minHeight: hp('15'), maxHeight: hp('50')}}>
      <TextComponent
        text={`Photos (${gallery?.length})`}
        styles={styles.aboutTitle}
      />
      <AniFlatOneByOne
        flatListProps={{
          numColumns: 2,
          nestedScrollEnabled: true,
          ListEmptyComponent: (
            <EmptyViewComp
              des={''}
              heading={'No image found!'}
              refreshStyle={{
                marginTop: hp('-10'),
              }}
            />
          ),
        }}
        flatViewStyle={{paddingBottom: hp('6')}}
        data={gallery}
        InnerCompnonet={res => {
          return (
            <BlurImage
              uri={imageUrl(res?.work_image)}
              styles={styles.imageView}
              isURI={true}
            />
          );
        }}
      />
    </View>
  );
};

export default memo(UseGallery);

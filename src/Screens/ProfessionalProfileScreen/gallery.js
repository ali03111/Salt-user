import {memo} from 'react';
import {Image, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {portfolioImages} from '../../Utils/localDB';
import {styles} from './style';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';

const useGallery = ({gallary}) => {
  console.log('gallarygallarygallarygallarygallarygallarygallary', gallary);
  const photoCount = 10;
  return (
    <>
      <TextComponent
        text={`Photos (${photoCount})`}
        styles={styles.aboutTitle}
      />
      <AniFlatOneByOne
        flatListProps={{numColumns: 2, nestedScrollEnabled: true}}
        data={portfolioImages}
        // emptyView={}
        InnerCompnonet={res => (
          <Image
            // source={{uri: res?.uri ?? res?.work_image}}
            source={{uri: res?.image ?? res?.work_image}}
            progressiveRenderingEnabled
            style={styles.imageView}
            flatListProps={{nestedScrollEnabled: true}}
          />
        )}
      />
    </>
  );
};

export default memo(useGallery);

import {memo} from 'react';
import {View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {ProfesReviews} from '../../Utils/localDB';
import {styles} from './style';
import {hp} from '../../Config/responsive';
import {Review} from '../../Components/Review';
import {TextComponent} from '../../Components/TextComponent';

const useReviews = () => {
  return (
    <View>
      <TextComponent text={'Reviews'} styles={styles.aboutTitle} />
      <AniFlatOneByOne      
        data={ProfesReviews}
        flatViewStyle={styles.upComingFlatlistView}
        InnerCompnonet={item => (
          <Review
            viewStyle={{
              marginBottom: hp('2'),
            }}
            data={item}
          />
        )}
      />
    </View>
  );
};

export default memo(useReviews);

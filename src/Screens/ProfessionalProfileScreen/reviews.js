import {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {ProfesReviews} from '../../Utils/localDB';
import {styles} from './style';
import {hp, wp} from '../../Config/responsive';
import {Review} from '../../Components/Review';
import {TextComponent} from '../../Components/TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UseReviews = () => {
  return (
    <View
      style={{
        width: wp('100'),
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <TextComponent text={'Reviews'} styles={styles.aboutTitle} />
        {/* <TouchableOpacity onPress={() => {}} style={styles.editReview}>
          <AntDesign name="edit" color="white" size={hp('2.5')} />
          <TextComponent text={'Add Review'} styles={styles.review} />
        </TouchableOpacity> */}
      </View>
      <AniFlatOneByOne
        data={ProfesReviews}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{nestedScrollEnabled: true}}
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

export default memo(UseReviews);

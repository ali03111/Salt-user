import {memo} from 'react';
import {StatusBar, View} from 'react-native';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {EmptyViewComp} from '../../Components/EmptyViewComp';
import {ProfileCardComp} from '../../Components/ProfileCardComp';
import useAllProfessionalScreen from './useAllProfessionalScreen';
import {styles} from './styles';
import {Colors} from '../../Theme/Variables';
import BackHeader from '../../Components/BackHeader';
import {hp, wp} from '../../Config/responsive';

const AllProfessionalScreen = ({navigation}) => {
  const {dynamicNav, data, onRefresh} = useAllProfessionalScreen(navigation);

  return (
    <View style={{flex: 1, backgroundColor: Colors.themeBlack}}>
      {/* <StatusBar backgroundColor={Colors.themeRed} barStyle={'light-content'} /> */}
      <BackHeader
        headerTitle={'Top Rated-Professional'}
        isBack={true}
        goBack={() => navigation.goBack()}
      />
      <AniFlatOneByOne
        data={data}
        flatViewStyle={styles.upComingFlatlistView}
        flatListProps={{
          ListEmptyComponent: <EmptyViewComp onRefresh={onRefresh} />,
          numColumns: 2,
          onRefresh: onRefresh,
        }}
        InnerCompnonet={item => (
          <ProfileCardComp
            data={item}
            viewStyle={styles.cardView}
            btnViewStyle={{width: wp('40')}}
            onPress={() =>
              dynamicNav('ProfessionalProfileScreen', {
                item: {user: {user: item, isProfile: true}},
              })
            }
          />
        )}
      />
    </View>
  );
};

export default memo(AllProfessionalScreen);

import React from 'react';
import {memo} from 'react';
import {Image, TextInput, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {userSearch} from '../../Assets';
import {styles} from './styles';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {Chat} from '../../Utils/localDB';
import {MessageViewComp} from '../../Components/MessageViewComp';
import useMessageScreen from './useMessageScreen';

const MessageScreen = ({navigation}) => {
  const {messageList, users, userData, dynamicNav, onRefresh} =
    useMessageScreen(navigation);

  console.log('jlsbdvkbsldibklsjdbvladsbilkvbasdlads', users);

  return (
    <View>
      <BackHeader headerTitle={'Chat'} />
      <View style={styles.searchView}>
        <Image
          source={userSearch}
          resizeMode="contain"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor={Colors.grayFaded}
        />
      </View>
      <AniFlatOneByOne
        data={users}
        flatListProps={{
          onRefresh: () => onRefresh(),
        }}
        InnerCompnonet={item => (
          <MessageViewComp
            data={item}
            viewStyle={{marginVertical: hp('1')}}
            userData={userData}
            onPress={() =>
              navigation.navigate('ChatScreen', {
                app_id: item?.id,
                userId: item?.professional?.id,
              })
            }
          />
        )}
        flatViewStyle={{marginTop: hp('2'), paddingBottom: hp('20')}}
      />
    </View>
  );
};

export default memo(MessageScreen);

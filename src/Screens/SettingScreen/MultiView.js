import {FlatList, Image, StyleSheet, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import IconBtnView from '../../Components/IconBtnView';
import {divider} from '../../Assets';
import {Touchable} from '../../Components/Touchable';

export const MultiView = ({data, viewStyle}) => {
  const renderItem = ({item}) => {
    return (
      <Touchable style={styles.listView} onPress={item?.onPress}>
        {/* {i > 0 && (
          <Image source={divider} resizeMode="contain" style={styles.divider} />
        )} */}
        <IconBtnView
          mainIcon={item.mainIcon}
          title={item?.title}
          leftIcon={item?.leftIcon}
          rightIcon={item?.rightIcon}
          rightText={item?.rightText}
          viewStyle={styles.innerView}
          onPress={item?.onPress}
        />
      </Touchable>
    );
  };

  return (
    <View
      style={{
        ...styles.mainView,
        ...viewStyle,
        borderWidth: data[0].leftIcon && 1,
      }}>
      <FlatList
        scrollEnabled={false}
        renderItem={renderItem}
        data={data ?? []}
        ItemSeparatorComponent={
          <Image source={divider} resizeMode="contain" style={styles.divider} />
        }
      />
      {/* {data?.map((res, i) => {
        return (
          <Touchable style={styles.listView} onPress={res?.onPress}>
            {i > 0 && (
              <Image
                source={divider}
                resizeMode="contain"
                style={styles.divider}
              />
            )}
            <IconBtnView
              title={res?.title}
              leftIcon={res?.leftIcon}
              rightIcon={res?.rightIcon}
              rightText={res?.rightText}
              viewStyle={styles.innerView}
              onPress={res?.onPress}
            />
          </Touchable>
        );
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    // flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.grayFaded,
    marginBottom: hp('2.5'),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    width: wp('92'),
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
    // paddingVertical: hp('2'),
    marginTop: hp('3'),
    justifyContent: 'space-between',
    // height: hp('50'),
    // paddingBottom: hp('2'),
  },
  listView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    borderWidth: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    // marginTop: hp('1.8'),
  },
  divider: {width: wp('86'), marginLeft: wp('4')},
});

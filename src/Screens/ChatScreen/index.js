import {
  View,
  Text,
  Platform,
  Image,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, send} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {CircleImage} from '../../Components/CircleImage';
import {styles} from './styles';
import {Chat, msgs} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';
import useChatScreen from './useChatScreen';
import ThemeButton from '../../Components/ThemeButton';
import {imageUrl} from '../../Utils/Urls';
import {removeSeconds} from '../../Utils/globalFunctions';
import Overlay from '../../Components/Overlay';

const ChatScreen = ({navigation, route}) => {
  const {
    sendMessage,
    setMessage,
    handleAutoScroll,
    isLoading,
    scrollViewRef,
    message,
    allMessages,
    userData,
    receiverData,
    regexp,
  } = useChatScreen(navigation, route);

  const renderItem = ({item, index}) => {
    const isSender = Boolean(item.sender == userData?.id);
    return !isSender ? (
      <View style={styles.senderView(isSender)}>
        <View style={styles.senderText(isSender)}>
          <TextComponent text={item?.text} styles={{fontWeight: '300'}} />
        </View>
        <TextComponent
          text={new Date(item?.createdAt?.seconds * 1000).toLocaleTimeString()}
          fade={true}
          styles={{fontSize: hp('1.5'), marginLeft: wp('2')}}
        />
      </View>
    ) : (
      <View
        style={{...styles.senderView(isSender), justifyContent: 'flex-end'}}>
        <TextComponent
          text={new Date(item?.createdAt?.seconds * 1000).toLocaleTimeString()}
          fade={true}
          styles={{fontSize: hp('1.5'), marginRight: wp('2')}}
        />
        <View style={styles.senderText(isSender)}>
          <TextComponent text={item?.text} styles={{fontWeight: '300'}} />
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: Colors.themeBlack}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp('0') : 0}>
      {isLoading && <Overlay />}
      <View style={styles.headerView}>
        <View style={styles.HeaderLeft}>
          <Touchable
            onPress={() => navigation.goBack()}
            style={styles.backMain}>
            <Image
              source={arrowBack}
              style={{
                resizeMode: 'contain',
                ...styles.arrowback,
              }}
            />
          </Touchable>
        </View>
        <View style={styles.HeaderCenter}>
          <CircleImage image={imageUrl(receiverData?.image)} uri={true} />
          <TextComponent
            text={receiverData?.name}
            styles={{marginLeft: wp('2')}}
          />
        </View>
        <View style={styles.HeaderRight} />
      </View>
      <FlatList
        data={allMessages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onLayout={handleAutoScroll}
        ref={scrollViewRef}
        onContentSizeChange={handleAutoScroll}
      />
      <View style={styles.searchMain}>
        <TextInput
          enablesReturnKeyAutomatically
          style={styles.searchinput}
          onChangeText={e => setMessage(e)}
          value={message}
          placeholder={'Type a message'}
          placeholderTextColor={Colors.grayFaded}
          multiline
        />

        {message != null && message != '' && regexp.test(message) && (
          <Touchable onPress={sendMessage} style={styles.sendBtnStyle}>
            <View style={styles.msgsRecieve}>
              <TextComponent text={'Send'} styles={styles.sendTextStyle} />
              <Image source={send} style={styles.sendIcon} />
            </View>
          </Touchable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default memo(ChatScreen);

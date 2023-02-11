import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hp, wp} from '../Config/responsive';
import useReduxStore from '../Hooks/useReduxStore';
import {Colors} from '../Theme/Variables';
import {TextComponent} from './TextComponent';

export const DrawerHeader = ({title}) => {
  const {getState} = useReduxStore();
  const {userData} = getState('Auth');
  return (
    <View style={styles.mainView}>
      <View style={styles.leftView}>
        <Ionicons name="reorder-three" color={Colors.black} size={hp('5')} />
      </View>
      <View style={styles.centerView}>
        <TextComponent
          text={title}
          styles={{fontWeight: 'bold', fontSize: hp('3')}}
        />
      </View>
      <View style={styles.rightView}>
        <Image
          source={{uri: userData?.profilePicture}}
          style={styles.profilePicture}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('100'),
    height: hp('8'),
    flexDirection: 'row',
  },
  leftView: {
    width: wp('20'),
    justifyContent: 'center',
    // alignItems: 'center',
    height: 'auto',
    paddingLeft: wp('2'),
  },
  centerView: {
    width: wp('60'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  rightView: {
    width: wp('20'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  profilePicture: {
    width: wp('13'),
    height: hp('6'),
    borderRadius: 10,
    backgroundColor: Colors.gray,
  },
});

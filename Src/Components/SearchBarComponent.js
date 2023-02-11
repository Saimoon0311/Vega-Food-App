import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';
import {filter, search} from '../Assests';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const SearchBarComponent = ({placeholder, viewStyle}) => {
  return (
    <View style={{...styles.mainView, ...viewStyle}}>
      <Lottie
        source={search}
        style={{width: wp('13')}}
        autoPlay
        loop
        resizeMode="contain"
      />
      <TextInput
        placeholder={placeholder || 'Search'}
        style={{
          flex: 1,
          width: wp('60'),
          color: Colors.black,
        }}
        placeholderTextColor={Colors.gray}
      />
      <View style={styles.rightView}>
        <Lottie source={filter} autoPlay loop resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('94'),
    alignSelf: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  rightView: {
    width: wp('15'),
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    overflow: 'hidden',
  },
});

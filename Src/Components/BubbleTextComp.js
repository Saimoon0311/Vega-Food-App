import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {Touchable} from './Touchable';

export const BubbleTextComp = ({
  text,
  viewStyle,
  textStyle,
  isActive,
  onPress,
}) => {
  return (
    <Touchable
      onPress={onPress}
      style={{...styles.activeView(isActive), ...viewStyle}}>
      <Text
        style={{...styles.textView(isActive), ...textStyle}}
        // text={'ggasdasdasdsa'}
      >
        {text}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  activeView: isActive => ({
    backgroundColor: isActive ? Colors.blue : Colors.bubbleView,
    borderRadius: 5,
    paddingHorizontal: wp('2'),
    paddingVertical: hp('0.5'),
  }),
  textView: isActive => ({
    color: isActive ? Colors.white : Colors.bubbleText,
    textAlign: 'center',
    alignSelf: 'center',
  }),
});

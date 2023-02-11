import React, {memo} from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {useSettingScreen} from './useSettingScreen';

const SettingScreen = ({route, navigation}) => {
  // const {phoneNumber} = useSettingScreen(navigation, route);
  return (
    <View>
      <TextComponent />
    </View>
  );
};

export default memo(SettingScreen);

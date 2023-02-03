import React, {memo} from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {useOtpScreen} from './useOtpScreen';

const OtpScreen = ({route, navigation}) => {
  const {phoneNumber} = useOtpScreen(navigation, route);
  return (
    <View>
      <TextComponent />
    </View>
  );
};

export default memo(OtpScreen);

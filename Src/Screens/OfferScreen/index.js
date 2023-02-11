import React, {memo} from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {useOfferScreen} from './useOfferScreen';

const OfferScreen = ({route, navigation}) => {
  // const {phoneNumber} = useOfferScreen(navigation, route);
  return (
    <View>
      <TextComponent />
    </View>
  );
};

export default memo(OfferScreen);

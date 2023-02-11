import React, {memo, useEffect} from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import useReduxStore from '../../Hooks/useReduxStore';
import {logOutUser} from '../../Redux/Actions/AuthAction';
import {useCartScreen} from './useCartScreen';

const CartScreen = ({route, navigation}) => {
  // const {phoneNumber} = useCartScreen(navigation, route);
  const {dispatch} = useReduxStore();
  useEffect(() => dispatch(logOutUser()), []);
  return (
    <View>
      <TextComponent />
    </View>
  );
};

export default memo(CartScreen);

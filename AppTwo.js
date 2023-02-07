import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';
import Overlay from './Src/Components/Overlay';
import useReduxStore from './Src/Hooks/useReduxStore';
import Navigation from './Src/Navigation/navigation';

const AppTwo = () => {
  const {getState} = useReduxStore();
  const {isloading} = getState('isloading');
  return (
    <NavigationContainer>
      <Navigation />
      {isloading && <Overlay />}
    </NavigationContainer>
  );
};

export default memo(AppTwo);

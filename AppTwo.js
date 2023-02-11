import {NavigationContainer} from '@react-navigation/native';
import React, {memo, useEffect} from 'react';
import {LogBox} from 'react-native';
import Overlay from './Src/Components/Overlay';
import useReduxStore from './Src/Hooks/useReduxStore';
import Navigation from './Src/Navigation/navigation';

const AppTwo = () => {
  const {getState} = useReduxStore();
  const {isloading} = getState('isloading');
  useEffect(() => {
    LogBox.ignoreLogs([
      'Settings is not yet supported on Android',
      'ViewPropTypes will be removed',
      "exported from 'deprecated-react-native-prop-types'.",
      'Sending...',
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);
  return (
    <NavigationContainer>
      <Navigation />
      {isloading && <Overlay />}
    </NavigationContainer>
  );
};

export default memo(AppTwo);

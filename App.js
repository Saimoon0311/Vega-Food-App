/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppTwo from './AppTwo';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './Src/Redux/Reducers';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppTwo />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import onboardingReducer from './onboardingReducer';

const onBoardPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
  whitelist: 'onboarding',
};

export const store = configureStore({
  reducer: {
    onboarding: persistReducer(onBoardPersistConfig, onboardingReducer),
  },
});
export const persistor = persistStore(store);

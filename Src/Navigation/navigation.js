import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../Screens/index';
import useReduxStore from '../Hooks/useReduxStore';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        // animation: 'slide_from_left',
        headerShown: false,
      }}>
      {!onboarding && (
        <Stack.Screen
          name="OnboardingScreen"
          component={Screens.OnboardingScreen}
        />
      )}
      <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={Screens.RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

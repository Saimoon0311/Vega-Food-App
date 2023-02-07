import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../Screens/index';
import useReduxStore from '../Hooks/useReduxStore';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  const {userData} = getState('Auth');
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
      {!userData.email && (
        <>
          <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
          <Stack.Screen
            name="RegisterScreen"
            component={Screens.RegisterScreen}
          />
          <Stack.Screen name="OtpScreen" component={Screens.OtpScreen} />
        </>
      )}
      {userData.email && (
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;

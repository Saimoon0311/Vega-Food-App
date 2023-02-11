import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '../Theme/Variables';
import * as Screens from '../Screens/index';
import Lottie from 'lottie-react-native';
import {cart, cup, home, offers, setting} from '../Assests';

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: '#919191',
        // swipeEnabled: true,
        // animationEnabled: true,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveBackgroundColor: 'transparent',
        // tabBarVisibilityAnimationConfig: 'hide',
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: hp('3'),
        },
        tabBarStyle: {
          height: hp(Platform?.OS == 'ios' ? '9' : '9'),
          // backgroundColor: 'rgba(182,182,182,0.1)',
          // opacity: 0.7,
          width: wp('100'),
          shadowOffset: {width: 0, height: 0},
          elevation: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
      })}>
      <Tab.Screen
        name="ExplorScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              source={cup}
              autoPlay
              loop={color == Colors.red ? true : false}
              style={
                color == Colors.red
                  ? {...{width: wp('12'), height: hp('11')}}
                  : {...{width: wp('7'), height: hp('6')}}
              }
              resizeMode="contain"
            />
          ),
          title: ``,
          tabBarLabelStyle: {
            fontSize: 15,
            // marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={Screens.MenuScreen}
      />
      <Tab.Screen
        name="offerScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              source={offers}
              autoPlay
              loop={color == Colors.red ? true : false}
              style={color == Colors.red ? styles.active : styles.inactive}
              resizeMode="contain"
            />
          ),
          title: ``,
          tabBarLabelStyle: {
            fontSize: 15,
            // marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={Screens.OfferScreen}
      />

      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.cartCircle}>
              <View style={styles.cartInsideCircle}>
                <Lottie
                  source={home}
                  autoPlay
                  loop={color == Colors.red ? true : false}
                  //   style={color == Colors.red ? styles.active : styles.inactive}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
          title: '',
          tabBarLabelStyle: {
            fontSize: 15,
            // marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="CartScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              source={cart}
              autoPlay
              loop={color == Colors.red ? true : false}
              style={color == Colors.red ? styles.active : styles.inactive}
              resizeMode="contain"
              tintColor="gray"
            />
          ),
          tabBarIconStyle: {
            color: 'red',
          },
          title: '',
          tabBarLabelStyle: {
            fontSize: 15,
            // marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={Screens.CartScreen}
      />
      <Tab.Screen
        name="SettingScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              source={setting}
              autoPlay
              loop={color == Colors.red ? true : false}
              style={color == Colors.red ? styles.active : styles.inactive}
              resizeMode="contain"
            />
          ),
          tabBarIconStyle: {
            color: 'red',
          },
          title: '',
          tabBarLabelStyle: {
            fontSize: 15,
            // marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={Screens.SettingScreen}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: Colors.red,
    position: 'absolute',
    bottom: hp('-1'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: Colors.red,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'Poppins-Bold',
    fontSize: hp('1.5'),
    backgroundColor: Colors.badgeColor,
  },
  centerView: {
    position: 'absolute',
    left: wp('8'),
    top: hp('-2.5'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    backgroundColor: Colors.white,
    borderColor: 'red',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    width: wp('10'),
    height: hp('9'),
  },
  inactive: {
    width: wp('5'),
    height: hp('4'),
  },
});

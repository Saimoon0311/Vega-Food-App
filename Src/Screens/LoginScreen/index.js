import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {facebookIcon, googleIcon} from '../../Assests';
import {InputComponent} from '../../Components/InputComponent';
import ShareButton from '../../Components/ShareButton';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {Colors} from '../../Theme/Variables';
import {styles} from './styles';
import useLogin from './useLoginScreen';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    facebookLoginFunc,
    googleLoginFunc,
    PhoneNumberLoginFuc,
  } = useLogin(navigation);
  return (
    <View style={styles.mainView}>
      <TextComponent text={'VegaFast Food...!'} styles={styles.topHeading} />
      <TextComponent
        text={'Login to check fastfood'}
        styles={{
          color: Colors.gray,
        }}
      />
      <View style={styles.socialView}>
        <Touchable onPress={facebookLoginFunc}>
          <Image
            source={facebookIcon}
            resizeMode={'contain'}
            style={styles.socialIcon}
          />
        </Touchable>
        <Touchable onPress={googleLoginFunc}>
          <Image
            source={googleIcon}
            resizeMode={'contain'}
            style={styles.socialIcon}
          />
        </Touchable>
      </View>
      <TextComponent text={'Or'} styles={styles.orText} />
      <TextComponent text={'Mobile No '} styles={styles.inputHeading} />
      <InputComponent
        {...{
          name: 'number',
          handleSubmit,
          errors,
          reset,
          control,
          getValues,
          placeholder: '+92 34XXXXXXXX',
        }}
      />
      <ShareButton
        onPress={handleSubmit(PhoneNumberLoginFuc)}
        title={'Send OTP'}
        style={styles.getStart}
      />
      <TextComponent text={'Your Existing Account'} styles={styles.exitText} />
      <ShareButton
        textStyle={styles.continueText}
        title={'Countinue with Email'}
        style={styles.continue}
      />
    </View>
  );
};

export default memo(LoginScreen);

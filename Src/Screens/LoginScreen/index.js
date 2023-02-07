import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {facebookIcon, googleIcon} from '../../Assests';
import {InputComponent} from '../../Components/InputComponent';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';
import ShareButton from '../../Components/ShareButton';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {hp} from '../../Config/responsive';
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
    register,
  } = useLogin(navigation);
  return (
    <View style={styles.mainView}>
      <KeyBoardWrapper>
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
        <TextComponent text={'Email '} styles={styles.inputHeading} />
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'example@example.com',
          }}
        />
        <TextComponent text={'Passsword '} styles={styles.inputHeading} />
        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: '***********',
            isSecure: true,
          }}
        />
        <ShareButton
          onPress={handleSubmit(PhoneNumberLoginFuc)}
          title={'Login'}
          style={styles.getStart}
        />
        {/* <TextComponent text={'Your Existing Account'} styles={styles.exitText} />
      <ShareButton
        textStyle={styles.continueText}
        title={'Countinue with Email'}
        style={styles.continue}
      /> */}
        <View style={styles.appHeadingView}>
          <TextComponent
            text={"Don't have and account?"}
            styles={styles.redColorText}
          />
          <TextComponent
            onPress={register}
            text={'Register'}
            styles={{color: Colors.red}}
          />
        </View>
      </KeyBoardWrapper>
    </View>
  );
};

export default memo(LoginScreen);

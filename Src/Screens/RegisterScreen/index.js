import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {InputComponent} from '../../Components/InputComponent';
import KeyBoardWrapper from '../../Components/KeyboardWrapper';
import ShareButton from '../../Components/ShareButton';
import {TextComponent} from '../../Components/TextComponent';
import {hp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {styles} from './styles';
import useRegister from './useRegisterScreen';

const RegisterScreen = ({navigation, route}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    login,
    userInfo,
    register,
  } = useRegister(navigation, route);
  const user = userInfo.profile;
  return (
    <View style={styles.mainView}>
      <KeyBoardWrapper>
        <TextComponent
          text={'Create Your Account'}
          styles={styles.topHeading}
        />
        <TextComponent
          text={'Please Enter Your Crediential in the Form Below...!'}
          styles={{
            color: Colors.gray,
          }}
        />
        <TextComponent
          text={'User Name*'}
          styles={{...styles.inputHeading, marginTop: hp('7')}}
        />
        <InputComponent
          {...{
            name: 'name',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Eaxmple name',
            defaultValue: user?.name || '',
          }}
        />
        <TextComponent text={'Email*'} styles={styles.inputHeading} />

        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'eample@eaxample.com',
            defaultValue: user?.email || '',
            editable: user?.email && false,
          }}
        />
        <TextComponent text={'Phone Number*'} styles={styles.inputHeading} />

        <InputComponent
          {...{
            name: 'number',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: '92 XXXXXXXXXX',
          }}
        />
        <TextComponent text={'City*'} styles={styles.inputHeading} />

        <InputComponent
          {...{
            name: 'city',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'XYZ',
          }}
        />
        <TextComponent text={'Password*'} styles={styles.inputHeading} />

        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: '**********',
            isSecure: true,
          }}
        />
        <TextComponent
          text={'Confirm Password*'}
          styles={styles.inputHeading}
        />

        <InputComponent
          {...{
            name: 'confirm_password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: '**********',
            isSecure: true,
          }}
        />
        <ShareButton
          title={'Register'}
          hide
          textStyle={{textAlign: 'center'}}
          style={{marginTop: hp('5')}}
          onPress={handleSubmit(register)}
        />
        <View style={styles.appHeadingView}>
          <TextComponent
            text={'Already have an account?'}
            styles={styles.redColorText}
          />
          <TextComponent
            onPress={login}
            text={'Login'}
            styles={{color: Colors.red}}
          />
        </View>
      </KeyBoardWrapper>
    </View>
  );
};

export default memo(RegisterScreen);

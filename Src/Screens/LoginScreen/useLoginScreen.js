import {
  faceBookLogin,
  googleLogin,
  PhoneNumberLogin,
  verifyCode,
} from '../../Utils/SocialLogin';

const {default: useFormHook} = require('../../Hooks/useFormHook');
const {default: Schemas} = require('../../Utils/Validation');

const useLogin = ({navigate}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.logIn,
  );
  const facebookLoginFunc = () => {
    faceBookLogin()
      .then(
        res => navigate('RegisterScreen', {...res.additionalUserInfo}),
        // navigate('RegisterScreen', {...res.additionalUserInfo, ...res.user}),
      )
      .catch(err => console.log('error', err));
  };
  const googleLoginFunc = () => {
    googleLogin()
      .then(res => navigate('RegisterScreen', {...res.additionalUserInfo}))
      .catch(err => console.log('error', err));
  };

  const PhoneNumberLoginFuc = async ({number}) => {
    try {
      const confirm = await PhoneNumberLogin(number);
      navigate('OtpScreen', {number, confirm});
    } catch (error) {
      console.log('err', error);
    }
  };

  const register = () => navigate('RegisterScreen');

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    facebookLoginFunc,
    googleLoginFunc,
    PhoneNumberLoginFuc,
    register,
  };
};

export default useLogin;

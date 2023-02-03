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
    Schemas.loginNumber,
  );
  const facebookLoginFunc = () => {
    faceBookLogin()
      .then(res => console.log('Login', res))
      .catch(err => console.log('error', err));
  };
  const googleLoginFunc = () => {
    googleLogin()
      .then(res => console.log('Login', res))
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
  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    facebookLoginFunc,
    googleLoginFunc,
    PhoneNumberLoginFuc,
  };
};

export default useLogin;

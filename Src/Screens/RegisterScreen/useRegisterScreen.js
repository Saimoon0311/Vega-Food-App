import {errorMessage} from '../../Components/NotificationMessage';
import useFormHook from '../../Hooks/useFormHook';
import useReduxStore from '../../Hooks/useReduxStore';
import {loginUser} from '../../Redux/Actions/AuthAction';
import API from '../../Utils/helperFunction';
import {registerUrl} from '../../Utils/Url';
import Schemas from '../../Utils/Validation';

const useRegister = ({navigate}, route) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.signUp,
  );

  const {dispatch} = useReduxStore();

  const register = async ({name, email, city, password, number}) => {
    const {ok, data, originalError} = await API.post(registerUrl, {
      name,
      email,
      city,
      loginType: route?.params?.providerId || 'email.com',
      password,
      phoneNumber: number,
    });
    console.log('advsdvsd', originalError);
    if (ok) dispatch(loginUser(data));
    else errorMessage(data.data);
  };

  const login = () => navigate('LoginScreen');

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    login,
    register,
    userInfo: {...route.params},
  };
};

export default useRegister;

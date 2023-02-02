const {default: useFormHook} = require('../../Hooks/useFormHook');
const {default: Schemas} = require('../../Utils/Validation');

const useLogin = () => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.loginNumber,
  );

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  };
};

export default useLogin;

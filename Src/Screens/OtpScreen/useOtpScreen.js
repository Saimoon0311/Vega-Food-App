import {useState} from 'react';

const useOtpScreen = ({navigate, params}) => {
  const {number, confirm} = params;
  const [phoneNumber, setPhoneNumber] = useState(number);

  return {
    phoneNumber,
  };
};

export default useOtpScreen;

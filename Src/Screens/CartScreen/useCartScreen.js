import {useState} from 'react';

const useCartScreen = ({navigate, params}) => {
  const {number, confirm} = params;
  const [phoneNumber, setPhoneNumber] = useState(number);

  return {
    phoneNumber,
  };
};

export default useCartScreen;

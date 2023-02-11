import {useState} from 'react';

const useOfferScreen = ({navigate, params}) => {
  const {number, confirm} = params;
  const [phoneNumber, setPhoneNumber] = useState(number);

  return {
    phoneNumber,
  };
};

export default useOfferScreen;

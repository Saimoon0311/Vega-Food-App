import {useState} from 'react';

const useSettingScreen = ({navigate, params}) => {
  const {number, confirm} = params;
  const [phoneNumber, setPhoneNumber] = useState(number);

  return {
    phoneNumber,
  };
};

export default useSettingScreen;

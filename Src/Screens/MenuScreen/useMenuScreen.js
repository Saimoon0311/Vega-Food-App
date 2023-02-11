import {useState} from 'react';
import {category} from '../../Utils/localDB';

const useMenuScreen = ({navigate, params}) => {
  const [seletedValue, setSeletedValue] = useState(category[0]);
  const onSelect = item => setSeletedValue(item);
  return {
    category,
    onSelect,
    seletedValue,
  };
};

export default useMenuScreen;

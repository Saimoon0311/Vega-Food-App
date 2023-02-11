import React, {memo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import useMenuScreen from './useMenuScreen';
import {DrawerHeader} from '../../Components/DrawerHeader';
import {SearchBarComponent} from '../../Components/SearchBarComponent';
import {BubbleTextComp} from '../../Components/BubbleTextComp';
import {hp, wp} from '../../Config/responsive';
import {keyExtractor} from '../../Utils';

const MenuScreen = ({route, navigation}) => {
  const {category, onSelect, seletedValue} = useMenuScreen(navigation, route);
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <BubbleTextComp
          text={item.name}
          viewStyle={{marginHorizontal: wp('1')}}
          onPress={() => onSelect(item)}
          isActive={seletedValue?._id == item?._id ? true : false}
        />
      );
    },
    [seletedValue],
  );
  return (
    <View>
      <DrawerHeader title={'Explore Menu'} />
      <SearchBarComponent viewStyle={{marginTop: hp('4')}} />
      <FlatList
        key={seletedValue}
        refreshing={false}
        data={category}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled
        style={{
          width: wp('93'),
          alignSelf: 'center',
          marginTop: hp('2'),
        }}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      />
    </View>
  );
};

export default memo(MenuScreen);

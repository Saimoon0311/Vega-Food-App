import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {Colors} from '../Theme/Variables';
import {Touchable} from './Touchable';
import {hp, wp} from '../Config/responsive';

export const InputComponent = ({
  minLength,
  placeholder,
  isRequired,
  isSecure,
  control,
  name,
  errors,
  type,
  autoCapitalize = 'none',
  defaultValue = '',
  isDisabled = false,
  maxLength,
}) => {
  const [show, setShow] = useState(!isSecure);
  const handleClick = () => setShow(!show);
  const keyboardType = ['number', 'reset_code'].includes(name)
    ? 'phone-pad'
    : 'default';
  return (
    <>
      <Controller
        render={({field: {onChange, value}}) => (
          <View style={styles.textfield}>
            <TextInput
              type={type}
              maxLength={maxLength}
              {...{
                value,
                isDisabled,
                selectionColor: Colors.gray,
                placeholder,
                keyboardType,
                style: styles.input,
                secureTextEntry: !show,
                onChangeText: onChange,
                placeholderTextColor: Colors.gray,
                fontSize: hp('2'),
                autoCapitalize,
                autoCorrect: false,
                spellCheck: false,
              }}
            />
            {isSecure && (
              <Touchable style={styles.eyeContainer} onPress={handleClick}>
                <Image
                  source={show ? eye : eye_off}
                  style={{
                    resizeMode: 'contain',
                    tintColor: Colors.white,
                  }}
                />
              </Touchable>
            )}
          </View>
        )}
        {...{
          name,
          control,
          defaultValue,
          rules: {required: Boolean(isRequired), minLength},
        }}
      />
      {errors[name]?.message && (
        <View
          style={
            {
              // width: Platform.OS == 'ios' ? width * 0.875 : Sizes.width * 0.9,
              // width: Sizes.width * 0.9,
            }
          }>
          <Text style={[styles.error]}>{errors[name]?.message}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textfield: {
    width: '100%',
    borderWidth: 1,
    height: hp('7'),
    borderRadius: 30,
    marginVertical: hp('1'),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: Colors.gray,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    // backgroundColor: Colors.blurWhite,
  },
  input: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    textAlign: 'left',
    color: Colors.black,
    paddingHorizontal: wp('5'),
    fontWeight: '300',
  },
  eyeContainer: {
    width: 30,
    height: 30,
    top: '30%',
    right: '1%',
    marginRight: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: Colors.redFade,
  },
});

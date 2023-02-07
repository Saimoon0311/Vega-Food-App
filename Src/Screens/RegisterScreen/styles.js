import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  mainView: {marginHorizontal: wp('5'), paddingTop: hp('5'), flex: 1},
  topHeading: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    marginVertical: hp('2'),
  },
  inputHeading: {
    fontWeight: 'bold',
    fontSize: hp('2'),
    // marginVertical: hp('1.5'),
  },
  appHeadingView: {
    flexDirection: 'row',
    width: wp('55'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: hp('2'),
    // marginTop: hp('23'),
    // position: 'absolute',
    // bottom: hp('0'),
  },
});

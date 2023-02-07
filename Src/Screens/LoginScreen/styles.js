import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  mainView: {marginHorizontal: wp('5'), paddingTop: hp('5'), flex: 1},
  topHeading: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    marginVertical: hp('2'),
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('70'),
    alignSelf: 'center',
    marginVertical: hp('3'),
  },
  socialIcon: {width: wp('15'), height: hp('10')},
  orText: {fontWeight: 'bold', fontSize: hp('3'), textAlign: 'center'},
  inputHeading: {
    fontWeight: 'bold',
    fontSize: hp('2.5'),
    // marginVertical: hp('1.5'),
  },
  exitText: {
    fontWeight: 'bold',
    fontSize: hp('2.5'),
    marginTop: hp('12'),
    textAlign: 'center',
  },
  continueText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  getStart: {
    width: wp('90'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4'),
    alignSelf: 'center',
  },
  continue: {
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.gray,
    marginTop: hp('4'),
  },
  appHeadingView: {
    flexDirection: 'row',
    width: wp('55'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginTop: hp('23'),
    position: 'absolute',
    bottom: hp('0'),
  },
});

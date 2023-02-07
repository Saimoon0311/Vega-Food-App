import {types} from '../types';

const initial_state = {
  userData: {},
  token: '',
};

const actionMap = {
  [types.LoginType]: (state, act) => ({
    userData: state.user,
    token: state.token,
  }),
  [types.LogoutType]: (state, act) => ({
    userData: {},
    token: '',
  }),
  [types.UpdateProfile]: (state, act) => ({
    ...state,
    userData: state.user,
  }),
};

export default function (state = initial_state, action) {
  const handler = actionMap[action.type];
  return handler ? handler(state, action) : state;
}

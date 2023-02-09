import {types} from '../types';

const initial_state = {
  userData: {},
  token: '',
};

const actionMap = {
  [types.LoginType]: (state, act) => {
    const deleteToken = {...act.payload.data};
    const filterObject = delete deleteToken.token;
    state.userData = filterObject;
    state.token = act.payload.data.token;
  },
  [types.LogoutType]: (state, act) => ({
    userData: {},
    token: '',
  }),
  [types.UpdateProfile]: (state, act) => ({
    ...state,
    userData: act.payload.data,
  }),
};

export default function (state = initial_state, action) {
  const handler = actionMap[action.type];
  return handler ? handler(state, action) : state;
}

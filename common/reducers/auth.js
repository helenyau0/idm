import {UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE} from '../actions/updateUser'
import {UPDATE_JWT} from '../actions/updateJWT'

const initialState = {
  currentUser: null,
  lgJWT: null,
  isBusy: false,
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return Object.assign({}, state, {
        isBusy: true,
      })
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        currentUser: Object.assign({}, state.currentUser, action.currentUser),
        isBusy: false,
      })
    case UPDATE_USER_FAILURE:
      console.error('Update user FAILURE:', action.error)
      return Object.assign({}, state, {
        isBusy: false,
      })
    case UPDATE_JWT:
      return Object.assign({}, state, {
        lgJWT: action.lgJWT,
      })
    default:
      return state
  }
}

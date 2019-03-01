import { 
	USER_ADDRESS
} from '../constants.js';

export const getUserAddress = (state = {}, action) => {
  switch (action.type) {
		case USER_ADDRESS:
				return action.infoUser;

		default:
				return state;
  }
};
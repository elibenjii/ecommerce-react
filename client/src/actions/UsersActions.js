import { 
	USER_ADDRESS
} from '../constants.js';

export const addUserAddress = infoUser => ({
	type: USER_ADDRESS,
	infoUser	
});

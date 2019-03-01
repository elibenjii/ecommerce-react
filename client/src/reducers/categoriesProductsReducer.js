import { CATEGORIES_PRODUCTS } from '../constants.js'

const defaultState = 
{
	men: ['Polos', 'Shirts', 'Pants', 'Jackets'],
	women: ['Dresses', 'Cardigans', 'Tops', 'Trench Coats']
}

export const categoriesProducts = (state = defaultState, action) => {
  switch (action.type) {
		case CATEGORIES_PRODUCTS:
				return state;

		default:
				return state;
  }
}
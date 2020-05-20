import { ADD_FOOD } from '../actions/types';

const initialState = {
  foodList: []
}

const handwashReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    default:
      return state;
  }
}

export default handwashReducer;
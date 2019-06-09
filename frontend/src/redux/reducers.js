import { SET_CENTER } from "./actions";

const centerReducer = (state = [50.697577, 2.867872], action) => {
  switch (action.type) {
    case SET_CENTER:
      return (state = action.coord);
    default:
      return state;
  }
};

export default centerReducer;

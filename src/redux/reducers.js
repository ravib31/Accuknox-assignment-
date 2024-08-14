import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  categories: {
    "CSPM": [],
    "CWPP": []
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      // Ensure the category exists in the state
      const categoryExists = state.categories[action.payload.category] || [];
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [
            ...categoryExists,
            { id: Date.now(), ...action.payload.widget }
          ]
        }
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: state.categories[action.payload.category].filter(
            (widget) => widget.id !== action.payload.widgetId
          )
        }
      };
    default:
      return state;
  }
};

export default rootReducer;

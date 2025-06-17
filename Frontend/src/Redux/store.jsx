import { createStore } from "redux";

const ADD_TASK = "cart/add";
const DELETE_TASK = "cart/delete";
const INCREMENT_TASK = "cart/increment";
const DECREMENT_TASK = "cart/decrement";
// const LOAD_TASK = "cart/load";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return [];
  }
};

// Initial state with loaded cart
const initialState = {
  cart: loadCartFromLocalStorage(),
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case DELETE_TASK:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_TASK:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_TASK:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    // case LOAD_TASK:
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };

    default:
      return state;
  }
};

// Action creators
export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const increment = (id) => ({
  type: INCREMENT_TASK,
  payload: id,
});

export const decrement = (id) => ({
  type: DECREMENT_TASK,
  payload: id,
});

// export const loadCart = () => ({
//   type: LOAD_TASK,
//   payload: loadCartFromLocalStorage(),
// });

// Store creation with persisted state and devtools
const persistedState = {
  cart: loadCartFromLocalStorage(),
};

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(cartReducer, persistedState, reduxDevTools);

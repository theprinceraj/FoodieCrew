import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          img: action.img,
          size: action.size,
          qty: action.qty,
        },
      ];
    case "REMOVE":
      let newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    case "UPDATE":
      const updatedState = state.map((food) => {
        if (food.id === action.id) {
          return {
            ...food,
            qty: parseInt(action.qty) + parseInt(food.qty),
            price: action.price + food.price,
          };
        } else {
          return food;
        }
      });
      return updatedState;
    default:
      console.log("Error in reducer.");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

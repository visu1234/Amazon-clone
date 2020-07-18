export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  // console.log(action);
  // what ever is action fired and returned,then new data layer is the retured value so should return all the states(basket/users..etc)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state, // return current state(all inc basket and users)
        basket: [...state.basket, action.item], //now as action is to modify basket, so change the state of basket only
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;

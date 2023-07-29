export const filterReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload,clear:false };
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock,clear:false };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery,clear:false };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload,clear:false };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload,clear:false };
      case "CLEAR_FILTERS":
        return { clear:true, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };
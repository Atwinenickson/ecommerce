import { FETCH_PRODUCTS } from "../../actions/types";
import store from "../../store";

const initialState = {item:[]};
export default function(state=initialState,action) {
switch (action.type) {
    case FETCH_PRODUCTS:
        return {...store, items:action.payload};
    default:
        return state
}
}
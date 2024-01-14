import todosReducer from "./reducer"
import { createStore } from "redux";

const store = createStore(todosReducer)
export default store;

import { createStore } from "redux";
import utangReducer from "../utang/utangReducer";

const store = createStore(utangReducer)

export default store
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserLoginReducer from "./LoginReducer";
const Reducers = {
  UserLogin: persistReducer({ key: "login", storage }, UserLoginReducer),
};

export default Reducers;

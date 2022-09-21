import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserLoginReducer from "./LoginReducer";
import GetAllSocietiesReducer from "./GetAllSocietiesReducer"
import GetAllPhasesReducer from "./GetAllPhasesReducer"
const Reducers = {
  UserLogin: persistReducer({ key: "login", storage }, UserLoginReducer),
  AllSocieties: persistReducer({ key: 'AllSocieties', storage }, GetAllSocietiesReducer),
  AllPhases: persistReducer({ key: 'AllPhases', storage }, GetAllPhasesReducer)
};

export default Reducers;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice";
import {userAuthSlice} from "../features/userAuhtSlice";


import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { allDatasSlice } from "../features/AllDatasSlice";
import { planSlice } from "../features/planSlice";
import { indicateurSlice } from "../features/IndicateurSlice ";
import { dirIndicateurSlice } from "../features/directIndicateurSlice";
import { calculIndicateurSlice } from "../features/CalculByIndicateurSlice";
import { suiviSlice } from "../features/suiviSlice";
import { byYearSlice } from "../features/ByYearSlice";
import { byPreYearSlice } from "../features/ByPreYearSlice";
import { directionSlice } from "../features/directionSlice";
import { userSlice } from "../features/userSlice";
import { performanceSlice } from "../features/performanceSlice";
import { indicateurByIdSlice } from "../features/indicateurByIdSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    userDatas:authSlice.reducer,
    user: userAuthSlice.reducer,
    AllDatas: allDatasSlice.reducer,
    indicateurData: indicateurSlice.reducer,
    dirIndicateurData: dirIndicateurSlice.reducer,
    CalculSuiviData: suiviSlice.reducer,
    calculIndicateurData:calculIndicateurSlice.reducer,
    userPlans:planSlice.reducer,
    directionData:directionSlice.reducer,
    parAn:byYearSlice.reducer,
    parAnPre:byPreYearSlice.reducer,
    UtilisateurData:userSlice.reducer,
    performancereduc:performanceSlice.reducer,
    indicateurByIdList:indicateurByIdSlice.reducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
reducer:
    persistedReducer,
middleware: [thunk]
})


export const persistor = persistStore(store)
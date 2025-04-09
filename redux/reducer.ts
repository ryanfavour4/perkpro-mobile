import { combineReducers } from 'redux'
import authSlice from './slices/authSlice'
import propertySlice from './slices/propertySlice'
import wishlistSlice from './slices/wishlistSlice'
import estateSlice from './slices/estateSlice'

const rootReducer = combineReducers({
   auth: authSlice.reducer,
   property: propertySlice.reducer,
   wishlist: wishlistSlice.reducer,
   estate: estateSlice.reducer
})

export default rootReducer
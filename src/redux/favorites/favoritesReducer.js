import { createReducer } from '@reduxjs/toolkit'
import {
  getSpecificDogSuccess,
    getFavoriteDogSuccess,
    addFavoriteDogSuccess
  
} from './favoritesActions'

const favoriteDogReducer = createReducer([], {
  [getFavoriteDogSuccess]: (state, {payload}) =>state.includes(payload.id)? [ ...state] :  [payload, ...state] ,
  // [getSpecificDogSuccess]: (state, {payload}) => ,

})

export default  favoriteDogReducer
import { createReducer } from '@reduxjs/toolkit'
import {
  addLikesDogSuccess  
} from './likesDogActions'

const likesDogReducer = createReducer([], {
  [addLikesDogSuccess]: (state, { payload }) => [...state, payload],

})



export default likesDogReducer
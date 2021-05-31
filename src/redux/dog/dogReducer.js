import { createReducer } from '@reduxjs/toolkit'
import {
  getImagesRequest,getImagesSuccess, getImagesError, getImagesFormSuccess, getBreedImagesSuccess, sortABSuccess, sortBASuccess
} from './dogActions'

const dogReducer = createReducer([], {
  [getImagesSuccess]: (_, { payload }) => payload,
  [getImagesFormSuccess]: (_, {payload}) => payload,
  [getBreedImagesSuccess]: (_, {payload}) =>payload ,
  [sortABSuccess]: (_, {payload}) => payload,
  [sortBASuccess]: (_, {payload}) => payload
})



export default dogReducer
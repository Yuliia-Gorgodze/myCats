import { createReducer } from '@reduxjs/toolkit'
import {
    addDogListVotingSuccess

  
} from './favoritesActions'

const votingReducer = createReducer([], {
  [addDogListVotingSuccess]: (state,{ payload }) =>[ payload, ...state],
})

export default  votingReducer
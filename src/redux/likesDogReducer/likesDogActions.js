

import { createAction } from '@reduxjs/toolkit'

export const addLikesDogRequest = createAction('ADD_LIKE_DOG__REQUEST')
export const addLikesDogSuccess = createAction('ADD_LIKE_DOG__SUCCESS')
export const addLikesDogError = createAction('ADD_LIKE_DOG_ERROR')
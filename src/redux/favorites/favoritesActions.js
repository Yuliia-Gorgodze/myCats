import { createAction } from '@reduxjs/toolkit'

export const addFavoriteDogRequest = createAction('ADD_FAVORITE_DOG_REQUEST')
export const addFavoriteDogSuccess = createAction('ADD_FAVORITE_DOG_SUCCESS')
export const addFavoriteDogError = createAction('ADD_FAVORITE_DOG_ERROR')

export const getSpecificDogRequest = createAction('GET_SPECIFIC_DOG_REQUEST')
export const getSpecificDogSuccess = createAction('GET_SPECIFIC_DOG_SUCCESS')
export const getSpecificDogError = createAction('GET_SPECIFIC_DOG_ERROR')


export const getFavoriteDogRequest = createAction('GET_FAVORITE_DOG_REQUEST')
export const getFavoriteDogSuccess = createAction('GET_FAVORITE_DOG_SUCCESS')
export const getFavoriteDogError = createAction('GET_FAVORITE_DOG_ERROR')

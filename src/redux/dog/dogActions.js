import { createAction } from '@reduxjs/toolkit'

export const getImagesRequest = createAction('GET_IMAGES_REQUEST')
export const getImagesSuccess = createAction('GET_IMAGES_SUCCESS')
export const getImagesError = createAction('GET_IMAGES_ERROR')


export const getImagesFormRequest = createAction('GET_IMAGES_FORM_REQUEST')
export const getImagesFormSuccess = createAction('GET_IMAGES_FORM_SUCCESS')
export const getImagesFormError = createAction('GET_IMAGES_FORM_ERROR')

export const getBreedImagesRequest = createAction('GET_BREED_IMAGES_REQUEST')
export const getBreedImagesSuccess = createAction('GET_BREED_IMAGES_SUCCESS')
export const getBreedImagesError = createAction('GET_BREED_IMAGES_ERROR')

export const sortABSuccess = createAction('SORT_AB_SUCCESS')
export const sortBASuccess = createAction('SORT_BA_SUCCESS')




import axios from 'axios'
import 
{getImagesRequest,
 getImagesSuccess, 
 getImagesError, 
 getImagesFormRequest,
 getImagesFormSuccess,
 getImagesFormError,
 getBreedImagesRequest,
 getBreedImagesSuccess,
 getBreedImagesError,
 sortBASuccess, 
 sortABSuccess,
} 
from './dogActions'

axios.defaults.baseURL = `https://api.thedogapi.com/v1`

const options = {
    headers: {
        'x-api-key': '2ec59059-c77c-46b9-a3cd-f397344ae5a6',
    }
  };

//   

const getImages = () => (dispatch) => {
    dispatch(getImagesRequest());
    axios
      .get('/breeds?limit=5&page=1', options)
      .then(( {data} ) => dispatch(getImagesSuccess(data)))
      .catch((error) => dispatch(getImagesError(error)))
  }

  const getImagesForm = ({order, type, limit, breed}) => (dispatch) => {
    const parseNumber = parseInt(limit.replace(/\D+/g,""));

    console.log(order, type, parseNumber, breed)
    dispatch(getImagesFormRequest());
    axios
      .get(`/images/search?limit=${parseNumber}&q=${breed}&mime_types=${type}`, options)
      .then(( {data} ) => dispatch(getImagesFormSuccess(data)))
      .catch((error) => dispatch(getImagesFormError(error)))
  }
  const getBreedImages = ({limit, breed}) => (dispatch) => {
    const parseNumber = parseInt(limit.replace(/\D+/g,""));
    dispatch(getBreedImagesRequest());
    axios
      .get(`/breeds?limit=${parseNumber}&q=${breed}`, options)
      .then(( {data} ) => {
        console.log(data)
        dispatch(getBreedImagesSuccess(data))
      })
      .catch((error) => dispatch(getBreedImagesError(error)))
  }
 
  const sortAB = (images) => (dispatch) => {

   dispatch(sortABSuccess(images));

  }
  const sortBA = (images) => (dispatch) => {
   console.log(images)
    dispatch(sortBASuccess(images));
   }


  export default {getImages, getImagesForm, getBreedImages, sortAB, sortBA};
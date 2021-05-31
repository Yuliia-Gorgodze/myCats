import axios from 'axios'
import {addFavoriteDogRequest,
  addFavoriteDogSuccess,
   addFavoriteDogError,
   getFavoriteDogRequest,
    getFavoriteDogSuccess,
     getFavoriteDogError,
     getSpecificDogRequest,
     getSpecificDogSuccess,
     getSpecificDogError
    }from './favoritesActions'
import { array } from 'prop-types';
axios.defaults.baseURL = `https://api.thedogapi.com/v1`

const options = {
  headers: {'x-api-key': '2ec59059-c77c-46b9-a3cd-f397344ae5a6'}
};
  const addFavoriteImage = (id) => (dispatch) => {
    axios
      .post('/favourites',  {'image_id': `${id}`}, options)
      .then(() => dispatch(addFavoriteDogSuccess()))
      .catch((error) => dispatch(addFavoriteDogError(error)))
  }

   const getFavoriteDog = () => (dispatch) => {

    dispatch(getFavoriteDogRequest());
     axios
    .get('/favourites',  options)
    .then(( {data} ) => {
        [...data].forEach(id => {
        getSpecificFavoriteDog(id.image_id).then(data => {
          if(data === undefined){
            return
          }else{
            dispatch(getFavoriteDogSuccess(data)) 
          }
        })
      })
    })
    .catch((error) => dispatch(getFavoriteDogError(error)))
   }



  function getSpecificFavoriteDog (id) {
    return axios
    .get(`/images/search?breed_id=${id}`, options)
    .then(( {data} ) =>  data[0])
   
   }
 
   
  
  export default {addFavoriteImage, getFavoriteDog,  getSpecificFavoriteDog}

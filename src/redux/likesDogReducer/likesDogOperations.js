import axios from 'axios'
import {addLikesDogRequest, addLikesDogSuccess, addLikesDogError}from './favoritesActions'
axios.defaults.baseURL = `https://api.thedogapi.com/v1`

const options = {
  headers: {'x-api-key': '2ec59059-c77c-46b9-a3cd-f397344ae5a6'}
};
  const addLikeImage = (id) => (dispatch) => {

   
    dispatch(addLikesDogRequest());
  //   axios
  //     .post('/favourites',  {'image_id': `${id}`}, options)
  //     .then(( {data} ) => dispatch(addFavoriteDogSuccess()))
  //     .catch((error) => dispatch(addFavoriteDogError(error)))
  // }
  }
  export default {addLikeImage}

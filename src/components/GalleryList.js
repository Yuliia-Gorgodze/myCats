import React, { Component } from 'react';
import styles from './styles/GalleryList.module.css'
import { connect } from 'react-redux';

import operations from '../redux/dog/dogOperation'
import operationFavorite from '../redux/favorites/favoritesOperations'

class GalleryList  extends Component {
   
   render () {
    const {images} = this.props;
    console.log(images)
    return (
      <>
   
      <div>
      
     <ul className={styles.list}>
     {images && images.map(img => {
       const url = img?.image?.url ? img.image.url :  img.url
      return <li key={img.id}><img id={img.id} onClick={this.props.onClick} className={styles.img} width='180' height='150' src={url} /></li> 
    }
     )}
     </ul>
      </div>
      </>
     ) 
   }
}

const mapDispatchToProps = dispatch => ({
  // getImagesList: () => dispatch(operations.getImages()),
  // getFavoriteList: (id) => dispatch(operationFavorite.getSpecificFavoriteDog(id))
})

export default connect(null, mapDispatchToProps)(GalleryList)
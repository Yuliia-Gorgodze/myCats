import React, { Component} from 'react';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import selectors from '../redux/favorites/favoritesSelectors'
import operations from '../redux/favorites/favoritesOperations'
import GalleryList from '../components/GalleryList'
import Search from '../components/SearchNameMenu'

class FavoriteDogs extends Component {

componentDidMount() {
  console.log(Date.now())
  this.props.select()
  console.log(this.props.images)
}

  render() {
    return (
     <>  
     <Search/>
     <div>
  <GalleryList images={this.props.images}/>
  </div>
     </>
    );
  }
}
const mapStateToProps = state => ({
  images: selectors.getImages(state),
});
const mapDispatchToProps = dispatch => ({
  select: () => dispatch(operations.getFavoriteDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDogs);
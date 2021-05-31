import React, { Component} from 'react';
import GalleryList from '../components/GalleryList'
import Search from '../components/SearchNameMenu'

class DislikesLikeDogs extends Component {
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

export default DislikesLikeDogs
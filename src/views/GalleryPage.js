import React, { Component} from 'react';
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import styles from './styles/galleryPage.module.css'
import goBack from '../img/goBack.svg'
import submit from '../img/submit.svg'
import selectors from '../redux/dog/dogSelectors'
import operations from '../redux/dog/dogOperation'
import operationsFavorite from '../redux/favorites/favoritesOperations'
import ModalUpload from '../components/ModalUpload'
import GalleryList from '../components/GalleryList'
import UserMenu from '../components/SearchNameMenu'



class GalleryPage extends Component {
state = {
  order: 'Random',
  type: 'All',
  breed: 'None',
  limit: '5 items per page',
}
handleChange = (e) => {
this.setState({[e.target.name]: e.target.value})
}
componentDidMount =()=> {
  this.props.select(this.state)
}
onSubmiteForm = event => {
  event.preventDefault();
  console.log('state', this.state)
  this.props.select(this.state)
}
addFavoriteDogs =(event)=> {
  console.log(event)
  const id = event.target.id;
  console.log(id)
  this.props.addFavorite(id)
  }
  render() {
    
    
    return (
     <>
        <UserMenu/>
     <div className={styles.containerViews}>
     
  <Form onSubmit={this.onSubmiteForm} className={styles.form}>
  <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
     <Button className={`${styles.buttonGallery} ${styles.button}` } disabled type="button">gallery</Button>
     <ModalUpload/>
     </div>
    
  <Form.Group >
 
    <Form.Label className={styles.titleLabel}>order</Form.Label>
    <Form.Control onChange={this.handleChange} name='order' className={styles.input} as="select" >
      <option>Random</option>
      <option>Desc</option>
      <option>Asc</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
 
    <Form.Label  className={styles.titleLabel}>type</Form.Label>
    <Form.Control onChange={this.handleChange} name='type' className={`${styles.input} ${styles.inputSecondary}`} as="select" >
      <option>All</option>
      <option>Static</option>
      <option>Animated</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label className={styles.titleLabel}>breed</Form.Label>
    <Form.Control onChange={this.handleChange} name='breed' className={styles.input} as="select" >
      <option>None</option>
      <option>Affenpinscher</option>
      <option>Afghan Hound</option>
      <option>African Hunting Dog</option>
      <option>Airedale Terrier</option>
      <option>Akbash Dog</option>
      <option>Akita</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label className={styles.titleLabel}>limit</Form.Label>
    <Form.Control onChange={this.handleChange} name='limit' className={`${styles.input} ${styles.lastInput}`} as="select" >
      <option>5 items per page</option>
      <option>10 items per page</option>
      <option>15 items per page</option>
      <option>20 items per page</option>
    </Form.Control>
  </Form.Group>
  <Button onClick={this.onSubmiteForm}  className={styles.buttonGoBuck} type="submit"><img src={submit}/></Button>
  </Form>
  </div>
  <GalleryList images={this.props.images} onClick={this.addFavoriteDogs} />

     </>
    );
  }
}
const mapStateToProps = state => ({
  images: selectors.getImages(state),
});
const mapDispatchToProps = dispatch => ({
  select: (obj) => dispatch(operations.getImagesForm(obj)),
  addFavorite: (id) => dispatch(operationsFavorite.addFavoriteImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);

 
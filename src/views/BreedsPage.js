import React, { Component} from 'react';
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import styles from './styles/breedsPage.module.css'
import goBack from '../img/goBack.svg'
import abSort from '../img/abSort.svg'
import baSort from '../img/baSort.svg'
import selectors from '../redux/dog/dogSelectors'
import operations from '../redux/dog/dogOperation'
// import ModalUpload from '../components/ModalUpload'
import GalleryList from '../components/GalleryList'
import BreedsInformation from '../components/BreedInformation'
import Search from '../components/SearchNameMenu'

class BreedsPage extends Component {
state = {
  breed: 'All breeds',
  limit: 'Limit: 5',

}
componentDidMount(){
  this.props.select(this.state)
}
handleChange = (e) => {
this.setState({[e.target.name]: e.target.value})

this.props.select(this.state)

}

sortAB = () => {
  const { images } = this.props;
  const sortName = [...images].sort(function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log('sortName :>> ', sortName);
  this.props.sortAB(sortName)
};
sortBA = () => {
  const { images } = this.props;
  console.log(images)
  const sortName = [...images].sort(function compare(a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log('sortName :>> ', sortName);
  this.props.sortBA(sortName)
};

  render() {
    return (
     <>
     <Search/>
     <div className={styles.containerBreeds}>
     
  <Form  className={styles.form}>
  <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
     <Button className={`${styles.buttonBreeds} ${styles.button}` } disabled type="button">breeds</Button>
     </div>
    
  <Form.Group >
    <Form.Control onBlur={this.handleChange}  className={styles.input}  name='breed'  as="select" >
      <option>All breeds</option>
      <option>Affenpinscher</option>
      <option>Afghan Hound</option>
      <option>African Hunting Dog</option>
      <option>Airedale Terrier</option>
      <option>Akbash Dog</option>
      <option>Akita</option>

    </Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Control onBlur={this.handleChange}  className={styles.inputLimit} name='limit' as="select" >
    <option>Limit: 5</option>
      <option>Limit: 10</option>
      <option>Limit: 15</option>
      <option>Limit: 20</option>
    </Form.Control>
  </Form.Group>
  <Button onClick={this.sortAB} className={`${styles.buttonGoBuck} ${styles.buttonSortAB}`} type="button"><img src={abSort}/></Button>
     <Button  onClick={this.sortBA}  className={`${styles.buttonGoBuck} ${styles.buttonSortBA}`} type="button"><img src={baSort}/></Button>
  </Form>
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
  select: (obj) => dispatch(operations.getBreedImages(obj)),
  sortAB: (images) => dispatch(operations.sortAB(images)),
  sortBA: (images) => dispatch(operations.sortBA(images))
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedsPage);
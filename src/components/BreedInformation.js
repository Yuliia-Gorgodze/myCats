import React, { Component } from 'react'
// import React, { Component } from 'react'
import styles from '../views/styles/breedsPage.module.css'
import goBack from '../img/goBack.svg'
import Button from 'react-bootstrap/Button'


class BreedInformation extends Component {
    state = {
        search: ''
    }
    handleChange = (e) => {
    this.setState({search: e.target.value})
    }
    render () {
        return (
            <> 
              <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
              <Button className={`${styles.buttonBreeds} ${styles.button}` } disabled type="button">breeds</Button>
              <img className={styles.imgDog} src=''/>
              </div>
            </>
        )
    }
}
export default BreedInformation;
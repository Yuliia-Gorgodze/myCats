import React, { Component} from 'react';
import styles from './styles/votingPage.module.css'
import Button from 'react-bootstrap/Button'
import goBack from '../img/goBack.svg'
import DogImg from '../img/VotingDog.jpg'

class VotingPage extends Component {
    date = () => {
      const date = new Date()
      const dataNow = String(date).split('').slice(16, 21).join('')
      return dataNow
    }
  render() {
        return (
         <>
         <div className={styles.containerVoting}>
        <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
         <Button className={`${styles.buttonVoting} ${styles.button}` } disabled type="button">voting</Button>
        </div>
        <img className={styles.imgDog} src={DogImg}/>
       </div>
         </>
        );
      }
    }
    
    
    export default VotingPage;
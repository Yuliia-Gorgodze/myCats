import React from 'react'; 
import {NavLink} from 'react-router-dom'
import styles from './styles/navigationListHome.module.css'
import imgVoting from '../img/vote-table.png'
import imgGallery from '../img/images-search.png'
import imgBreeds from '../img/pet-breeds.png'

const NavigationListHome = () => {
return (
 
    <ul className={styles.list}>
        
        <li >
            <div className={styles.cardVoting}>
                <img width='100' height='124' src={imgVoting} alt='voting'/>
            </div>
            <NavLink to="/voting" className={styles.button} activeClassName={styles.buttonActive}>voting</NavLink>
        </li>
        <li>
            <div className={styles.cardBreeds}>
                <img src={imgBreeds} alt='breeds'/>
            </div>
            <NavLink to="/breeds" className={styles.button} activeClassName={styles.buttonActive}>breeds</NavLink>
        </li>
        <li>
            <div className={styles.cardGallery}>
                <img src={imgGallery} alt='gallery'/>
            </div>
            <NavLink to="/gallery" className={styles.button} activeClassName={styles.buttonActive}>gallery</NavLink>
        </li>
        
    </ul>
  
)
}
export default NavigationListHome
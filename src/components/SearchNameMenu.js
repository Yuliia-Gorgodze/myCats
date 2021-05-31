import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import React, { Component } from 'react'
import styles from './styles/searchNameMenu.module.css'
import search from '../img/search.svg'


class SearchMenu extends Component {
    state = {
        search: ''
    }
    handleChange = (e) => {
    this.setState({search: e.target.value})
    }
    render () {
        return (
            <> 
            <div className={styles.container}>
                <form className={styles.form}>
                
                <label className={styles.labelSearch}>
                <input className={styles.inputSearch} placeholder='Search for breeds by name' type='text' onChange={this.handleChange} value={this.state.value}>      
                </input>
                
                </label>
                <button className={styles.buttonSearch} type='submit'><img src={search}/></button>
                </form>
                <ul className={styles.list}>
                    <li ><Link to='/likeDogs'><button type='button' className={`${styles.button} ${styles.buttonLike}`}></button></Link></li>
                    <li ><Link to='/favoriteDogs'><button type='button' className={`${styles.button} ${styles.buttonFavorite}`}></button></Link></li>
                    <li ><Link to='/dislikeDogs'><button type='button' className={`${styles.button} ${styles.buttonDislike}`}></button></Link></li>
                </ul>
                
            </div>
            </>
        )
    }
}
export default SearchMenu;





import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import styles from './styles/homePage.module.css'
import logo from '../img/Logo.svg'
import NavigationList from '../components/NavigationListHome'
import GalleryPage from './GalleryPage'
import HomePreviews from '../components/HomePreviewsImg'
import Search from '../components/SearchNameMenu'
import Breeds from './BreedsPage'
import Voting from './VotingPage'
import favorite from './favoriteDogsPage'
import likeDogs from './LikesDogsViews'
import favoriteDogs from './favoriteDogsPage'
class HomePage extends Component {
   state = {
       renderPage : false
   }
    render () {
        return (<> 
            <div className={styles.baseContainerHome}>
            <div className={styles.homeContainer}>
            <img alt='logo' src={logo} className={styles.logo}/>
            <h2 className= {styles.title}> Hi intern!</h2>
             <span className={styles.text}>Welcome to MSI 2021 Front-end test</span>
             <span className={styles.listTitle}>Lets start using The Dogs API</span>
             <NavigationList/>
            </div>
             <div className={styles.container}>
             <Route exact path="/" component={HomePreviews} />
             <Route path="/gallery" component={GalleryPage} />
             <Route path="/breeds" component={Breeds} />
             <Route path="/voting" component={Voting} />
             <Route path="/favorite" component={favorite} />
             <Route path='/likeDogs' component={likeDogs} />
             <Route path='/favoriteDogs' component={favoriteDogs}/>
             <Route path='/dislikeDogs' component={favoriteDogs}/>
             </div>
            </div>
            </>)
    } 
}
export default HomePage;

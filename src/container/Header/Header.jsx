import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase The New Flavour" style={{color:'white'}}/>
      <h1 className='app__header-h1'>The Key To Fine Drinking</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Love makes the world go round? Not at all. Whiskey makes it go round twice as fast. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.drinks} alt="header img"/>

    </div>
  
  </div> 
);

export default Header;

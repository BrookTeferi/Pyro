import React from 'react';

import { AboutUs, Chef, Events, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Events />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

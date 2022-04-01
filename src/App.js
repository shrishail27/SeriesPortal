import './App.css';
import './nav.css'
import './movie.css'
import './footer.css'


import Navbar from './navbar';
import Home from './home';
import About from './About';
import { useState } from 'react';
import SeriesList from './home';
import Footer from './Footer';
import Add from './Add';
import PageNotFound from './PageNotFound'
import Favourites from './Favourites'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div className="App" >
       <Navbar/>

         <Switch>

         <Route exact path="/">
         <Home/>
         </Route>

          <Route exact path="/about">
          <About/>
          </Route>

          <Route exact path="/add">
            <Add/>
          </Route>

          <Route exact path="/Favourites">
            <Favourites/>
            </Route> 

          <Route exact path='*'>
          <PageNotFound/>
          </Route>

         

         </Switch>

         <Footer/>

        
    </div>
    </Router>
  );
}

export default App;

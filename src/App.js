import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  
  return ( 
    <>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/projects"  component={Projects} />
        <Route exact path="/contact"  component={Contact} />
        <Route path='/github' component={() => { 
            window.location.href = 'https://github.com/StefanTroian'; 
            return null;
        }}/>
        <Route path='/linkedin' component={() => { 
            window.location.href = 'https://www.linkedin.com/in/%C8%99tefan-troian-7a4b55206/'; 
            return null;
        }}/>



        <Route path='/portfolio' component={Home}/>

        <Route path='/stportraits-git' component={() => { 
            window.location.href = 'https://github.com/StefanTroian/ST_Portraits'; 
            return null;
        }}/>

        <Route path='/stportraits' component={() => { 
            window.location.href = 'https://stportraits.herokuapp.com/index'; 
            return null;
        }}/>

        <Route exact path='/store' component={() => { 
            window.location.href = 'https://github.com/StefanTroian/Java-Webapp'; 
            return null;
        }}/>
        <Route exact path='/python' component={() => { 
            window.location.href = 'https://github.com/StefanTroian/ML-Identificare-misoginism'; 
            return null;
        }}/>
        <Route exact path='/trotinete' component={() => { 
            window.location.href = 'https://github.com/StefanTroian/Oracle-database'; 
            return null;
        }}/>





        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );

};

export default App;
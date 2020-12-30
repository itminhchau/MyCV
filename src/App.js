import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Contacts from './components/Contact';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Router>
     <>
        <Route exact path="/CV/" component={Home} />
        <Switch >
          <Route path="/CV/skills" component={Skills} />
          <Route path="/CV/experiences" component={Experiences} />
          <Route path="/CV/educations" component={Educations} />
          <Route path="/CV/contacts" component={Contacts} />
        </Switch>
     </>
   </Router>
   </BrowserRouter>
  );
}

export default App;

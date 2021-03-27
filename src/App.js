import './App.css';
import Main from './components/main';
import Pricing from './components/pricing';
import Payment from './components/payment';
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
      <Router>    
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/pricing" component={Pricing}/>        
            <Route exact path="/payment" component={Payment}/>        
          </Switch>
        </Suspense>   
      </Router>
    // </div>
  );
}

export default App;

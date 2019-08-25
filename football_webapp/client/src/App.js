import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Teams from './components/Teams';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/teams" component={Teams} />
            <Route path="/player/:id" component={Player} />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

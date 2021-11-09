import React from 'react';
import './App.css';
import Header from './components/header';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <div>
              <Header />
              <Route exact path="/" render={()=><div />}/>
              <Route exact path="/" render={()=><Authentication />}/>
              <Route path="/signin" render={()=><Authentication />}/>
            </div>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;

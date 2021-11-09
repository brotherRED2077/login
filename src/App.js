import React from 'react';
import './App.css';
<<<<<<< Updated upstream
import MovieHeader from './components/movieheader';
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <Header />
              <Route exact path="/" render={()=><div />}/>
=======
              <Route exact path="/" render={()=><Authentication />}/>
>>>>>>> Stashed changes
              <Route path="/signin" render={()=><Authentication />}/>
            </div>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;

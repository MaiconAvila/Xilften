import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './workflow/store';
import App from './components/App';
import Details from './components/details';
import SeasonDetails from './components/seasonDetails';
import ScreenMobile from './components/ScreenMobile';

ReactDOM.render(
  <React.StrictMode>
    {window.innerWidth > 648
      ?
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/details' component={Details}/>
            <Route path='/seasonDetails' component={SeasonDetails}/>
          </Switch>
          </BrowserRouter>
        </Provider>
      : <ScreenMobile/>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

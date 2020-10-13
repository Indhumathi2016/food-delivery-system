import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AppStyles } from './App.style';
import Subscription from './components/Subscription';
import { store, history } from './redux/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './App.style';
import Subscribe from './components/Subscribe';
import Success from './components/Success';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppStyles>
        <Router history={history}>
          <Switch>
            <Route
              path="/"
              render={(props) => <Subscription props={props} />}
              exact
              key={'/'}
            />
            <Route
              path="/subscribe/:planId"
              render={(props) => <Subscribe props={props} />}
              key={'/subscribe/:planId'}
              exact
            />
            <Route
              path="/success"
              render={(props) => <Success props={props} />}
              key={'/success/:payment'}
            />
          </Switch>
        </Router>
      </AppStyles>
    </Provider>
  );
}

export default App;

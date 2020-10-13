import React from 'react';
import { Router, Route } from 'react-router-dom';
import { AppStyles } from './App.style';
import Subscription from './components/Subscription';
import { store, history } from './redux/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './App.style';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppStyles>
        <Router history={history}>
          <Route path="/" component={Subscription} exact key={'/'} />
          <Route
            path="/subscribe/:planId"
            component={Subscribe}
            key={'/subscribe/:planId'}
          />
        </Router>
      </AppStyles>
    </Provider>
  );
}

export default App;

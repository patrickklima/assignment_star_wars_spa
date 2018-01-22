import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  NavLink,
  Switch
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Resource from './Resource';

const NavLinks = (navData) => {
  const navLinksList = Object.keys(navData);
  return [
    <div>
      <NavLink activeClassName='active' exact to='/'>
        Home
      </NavLink>{' '}
    </div>,
    navLinksList.map(linkText => {
      <div>
        <NavLink activeClassName='active' to={linkText} >
          {linkText}
        </NavLink>{' '}
      </div>;
    })
  ];
};

const App = ({payload, nav, error, isFetching}) => {
  return (
    <Router>
      <ScrollToTop>
        <NavLinks nav={nav} />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/:resource' component={Resource} /> 
          <Route render = {() => <h1>...Page Not Found...</h1>} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;

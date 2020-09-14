import React from 'react';
import classes from './App.module.css';
import Layout from './component/Layout/Layout';
import {Route,Switch} from 'react-router-dom'
import Login from './component/Layout/Login/Login'
import About from './component/Layout/About/About'
import Home from './component/Layout/Home/Home';
import Sell from './component/Layout/SellerDashBoard/Sell/Sell'
import CheckOut from './component/Checkout/Checkout';
import PageNotFound from './PageNotFound/PageNotFound'
function App() {
  return (
    
    
      <Layout >
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/sell" exact component={Login} />
  <Route path="/about" exact component={About} />
  <Route path="/checkout" exact component={CheckOut} />
  <Route path="/sell/user" exact component={Sell} />
  <Route  component={PageNotFound} />
</Switch>
        </Layout>

  );
}

export default App;

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
import DashBoard from './component/Layout/SellerDashBoard/Dasboard/DashBoard';
import DashBoardHome from './component/Layout/SellerDashBoard/Dasboard/DashBoardHome/DashBoardHome'
import { ToastContainer, toast } from 'react-toastify';
import Seller from './component/Layout/SellerDashBoard/Seller';
import {useStateValue} from './container/StateProvider'
function App() {
 const [{login}]=useStateValue()
  return (
    
    
      <Layout >
<ToastContainer />
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/sell" exact component={Login} />
  <Route path="/about" exact component={About} />
  <Route path="/checkout" exact component={CheckOut} />
  <Seller>
  <Route path={login.uid} exact component={Sell} />
  <Route path="/sellerdashboard" exact component={DashBoard} />
  <Route path="/sellerdashboardhome" exact component={DashBoardHome} />
  </Seller>
  <Route  component={PageNotFound} />
</Switch>
        </Layout>

  );
}

export default App;

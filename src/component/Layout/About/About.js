import React from 'react'
import SellerDashBoard from '../SellerDashBoard/Sell/Sell'
import DashBoard from '../SellerDashBoard/Dasboard/DashBoard'
import classes from './About.module.css'


function About() {
    return (
        <div className={classes.header}>
<h1>About us</h1>
<p className='lead'>At [SHOP NAME], our aim is to offer you [PRODUCTS CATEGORY NAME] that show you that we really care! Not only have we got the trendiest [PRODUCTS CATEGORY NAME], but we can also guarantee that they are of the finest quality.

We started as a small business in [NAME OF CITY/COUNTRY/YEAR OF ORIGIN], and our aim is to continue providing our customers with products that keep them happy, at prices that keep them happy.  

Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relations with them.</p>
        </div>
    )
}

export default About

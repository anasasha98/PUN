import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../router/Router';

const Layout = () => {


  return (
   <Fragment>
    <Header/>
    
   <div><Router/></div>
    
   
    <Footer/>
   </Fragment>
  )
}

export default Layout;

import React from 'react'
import Footer from '../components/footer'
import Landing from '../components/landing'
const Layout = (props) =>{
    return(
        <div>
        {props.children}
        <Landing/>
        <Footer/>
        </div>
    )
}
export default Layout
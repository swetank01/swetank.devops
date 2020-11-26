import React from 'react'
import Dock from '../components/menu'
import Footer from '../components/footer'
const Layout = (props) =>{
    return(
        <div>
        <Dock/>
        {props.children}
        <Footer/>
        </div>
    )
}
export default Layout
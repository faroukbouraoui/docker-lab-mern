import React,{Component} from 'react'
import Blog from '../../FrontBlog'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Services from '../../Services'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
export default class Home extends Component{
    
    render(){

      
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <Services />
            <Pricing />
            <Blog />
            <Footer /> 
           
        </>
    )
}}





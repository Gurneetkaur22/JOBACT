import React from 'react';
import Herosection from './Herosection';
import BlogsCard from './BlogsCard';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
const Homepage = () =>{
    return <>
        <Herosection />
        <BlogsCard />
        <Testimonials />
        <Contact />
        <Footer />
    </>
}

export default Homepage;
import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import FeaturedCompanies from './components/FeaturedCompanies';
import Testimonials from './components/Testimonials';
import BlogsCard from './components/BlogsCard';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
    return <>

        <Navbar />
        <Herosection />
        <FeaturedCompanies />
        <BlogsCard />
        <Testimonials />
        <Contact />
        <Footer />
        
        
    </>
}
export default App;
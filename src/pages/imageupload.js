
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import ImageUplaod from '../components/ImageUpload';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageUplaodPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      
      setIsOpen(!isOpen)
    }
  

    return (

    <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} />


            <ImageUplaod />
            <Footer/>
        </div>

  )
}

export default ImageUplaodPage;
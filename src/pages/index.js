import React, {useState} from 'react'
import Footer from '../components/Footer';
import Bank from '../components/Bank'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Bank />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      <Info {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home

import React , {useState}  from 'react'
import ScrollToTop from '../components/ScrollToTop'
import styled from "styled-components";
import { AccountBox } from "../components/accountBox";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    <ScrollToTop />
    <Navbar toggle={toggle}/>
      <AppContainer>
        <AccountBox />
      </AppContainer>  
      <Footer />

    </>
  )
}

export default SigninPage

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #010606;
`
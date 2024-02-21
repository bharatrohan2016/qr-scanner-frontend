import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const NavBar = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-x: hidden;
    position: fixed;
    background-color: white;
    z-index: 1;
    transition: background-color 0.5s ease-in-out;
    -webkit-box-shadow: 0 8px 6px -6px grey;
       -moz-box-shadow: 0 8px 6px -6px grey;
            
    
`

const Image = styled.img`
    
    height: 10vh;
    margin-top: 0.7vh;
    margin-bottom: 0.7vh;
    @media (max-width: 600px) {
        
        height : 7vh;
    }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState('/BharatRohan_Logo-03 copy.png');
  const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
           
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
  return (
    <NavBar style={{backgroundColor: scrolled ? 'white' : 'transparent', boxShadow : scrolled ? '0 8px 6px -6px grey' : 'none'}}>
        <Box sx={{width: '2vw'}}></Box>
        <Image style={{cursor: 'pointer'}} src={logo} onClick={() => {
          navigate('/')
        }} />
    </NavBar>
  )
}

export default Navbar
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const NavBar = styled(Box)`
    height: 12vh;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-x: hidden;
    position: fixed;
    background-color: white;
    z-index: 1;
    transition: background-color 0.5s ease-in-out
`

const Image = styled.img`
    width: 20vw;
    height: 10vh;
    margin-top: 2vh;
    @media (max-width: 600px) {
        width: 60vw;
    }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
    <NavBar style={{backgroundColor: scrolled ? 'white' : 'transparent'}}>
        <Box sx={{width: '2vw'}}></Box>
        <Image style={{cursor: 'pointer'}} src='/BharatRohan_Logo-03 copy.png' onClick={() => {
          navigate('/')
        }} />
    </NavBar>
  )
}

export default Navbar
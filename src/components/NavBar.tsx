import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from '@emotion/styled';

const Navbar = styled(Box)`
    @media (max-width: 600px) {
        height: 10vh;
    }
`;

const NavBar = () => {
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
    <Box sx={{position: 'fixed', width: '100vw',backgroundColor: scrolled ? 'white' : 'transparent', transition: 'background-color 0.5s ease-in-out', zIndex: '100'}}>
        <Navbar sx={{display: 'flex', fontWeight: '800',justifyContent: 'space-between', alignItems: 'center', marginTop: '2vh', marginLeft: '2vw', fontSize: '30px', height: '10vh', color: scrolled ? 'black' : 'white'}}>
            <Box></Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src='/Logo-BR.svg' style={{ width: '50px', height: '50px', overflowX: 'hidden' }}/>
                <p><i>BharatRohan®</i></p>
            </Box>

            <Button onClick={() => {
                toast.success('Sign Out!')
                localStorage.clear();
                navigate('/')
            }}>
                <LogoutIcon sx={{color: scrolled ? '#ff8a00' : 'white'}}/>
            </Button>
        </Navbar>
    </Box>
  )
}

export default NavBar
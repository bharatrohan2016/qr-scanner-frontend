import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const NavBar = styled(Box)`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: fixed;
    background-color: white;
    z-index: 1;
    background-color: #F0FFF0
`

const Image = styled.img`
    width: 20vw;
    height: 10vh;
    @media (max-width: 600px) {
        width: 60vw;
    }
`

const Navbar = () => {
  return (
    <NavBar>
        <Image src='/BharatRohan_Logo-03 copy.png' />
    </NavBar>
  )
}

export default Navbar
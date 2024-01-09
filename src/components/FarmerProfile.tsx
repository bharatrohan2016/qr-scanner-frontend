import { Box } from '@mui/material'
import React from 'react'
import { BackgroundContainer, HomePage, Logo, MainContent } from './Home'
import styled from '@emotion/styled'

const MainProfileContent = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 30vh;
  border: 1px solid black;
  width: 80vw;
`;

const FarmerProfile = () => {
  return (
    <Box sx={{overflowX: 'hidden'}}>
        <BackgroundContainer></BackgroundContainer>
        <Box sx={{display: 'flex', fontWeight: '800',justifyContent: 'start', alignItems: 'center', marginTop: '4vh', marginLeft: '2vw', fontSize: '30px', height: '10vh'}}>
          <img src='/BharatRohan_Logo-03.png' style={{ width: '500px', height: '500px', overflowX: 'hidden' }}/>
          {/* <p><i>BharatRohan</i></p> */}
        </Box> 
        <HomePage>
          <Logo src='/logo192.png' />
          <MainProfileContent>
           <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                Box 1
            </MainContent>
            <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                Box 2
            </MainContent>
          </MainProfileContent>
        </HomePage>
    </Box>
  )
}

export default FarmerProfile
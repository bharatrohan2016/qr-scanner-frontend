import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';
import { Navbar } from './Home'
import styled from '@emotion/styled'

export const Main = styled(Box)`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;
  border: 1px solid black;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    margin-top: 10vh;
  }
`;

export const ContentBoxOne = styled(Box)`
  height: 80vh;
  width: 45vw;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 50vh;
    width: 80vw;
  }
`;

const Content = styled(Box)`
  height: 80vh;
  width: 45vw;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 80vh;
    width: 80vw;
  }
`;

export const VideoBox = styled(Box)`
  height: 40vh;
  width: 75vw;
  border: 1px solid black;
`;

const FormBox = styled(Box)`
  height: 50vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  align-items: center;
  @media (max-width: 600px) {
    height: 80vh;
    width: 80vw;
  }
`


const Login = () => {
  const [showOtpForm, setShowOtpForm] = useState(true);

  const handleGetOtpClick = () => {
    setShowOtpForm(false);
  };

  return (
    <Box sx={{overflowX: 'hidden'}}>
      <Box sx={{position: 'fixed', width: '100vw',backgroundColor: 'white', transition: 'background-color 0.5s ease-in-out', zIndex: '100'}}>
          <Navbar sx={{display: 'flex', fontWeight: '800',justifyContent: 'center', alignItems: 'center', marginTop: '2vh', marginLeft: '2vw', fontSize: '30px', height: '10vh', color: 'black'}}>
              <img src='/Logo-BR.svg' style={{ width: '50px', height: '50px', overflowX: 'hidden' }}/>
              <p><i>BharatRohan®</i></p>
          </Navbar>
      </Box>
      <Main>
        <ContentBoxOne>
          <VideoBox></VideoBox>
        </ContentBoxOne>
        <Content>
          <FormBox component="form">
            <TextField
              variant="filled"
              sx={{ width: '80%', fontSize: '20px' }} 
              type='text' 
              label="Name *"
            />
            <TextField
              variant="filled"
              sx={{ width: '80%', fontSize: '20px' }} 
              type='text' 
              label="Email"
            />
            <TextField
              variant="filled"
              sx={{ width: '80%', fontSize: '20px' }} 
              type='text' 
              label="Phone *"
            />
            {!showOtpForm ? (
              <>
                <TextField
                  variant="filled"
                  sx={{ width: '80%', fontSize: '20px' }}
                  type="text"
                  label="Enter Otp"
                />
                <Button>
                  Login
                </Button>
              </>
              ) : (
                <Button onClick={handleGetOtpClick}>
                  Get Otp
                </Button>
              )}
          </FormBox>
        </Content>
      </Main>
    </Box>
  )
}

export default Login
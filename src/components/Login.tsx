import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';
import { Navbar } from './Home'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
import { generateOtp, signIn } from '../service/api';
import { toast } from 'react-toastify';

export const BackgroundContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff8a00, #4caf50);
  background-size: 400% 400%;
  animation: gradientAnimation 10s infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background-position: center;
  z-index: -1;
  opacity: 0.7;
`;

export const Main = styled(Box)`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;
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
`;

const FormBox = styled(Box)`
  height: 60vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  @media (max-width: 600px) {
    height: 80vh;
    width: 80vw;
  }
`;

const loginInitialValues = {
  name: '',
  email: '',
  phone: '',
  otp: '',
}


const Login = () => {
  const [showOtpForm, setShowOtpForm] = useState(true);
  const [login, setLogin] = useState(loginInitialValues)

  const onValueChange = (e: any) => {
    setLogin({...login, [e.target.name]: e.target.value});
  }
  const navigate = useNavigate(); 

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };


  const handleGetOtpClick = async () => {
    if (login.name === '' || login.phone === '') {
      toast.error('Please fill the required feilds!')
    }else if (login.phone.length !== 10) {
      toast.error('Wrong phone number!')
    }
    else{
      setLogin({ ...login, otp: '' });
      const getOtp = await generateOtp(login)
      console.log(getOtp);
      toast.success('Otp Sent!')
      setShowOtpForm(false);
    }
  };

  const loginUser = async () => {
    try {
      if (login.otp === '') {
        return toast.error('Enter Otp!')
      }
      let response = await signIn(login);
      console.log(response);
      if (response.success === true) {
        localStorage.setItem("userInfo", JSON.stringify(response))
        localStorage.setItem("token", JSON.stringify(response.token))
        localStorage.setItem("user", response.user)
        localStorage.setItem("params", response.id)
        toast.success('Logged In!')
        navigate(`/home`)
      }else if (response.success === false) {
        toast.error('Oops Wrong Otp!')
      }else {
        toast.error('Oops Wrong Credentials!')
      }
    } catch (error) {
      toast.error('Oops Wrong Otp!')
      console.log(error);
    }
  }

  return (
    <Box sx={{overflowX: 'hidden'}}>
      <BackgroundContainer></BackgroundContainer>
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
          {!showOtpForm ? (
            <FormBox component="form" onSubmit={handleSubmit}>
              <TextField
                  variant="filled"
                  sx={{ width: '80%', fontSize: '20px' }}
                  type="text"
                  label="Enter Otp"
                  name='otp'
                  onChange={(e) => onValueChange(e)}
                  required
                  value={login.otp}
                />
                <Button sx={{backgroundColor: 'blue', color: 'white'}} onClick={loginUser}>
                  Login
                </Button>
            </FormBox>
          ) : (
            <FormBox component="form" onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                sx={{ width: '80%', fontSize: '20px' }} 
                type='text' 
                label="Name *"
                name='name'
                onChange={(e) => onValueChange(e)}
                required
                value={login.name}
              />
              <TextField
                variant="filled"
                sx={{ width: '80%', fontSize: '20px' }} 
                type='text' 
                label="Email"
                name='email'
                onChange={(e) => onValueChange(e)}
                value={login.email}
              />
              <TextField
                variant="filled"
                sx={{ width: '80%', fontSize: '20px' }} 
                type='text' 
                label="Phone *"
                name='phone'
                onChange={(e) => onValueChange(e)}
                required
                value={login.phone}
              />
              <Button onClick={handleGetOtpClick} sx={{backgroundColor: 'blue', color: 'white', opacity: '0.5'}}>
                  Get Otp
              </Button>
            </FormBox>
          )}
        </Content>
      </Main>
    </Box>
  )
}

export default Login
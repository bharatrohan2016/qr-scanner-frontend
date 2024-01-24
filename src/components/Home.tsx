import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import YouTube from 'react-youtube';

const HomeBox = styled(Box)`
    height: 100%;
    width: 100%;
    border: 1px solid black;
`;

const VideoBox = styled(Box)`
    height: 70vh;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    background-image: url('videobox.jpg');
    background-size: cover;
    background-position: center;
`

const Video = styled(Box)`
    border: 1px solid black;
    height: 35vh;
    width: 40vw;
    @media (max-width: 600px) {
        width: 80vw;
    }
`;

const SectionOne = styled(Box)`
    height: 60vh;
    width: inherit;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url('Section_1.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: rgba(255, 0, 0, 0.5);
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
`;

const Image = styled(Box)`
    height: 45vh;
    width: 22vw;
    border: 1px solid black;
    @media (max-width: 600px) {
        display: none;
    }
`

const FormBox = styled(Box)`
    width: 50vw;
    height: 55vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    @media (max-width: 600px) {
        width: 80%;
    }
`;

const SectionTwo = styled(Box)`
    height: 55vh;
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Heading = styled(Box)`
    height: 10vh;
    width: 30vw;
    border: 1px solid black;
    @media (max-width: 600px) {
        width: 80vw;
    }
`

const Pictures = styled(Box)`
    height: 40vh;
    width: 60vw;
    border: 1px solid black;
    @media (max-width: 600px) {
        width: 90vw;
    }
`;

const opts = {
    width: '100%',  // Set your desired width
    height: '250', // Set your desired height
    playerVars: {
      autoplay: 1,   // Autoplay the video
      controls: 0,   // Hide video controls
      mute: 1,       // Mute the video
    },
  };

const Home = () => {
  return (
    <HomeBox>
        <VideoBox>
            <Box></Box>
            <Video>
                <YouTube
                    videoId="ZSHkJ7HO4pI"
                    opts={opts}
                />
            </Video>
        </VideoBox>
        <SectionOne>
            <Image></Image>
            <FormBox component="form">
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px' }} 
                    type='text' 
                    label="Name"
                    name='name'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.name}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px' }} 
                    type='text' 
                    label="Email"
                    name='email'
                    // onChange={(e) => onValueChange(e)}
                    // value={login.email}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px' }} 
                    type='text' 
                    label="Company"
                    name='company'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.phone}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px' }} 
                    type='text' 
                    label="Designation"
                    name='designation'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.phone}
                />
                <Button sx={{backgroundColor: 'blue', color: 'white'}}>
                    Submit
                </Button>
            </FormBox>
        </SectionOne>
        <SectionTwo>
            <Heading></Heading>
            <Pictures></Pictures>
        </SectionTwo>
    </HomeBox>
  )
}

export default Home
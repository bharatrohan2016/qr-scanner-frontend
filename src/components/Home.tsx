import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomeBox = styled(Box)`
    height: 100%;
    width: 100%;
`;

const VideoBox = styled(Box)`
    height: 80vh;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url('videobox.jpg');
    background-size: cover;
    background-position: center;
`

const Video = styled(Box)`
    height: 35vh;
    width: 40vw;
    @media (max-width: 600px) {
        width: 80vw;
    }
`;

const SectionOne = styled(Box)`
    height: 60vh;
    width: inherit;
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

const Image = styled.img`
    height: 45vh;
    width: 22vw;
    border-radius: 10px;
    @media (max-width: 600px) {
        display: none;
    }
`

const FormBox = styled(Box)`
    width: 50vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(240,255,240, 0.5);
    @media (max-width: 600px) {
        width: 80%;
    }
`;

const SectionTwo = styled(Box)`
    height: 55vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 600px) {
        height: 35vh;
    }
`;

const Heading = styled(Box)`
    height: 10vh;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 90vw;
        font-size: 9px;
    }
`

const Pictures = styled(Box)`
    height: 40vh;
    width: 40vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px) {
        width: 90vw;
        height: 20vh;
    }
`;

const Images = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    @media (max-width: 600px){
        height: 80px;
        width: 80px;
    }
`;

const CarouselContainer = styled(Box)`
  width: 40vw;
  height: 30vh;
  @media (max-width: 600px) {
    width: 90vw;
    height: 20vh;
  }
`;

const CarouselImageContainer = styled.div`
  margin-right: 10px;  /* Adjust the margin to control the gap between images */
`;

const CarouselImage = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 80px;
    width: 80px;
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
    const images = ['/Photo1.jpg', '/Photo2.jpg', '/Photo3.jpg', '/Photo5.jpg', '/Photo6.jpg', '/Photo7.jpg', '/Photo8.jpg']
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
            <Image src='/Drone.jpg'/>
            <FormBox component="form">
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                    type='text' 
                    label="Name"
                    name='name'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.name}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                    type='text' 
                    label="Email"
                    name='email'
                    // onChange={(e) => onValueChange(e)}
                    // value={login.email}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                    type='text' 
                    label="Company"
                    name='company'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.phone}
                />
                <TextField
                    variant="filled"
                    sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                    type='text' 
                    label="Designation"
                    name='designation'
                    // onChange={(e) => onValueChange(e)}
                    required
                    // value={login.phone}
                />
                <Button sx={{backgroundColor: 'blue', color: 'white', zIndex: 0}}>
                    Submit
                </Button>
            </FormBox>
        </SectionOne>
        <SectionTwo>
            <Heading>
                <h1 style={{color: '#FFB402'}}>We are obsessed with collaboration, community and consumers.</h1>
            </Heading>
            <CarouselContainer>
                <Carousel showThumbs={false} showArrows emulateTouch infiniteLoop centerMode centerSlidePercentage={25}>
                    {images.map((image, idx) => (
                    <CarouselImageContainer key={idx}>
                        <CarouselImage src={image} alt={`Image ${idx + 1}`} />
                    </CarouselImageContainer>
                    ))}
                </Carousel>
            </CarouselContainer>
        </SectionTwo>
    </HomeBox>
  )
}

export default Home
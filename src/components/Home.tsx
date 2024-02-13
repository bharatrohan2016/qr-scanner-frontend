import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router';
import { signIn } from '../service/api';

                      
const HomeBox = styled(Box)`
    height: 100%;
    width: 100%;
`;

const VideoBox = styled(Box)`
    height: 80vh;
    width: inherit;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url('first.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media(max-width: 600px){
        height: 50vh;
        background-position: right;
        background-size: 500px 600px;
    }
`

const Video = styled(Box)`
    height: 35vh;
    width: 40vw;
    @media (max-width: 600px) {
        width: 80vw;
    }
`;

const SectionOne = styled(Box)`
    height: 70vh;
    width: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`;

const Green = styled(Box)`
    height: inherit;
    width: inherit;
`

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
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    @media (max-width: 600px) {
        width: 80%;
        height: 60vh;
    }
`;

    const ContentBoxOne = styled(Box)`
        height: 80vh;
        width: 45vw;
        display: flex;
        justify-content: center;
        z-index: 0;
        align-items: center;
        @media (max-width: 600px) {
            height: 50vh;
            width: 80vw;
        }
    `;



const GreenBox = styled(Box)`
    height: 35vh;
    width: 35vw;
    background-color: #193C34;
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    font-size: 36px;
    font-weight: 600;
    @media (max-width: 600px) {
        font-size: 15px;
        height: 25vh;
        width: 40vw;
    }
`

const SectionTwo = styled(Box)`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 600px) {
        height: 40vh;
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

// const Pictures = styled(Box)`
//     height: 40vh;
//     width: 40vw;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     @media (max-width: 600px) {
//         width: 90vw;
//         height: 20vh;
//     }
// `;

// const Images = styled.img`
//     height: 200px;
//     width: 200px;
//     object-fit: cover;
//     @media (max-width: 600px){
//         height: 80px;
//         width: 80px;
//     }
// `;

const CarouselContainer = styled(Box)`
  width: 80vw;
  height: 30vh;
  display: flex;
  gap: 8px;
  @media (max-width: 600px) {
    width: 90vw;
    height: 20vh;
  };
`;

const CarouselImageSquare = styled.img`
  width: 20%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  &:hover {
    opacity: 0.7;
  };
  
  @media (max-width: 600px) {
    height: 80px;
    width: 80px;
  }
`;


const CarouselImageRectangle = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  &:hover {
    opacity: 0.7;
  };
  
  @media (max-width: 600px) {
    height: 80px;
    width: 80px;
  }
`;

const CarouselImageContainer = styled.div`
  margin-right: 10px;  /* Adjust the margin to control the gap between images */
`;

// const CarouselImage = styled.img`
//   height: 200px;
//   width: 200px;
//   object-fit: cover;
//   @media (max-width: 600px) {
//     height: 80px;
//     width: 80px;
//   }
// `;

const opts = {
    width: '100%',  // Set your desired width
    height: '250', // Set your desired height
    playerVars: {
      autoplay: 1,   // Autoplay the video
      controls: 0,   // Hide video controls
      mute: 1,       // Mute the video
    },
  };

  const loginInitialValues = {
    name: '',
    email: '',
    company: '',
    designation: '',
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  
const Home = () => {
    const [login, setLogin] = useState(loginInitialValues)
    const navigate = useNavigate()
    const onValueChange = (e: any) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }
    const images = ['/Photo1.jpg', '/Photo2.jpg', '/Photo3.jpg', '/Photo5.jpg', '/Photo6.jpg', '/Photo7.jpg', '/Photo8.jpg']
    const loginUser = async () => {
        try {
          let response = await signIn(login);
          navigate(`/farmer`)
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <HomeBox>
        <VideoBox>
            <GreenBox>
                <Box sx={{textShadow:  '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>
                    <i>
                        Revolutionizing agriculture by eliminating traditional guesswork from farmers' fields and replacing it with scientific precision...
                    </i>
                </Box>
            </GreenBox>
            <Box></Box>
            <Box></Box>
        </VideoBox>
        <SectionOne>
            {/* <Green> */}
                {/* <Image src='/Drone.jpg'/> */}
                <FormBox component="form" onSubmit={handleSubmit}>
                    <Box component='h2'><i style={{color: '#E1AF3F'}}>Please Fill the Box:-</i></Box>
                    <TextField
                        variant="filled"
                        sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                        type='text' 
                        label="Name"
                        name='name'
                        onChange={(e) => onValueChange(e)}
                        required
                        // value={login.name}
                    />
                    <TextField
                        variant="filled"
                        sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                        type='text' 
                        label="Email"
                        name='email'
                        onChange={(e) => onValueChange(e)}
                        // value={login.email}
                    />
                    <TextField
                        variant="filled"
                        sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                        type='text' 
                        label="Company"
                        name='company'
                        onChange={(e) => onValueChange(e)}
                        required
                        // value={login.phone}
                    />
                    <TextField
                        variant="filled"
                        sx={{ width: '80%', fontSize: '20px', zIndex: 0 }} 
                        type='text' 
                        label="Designation"
                        name='designation'
                        onChange={(e) => onValueChange(e)}
                        required
                        // value={login.phone}
                    />
                    <Button onClick={loginUser} sx={{backgroundColor: 'blue', color: 'white', zIndex: 0}}>
                        Submit
                    </Button>
                </FormBox>
            {/* </Green> */}
            <Video>
                <YouTube
                    videoId="ZSHkJ7HO4pI"
                    opts={opts}
                />
            </Video>
        </SectionOne>
        <SectionTwo>
            <Heading>
                <h1 style={{color: '#FFB402'}}>We are obsessed with collaboration, community and consumers.</h1>
            </Heading>
            <CarouselContainer>
                <CarouselImageSquare src="/Photo1.jpg" alt="Image 1" />
                <CarouselImageRectangle src="Photo2.jpg" alt="Image 2" />
                <CarouselImageSquare src='Photo7.jpg' alt='Image' />
                <CarouselImageSquare src="Photo4.jpg" alt="Image 3" />
            </CarouselContainer>
            <CarouselContainer>
                <CarouselImageRectangle src="/Photo5.jpg" alt="Image 1" />
                <CarouselImageRectangle src="Photo6.jpg" alt="Image 2" />
                <CarouselImageSquare src='Photo7.jpg' alt='Image' />
            </CarouselContainer>
        </SectionTwo>
    </HomeBox>
  )
}

export default Home
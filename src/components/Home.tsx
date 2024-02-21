import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Theme, makeStyles } from '@mui/material';
import styled from '@emotion/styled';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router';
import { signIn } from '../service/api';
import { toast } from 'react-toastify';
import Carousels from './Carousels';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
const batchNumberList = [
    // {
    //     crop : 'Chili',
    //     number : '0593',
    // },
    // {
    //     crop : 'Turmeric',
    //     number : '1706',
    // },
    {
        crop : 'Coriander',
        number : 'BR 1192',
    },
    {
        crop : 'Cumin',
        number : 'BR 0606',
    }
]
const HomeBox = styled(Box)`
    height: 100%;
    width: 100%;
`;

const VideoBox = styled(Box)`
    
    width: inherit;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url('fifth.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media(max-width: 600px){
        background-position: center;
        background-size: 900px 900px;
    }
`

const Video = styled(Box)`
    width: 40vw;
    @media (max-width: 600px) {
        margin-top : 2vh;
        width: 90%;
    }
`;

const SectionOne = styled(Box)`
   
    width: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top : 2vh;
    margin-bottom : 2vh;
    @media (max-width: 600px) {
       
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
    // height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
    border-radius: 50px;
    border-top-right-radius : 0px;
    border-bottom-left-radius : 0px;
    border-left : 4px solid rgb(25, 60, 52); 
    border-bottom : 4px solid rgb(25, 60, 52); 
    padding-bottom : 8px;
    @media (max-width: 600px) {
        width: 90%;
       
        border-top-right-radius : 0px;
        border-bottom-left-radius : 0px;
        padding-bottom : 2px;
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
   
    
    background-color : #0000009c;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    font-size: 36px;
    font-weight: 600;
    @media (max-width: 600px) {
        font-size: 1.1rem;
        font-weight: 400;
    }
`

const SectionTwo = styled(Box)`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color : rgb(25, 60, 52);
    justify-content: space-around;
    padding-bottom : 3vh;
    @media (max-width: 600px) {
        height: 40vh;
        padding-bottom : 0vh;
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
  border-radius : 25px;
  border : 3px solid white;
  border-bottom-right-radius : 0px;
  border-top-left-radius : 0px;
  &:hover {
    opacity: 0.7;
  };
  
  @media (max-width: 600px) {
    border-radius : 10px;
    border-bottom-right-radius : 0px;
    border-top-left-radius : 0px;
    border : 1px solid white;
    height: 80px;
    width: 80px;
  }
`;


const CarouselImageRectangle = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  border-radius : 25px;
  border-bottom-right-radius : 0px;
  border-top-left-radius : 0px;
  border : 3px solid white;
  &:hover {
    opacity: 0.7;
    
  };
  
  @media (max-width: 600px) {
    border-radius : 10px;
    border-bottom-right-radius : 0px;
    border-top-left-radius : 0px;
    border : 1px solid white;
    height: 80px;
    width: 80px;
  }
`;

const CarouselImageContainer = styled.div`
  margin-right: 10px;  /* Adjust the margin to control the gap between images */
`;


const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(25, 60, 52)', // Your RGB color
      },
    },
  });

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
    barcode: ''
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
    const navigate = useNavigate();
   
    const onValueChange = (e: any) => {
        setLogin({...login, [e.target.name]: e.target.value});
     
    }
    const images = ['/Photo1.jpg', '/Photo2.jpg', '/Photo3.jpg', '/Photo5.jpg', '/Photo6.jpg', '/Photo7.jpg', '/Photo8.jpg']
    const clickHandler = () => {
        navigate('/#form-fill');
    }

   

    const loginUser = async () => {
        try {
          let response = await signIn(login);
          navigate(`/farmer/${login.barcode}`)
          setLogin(loginInitialValues)
        } catch (error) {
          console.log(error);
        }
      }
  return (
<>
    <HomeBox>
        <VideoBox>
            <GreenBox>
                <Box sx={{textShadow:  '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>
                    <i>
                        BharatRohan drones for hyperspectral crop monitoring, ensuring sustainable yields and offering traceable procurement for buyers
                    </i>

                </Box>
                <Box>
                    <a href='/#form-fill' className='btn-connect'>Connect with Us</a>
                </Box>
            </GreenBox>
            <Box></Box>
            <Box></Box>
        </VideoBox>
        <SectionOne className='anchor' id='form-fill'>
            {/* <Green> */}
                {/* <Image src='/Drone.jpg'/> */}

                <FormBox component="form" onSubmit={handleSubmit}>
                    <div className='three'>
                    <p><i>Please share your information</i></p>
                    </div>
                    <ThemeProvider theme={theme}>
                        <TextField
                            variant="outlined"
                            className='input-feild' 
                            type='text' 
                            sx={{ width: '80%', fontSize: '20px', zIndex: 0, }} 
                            label="Name"
                            name='name'
                            onChange={(e) => onValueChange(e)}
                            
                            value={login.name}
                        />
                        <TextField
                            variant="outlined"
                            sx={{ width: '80%', fontSize: '20px', zIndex: 0, mt : 2  }} 
                            type='text' 
                            label="Email"
                            name='email'
                            onChange={(e) => onValueChange(e)}
                            value={login.email}
                        />
                        <TextField
                            variant="outlined"
                            sx={{ width: '80%', fontSize: '20px', zIndex: 0,  mt : 2  }} 
                            type='text' 
                            label="Company"
                            name='company'
                            onChange={(e) => onValueChange(e)}
                            
                            value={login.company}
                        />
                        <TextField
                            variant="outlined"
                            sx={{ width: '80%', fontSize: '20px', zIndex: 0, mt : 2  }} 
                            type='text' 
                            label="Designation"
                            name='designation'
                            onChange={(e) => onValueChange(e)}
                            
                            value={login.designation}
                        />
                      
                      <FormControl variant="outlined" sx={{ width: '80%', zIndex: 0, mt : 2  }}>
                        {/* Add InputLabel for the label */}
                        <InputLabel id="select-label">Batch Number *</InputLabel>
                        {/* Add the Select component below */}
                        <Select
                            labelId="select-label"
                            name='barcode'
                            label="Batch Number *"
                            sx={{ justifyContent: 'flex-start' }}
                            onChange={(e) => onValueChange(e)}
                            value={login.barcode}
                        >
                          
                            {
                                batchNumberList.map((item, index) => <MenuItem key={index} value={item.number}>{item.crop}({item.number})</MenuItem>)
                            }
                        </Select>
                        </FormControl>
                       
                    </ThemeProvider>
                    <Button onClick={loginUser} className='btn-submit' sx={{ mt : 2, mb:2 }}>
                        Trace my Food
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
    </>
  )
}

export default Home
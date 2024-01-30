import React, { useEffect, useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { getFarmers } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { BackgroundContainer, Main} from './Login';
import { toast } from 'react-toastify';
import NavBar from './NavBar';
import YouTube from 'react-youtube';

// const BackgroundContainer = styled(Box)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(45deg, #ff8a00, #4caf50);
//   background-size: 400% 400%;
//   animation: gradientAnimation 10s infinite;

//   @keyframes gradientAnimation {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
//   background-size: cover;
//   background-position: center;
//   z-index: -1;
//   opacity: 0.7;
// `;



export const Logo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin-top: 2%;
    @media (max-width: 600px) {
        width: 100px;
        height: 100px;
        overflowX: 'hidden'
    }
`;

export const Navbar = styled(Box)`
    @media (max-width: 600px) {
        height: 10vh;
    }
`;

export const HomePage = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 45vh;
    margin-top: 10vh;
    z-index: 0;
    width: 48vw; 
    @media (max-width: 600px) {
        margin-top: 15vh;
        width: 100%;
    }
`;

const SearchBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    width: 80%;
`

const SearchB = styled(TextField)`
    && {
        @media (max-width: 600px) {
            width: 80%;
        }

        .MuiInputBase-root {
            border-bottom: none;
            border-radius: 8px 8px 8px 8px;
        }

        .Mui-focused {
            border-color: none;
        }
    }
`

const FarmerSection = styled(Box)`
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        min-height: 12vh
    }
`

const FarmerProfile = styled(Box)`
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 135px;
    margin-top: 3%;
    &:hover {
        opacity: 0.7;
    }
    @media (max-width: 600px) {
        height: 15vh;
        &:active {
            opacity: 0.7; /* Apply the hover effect on touch devices */
        }
    }
`

const Images = styled.img`
    width: 120px;
    @media (max-width: 600px) {
        width: 40px
    }
`

const FarmerDemo = [
    {
        id: '1',
        name: 'Sanchit Uppal',
        place: 'Mahendra Park',
        crops: ['paddy', 'wheat', 'maze', 'bazra'],
        image: '/logo192.png'
    },

    {
        id: '2',
        name: 'Kishan Vaidya',
        place: 'Adarsh Nagar',
        crops: ['paddy', 'wheat', 'maze', 'bazra'],
        image: '/logo192.png'
    },

    {
        id: '3',
        name: 'Mukesh Uppal',
        place: 'GTB Park',
        crops: ['paddy', 'wheat', 'maze', 'bazra'],
        image: '/logo192.png'
    },
    {
        id: '4',
        name: 'Dhruv Uppal',
        place: 'GTB Park',
        crops: ['paddy', 'wheat', 'maze', 'bazra'],
        image: '/logo192.png'
    }
]


const ProfBox = styled(Box)`
    @media (max-width: 600px) {
        width: 40px;
        min-height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center
    }
`

const ProfileContent = styled(Box)`
    @media (max-width: 600px) {
        width: 180px;
        min-height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
`

export const MainContent = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    @media (max-width: 600px) {
        width: 160px;
        display: flex;
        height: 7vh;
        justify-content: start;
        align-items: start;
        font-size: 11px;
        padding: 0;
    }
`;

    const VideoBox = styled(Box)`
        height: 35vh;
        width: 40vw;
        position: fixed;
        @media (max-width: 600px) {
            width: 80vw;
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





interface Farmer {
    firstname: string;
    lastname: string;
    state: string;
    village: string;
    totalLandArea: number;
    dob: string
}

export const capitalizeFirstLetter = (str:any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hideWord = (str:any) => {
    return str.charAt(0).toUpperCase() + 'X'.repeat(str.length - 1);
}
  

const Home = () => {
    const [response, setResponse] = useState<Farmer[] | undefined>();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const navigate = useNavigate()
    const userInfo = localStorage.getItem("userInfo");

    const clickToFarmer = (e:any) => {
        navigate(`/farmerprofile/${e._id}`)
    }

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getFarmers();
            setResponse(result?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      const filteredFarmers = response?.filter(
        (farmer) =>
          farmer.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          farmer.lastname.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (typeof response === 'undefined') {
        return(
            <h1>Loading...</h1>
        )
    }

    const opts = {
        width: '100%',  // Set your desired width
        height: '250', // Set your desired height
        playerVars: {
          autoplay: 1,   // Autoplay the video
          controls: 0,   // Hide video controls
          mute: 1,       // Mute the video
        },
      };
    

  return (
    <Box sx={{overflowX: 'hidden'}}>
        <BackgroundContainer></BackgroundContainer>
        <NavBar />
        <Main>
            <ContentBoxOne>
                <VideoBox>
                    <YouTube
                        videoId="ZSHkJ7HO4pI"
                        opts={opts}
                    />
                </VideoBox>
            </ContentBoxOne>
            <HomePage>
                <Logo src='/Logo-BR.svg' />
                <SearchBox>
                <SearchB
                    variant="filled"
                    sx={{ width: "80%", fontSize: "20px" }}
                    type="text"
                    label="Enter Name..."
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <SearchIcon sx={{ cursor: "pointer" }} />
                        </InputAdornment>
                    ),
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </SearchBox>
            <FarmerSection>
                {
                    filteredFarmers ? filteredFarmers.map((data, key) => (
                        <FarmerProfile key={key} onClick={() => {clickToFarmer(data)}}>
                            <ProfBox sx={{height: '130px', width: '130px'}}>
                                <Images src='/logo192.png'/>
                            </ProfBox>
                            <ProfileContent sx={{height: '130px', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                <MainContent sx={{height: '130px', width: '20vw'}}>
                                    <Box>Name: {hideWord(data.firstname) + ' ' + hideWord(data.lastname)}</Box>
                                    <Box>State: {capitalizeFirstLetter(data.state)}</Box>
                                    <Box>Village: {capitalizeFirstLetter(data.village)}</Box>
                                </MainContent>
                                <MainContent sx={{height: '130px', width: '20vw'}}>
                                    <Box>Total Land: {data.totalLandArea}</Box>
                                    <Box>Date of Birth: {data.dob}</Box>
                                </MainContent>
                            </ProfileContent>
                        </FarmerProfile>
                    )) : 'Loading...'
                }
            </FarmerSection>
        </HomePage>
        </Main>
    </Box>
  )
}

export default Home
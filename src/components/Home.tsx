import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export const BackgroundContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/mainbackground.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.7;
`;



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
`

export const HomePage = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 70vh;
    margin-top: 10vh
`;

const SearchBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    width: 80vw;
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
    width: 80vw;
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
    background-color: white;
    opacity: 0.5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75vw;
    height: 20vh;
    border: 1px solid black;
    margin-top: 3%;
    @media (max-width: 600px) {
        height: 10vh;
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
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center
    }
`

const ProfileContent = styled(Box)`
    @media (max-width: 600px) {
        width: 180px;
        height: 10vh;
        display: flex;
        justify-content: space-around;
        align-items: center
    }
`

export const MainContent = styled(Box)`
    @media (max-width: 600px) {
        width: 80px;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center
    }
`

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

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
    <Box sx={{overflowX: 'hidden'}}>
        <BackgroundContainer></BackgroundContainer>
        <Box sx={{position: 'fixed', width: '100vw',backgroundColor: scrolled ? 'white' : 'transparent', transition: 'background-color 0.5s ease-in-out', zIndex: '100'}}>
            <Box sx={{display: 'flex', fontWeight: '800',justifyContent: 'start', alignItems: 'center', marginTop: '4vh', marginLeft: '2vw', fontSize: '30px', height: '10vh'}}>
                <img src='/BharatRohan_Logo-03.png' style={{ width: '500px', height: '500px', overflowX: 'hidden' }}/>
                {/* <p><i>BharatRohan</i></p> */}
            </Box>
        </Box>
        <HomePage>
            <Logo src='/Logo-BR.svg' />
            <SearchBox>
                <SearchB 
                    variant="filled"
                    sx={{ width: '50%', fontSize: '20px' }} 
                    type='text' 
                    label="Enter Serial No..."
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon sx={{ cursor: 'pointer' }}/>
                        </InputAdornment>
                        ),
                    }}    
                />
            </SearchBox>
            <FarmerSection>
                <FarmerProfile>
                    <ProfBox sx={{height: '130px', width: '130px', border: '1px solid black'}}>
                        <Images src='/logo192.png'/>
                    </ProfBox>
                    <ProfileContent sx={{height: '130px', width: '50vw', border: '1px solid black', display: 'flex', justifyContent: 'space-around'}}>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 1
                        </MainContent>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 2
                        </MainContent>
                    </ProfileContent>
                </FarmerProfile>
                <FarmerProfile>
                    <ProfBox sx={{height: '130px', width: '130px', border: '1px solid black'}}>
                        <Images src='/logo192.png'/>
                    </ProfBox>
                    <ProfileContent sx={{height: '130px', width: '50vw', border: '1px solid black', display: 'flex', justifyContent: 'space-around'}}>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 1
                        </MainContent>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 2
                        </MainContent>
                    </ProfileContent>
                </FarmerProfile>
                <FarmerProfile>
                    <ProfBox sx={{height: '130px', width: '130px', border: '1px solid black'}}>
                        <Images src='/logo192.png'/>
                    </ProfBox>
                    <ProfileContent sx={{height: '130px', width: '50vw', border: '1px solid black', display: 'flex', justifyContent: 'space-around'}}>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 1
                        </MainContent>
                        <MainContent sx={{height: '130px', width: '20vw', border: '1px solid black'}}>
                            Box 2
                        </MainContent>
                    </ProfileContent>
                </FarmerProfile>
            </FarmerSection>
        </HomePage>
    </Box>
  )
}

export default Home
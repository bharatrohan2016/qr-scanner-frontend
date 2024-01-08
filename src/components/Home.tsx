import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const Logo = styled.img`
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

const HomePage = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 70vh;
`;

const SearchBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    border: 1px solid black;
    width: 80vw;
    margin-top: 3%
`

const SearchB = styled(TextField)`
    @media (max-width: 600px) {
        width: 80%
    }
`

const FarmerSection = styled(Box)`
    width: 80vw;
    min-height: 30vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    @media (max-width: 600px) {
        min-height: 12vh
    }
`

const FarmerProfile = styled(Box)`
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

const MainContent = styled(Box)`
    @media (max-width: 600px) {
        width: 80px;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center
    }
`

const Home = () => {
  return (
    <Box sx={{overflowX: 'hidden'}}>
        <Box sx={{display: 'flex', fontWeight: '800',justifyContent: 'start', alignItems: 'center', marginTop: '4vh', marginLeft: '2vw', fontSize: '30px', height: '10vh'}}>
            <img src='/logo192.png' style={{ width: '40px', height: '40px', overflowX: 'hidden' }}/>
            <p><i>BharatRohan</i></p>
        </Box>
        <HomePage>
            <Logo src='/logo192.png' />
            <SearchBox>
                <SearchB 
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
import styled from '@emotion/styled'
import { Backdrop, Box, CircularProgress, InputAdornment, TextField } from '@mui/material'
import YouTube from 'react-youtube'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { getFarmers } from '../service/api';

const Main = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`


const FarmerBox = styled(Box)`
    background-image: url('First.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const FarmerSection = styled(Box)`
    width: 80%;
    
    @media (max-width: 600px) {
        min-height: 15vh
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


const ProfBox = styled(Box)`
    @media (max-width: 600px) {
        width: 40px;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ProfileContent = styled(Box)`
    @media (max-width: 600px) {
        width: 180px;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

const MainBox = styled(Box)`
    background-image: url('videobox.jpg');
    background-size: cover;
    background-position: start;
    background-attachment: fixed;
    width: inherit;
`


const opts = {
    width: '100%',  // Set your desired width
    height: '250', // Set your desired height
    playerVars: {
      autoplay: 1,   // Autoplay the video
      controls: 0,   // Hide video controls
      mute: 1,       // Mute the video
    },
};

export const capitalizeFirstLetter = (str:any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hideWord = (str:any) => {
    return str.charAt(0).toUpperCase() + 'X'.repeat(str.length - 1);
}

interface Farmer {
    firstname: string;
    lastname: string;
    state: string;
    village: string;
    totalLandArea: number;
    dob: string
}

const Farmers = () => {
    const [response, setResponse] = useState<Farmer[] | undefined>();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
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

      if (typeof response === 'undefined') {
        return(
            <Box sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress color="inherit" />
            </Box>
        )
      }
  return (
    <Main>
        <FarmerBox>
            <FarmerSection>
                {
                    response ? response.map((data, key) => (
                        <FarmerProfile key={key} >
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
                    )) : 
                    <Box sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CircularProgress color="inherit" />
                    </Box>
                }
            </FarmerSection>
        </FarmerBox>
    </Main>
  )
}

export default Farmers
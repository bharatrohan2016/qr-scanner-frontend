import styled from '@emotion/styled'
import { Box, InputAdornment, TextField } from '@mui/material'
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

const VideoBox = styled(Box)`
    height: 50vh;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: end;
`;

const SearchBox = styled(Box)`
    height: 10vh;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
`;

const FarmerBox = styled(Box)`
    background-image: url('Section_1.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
`;

const White = styled(Box)`
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Green =styled(Box)`
    background-color: rgba(0, 255, 0, 0.3);
`

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
            <h1>Loading...</h1>
        )
      }
  return (
    <Main>
        <MainBox>
            <VideoBox>
                <YouTube
                    videoId="ZSHkJ7HO4pI"
                    opts={opts}
                />
            </VideoBox>
            <SearchBox>
                <SearchB
                    variant="filled"
                    sx={{ width: "50%", fontSize: "20px", opacity: 0.5, backgroundColor: 'white', borderRadius: '20px' }}
                    type="text"
                    label="Enter Patch No..."
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon sx={{ cursor: "pointer" }}/>
                        </InputAdornment>
                    ),
                    }}
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchBox>
        </MainBox>
        <FarmerBox>
            <Green>
                    <White>
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
                                )) : 'Loading...'
                            }
                        </FarmerSection>
                    </White>
            </Green>
        </FarmerBox>
    </Main>
  )
}

export default Farmers
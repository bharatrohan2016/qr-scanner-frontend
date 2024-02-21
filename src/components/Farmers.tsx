import styled from '@emotion/styled'
import { Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import YouTube from 'react-youtube'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { getFarmer } from '../service/api';
import { useParams } from 'react-router-dom';

const Main = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color : #ffb4021f;
`


const FarmerBox = styled(Box)`
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
    background-color: ghost-white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 135px;
    margin-top: 3%;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
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

export const capitalizeFirstLetter = (str:any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hideWord = (str:any) => {
    return str.charAt(0).toUpperCase() + 'X'.repeat(str.length - 1);
}

interface Farmer {
    farmername: string;
    fathername: string;
    state: string;
    village: string;
    unitarea: number;
    district: string
}

const Farmers = () => {
    const [response, setResponse] = useState<Farmer[] | undefined>();
    const [open, setOpen] = React.useState(false);
    const { params } = useParams()
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getFarmer(params);
            setResponse(result?.data);
            console.log(result);
            
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
    <Main >
        <FarmerBox>
            <FarmerSection >
            <div style={{display : 'flex', justifyContent : 'space-evenly', flexWrap : 'wrap'}}>
                {
                    response ? response.map((data, key) => 
                    
                    <Card className='farmers-card'>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/farmer-copy.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {data.farmername}
                            </Typography>
                           
                            <p>State: {data.state}</p>
                            <p>Village: {data.village}</p>
                            <p>Total Land: {data.unitarea} acres</p>
                            <p>District: {data.district}</p>
                           
                        </CardContent>
                        
                    </Card>
                    
                    ) : 
                    <Box sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CircularProgress color="inherit" />
                    </Box>
                }
                </div>
            </FarmerSection>
        </FarmerBox>
    </Main>
  )
}

export default Farmers;

{/* <FarmerProfile key={key} >
<ProfBox sx={{height: '130px', width: '130px'}}>
    <Images src='/farmer-copy.jpg'/>
</ProfBox>
<ProfileContent sx={{height: '130px', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
    <MainContent sx={{height: '130px', width: '20vw'}}>
        <Box>Name: {data.farmername}</Box>
        <Box>State: {data.state}</Box>
        <Box>Village: {data.village}</Box>
    </MainContent>
    <MainContent sx={{height: '130px', width: '20vw'}}>
       
        <Box>Total Land: {data.unitarea} km sq</Box>
        <Box>District: {data.district}</Box>
    </MainContent>
</ProfileContent>
</FarmerProfile> */}

{/* */}
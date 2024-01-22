import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HomePage, Logo, Navbar, capitalizeFirstLetter } from './Home'
import styled from '@emotion/styled'
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleFarmer } from '../service/api';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
import NavBar from './NavBar';
import { BackgroundContainer } from './Login';

const MainProfileContent = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 30vh;
  width: 80vw;
  background-color: white;
  opacity: 0.5;
  border-radius: 50px;
  @media (max-width: 600px) {
    min-height: 30vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
`;

export const MainContent = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    @media (max-width: 600px) {
        width: 250px;
        display: flex;
        justify-content: start;
        align-items: start;
        padding: 0;
        height: 20vh;
    }
`

const FarmerProfile = () => {
  const [farmerData, setFarmerData] = useState<Farmer | undefined>(undefined);
  const { paramsone } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const random = () => getSingleFarmer(paramsone).then(function(result) {
        console.log(result?.data);
        setFarmerData(result?.data);
    })

      random();
  }, [])

  if (typeof farmerData === 'undefined') {
    return(
        <h1>Loading...</h1>
    )
  }

  interface Farmer {
    firstname: string;
    lastname: string;
    state: string;
    village: string;
    totalLandArea: number;
    dob: string;
    gender: string;
    district: string;
    guardian: string;
    mobileNumber: string;
    mobileAccess: string;
    organization: string;
    ownedLandArea: string;

  }


  
  return (
    <Box sx={{overflowX: 'hidden'}}>
        <BackgroundContainer></BackgroundContainer>
        <NavBar />
        <HomePage>
          <Logo src='/logo192.png' />
          <MainProfileContent>
           <MainContent sx={{height: '200px', width: '20vw'}}>
              <Box>Name: {capitalizeFirstLetter(farmerData.firstname) + ' ' + capitalizeFirstLetter(farmerData.lastname)}</Box>
              <Box>Guardian: {capitalizeFirstLetter(farmerData.guardian)}</Box>
              <Box>Date of Birth: {farmerData.dob}</Box>
              <Box>Gender: {capitalizeFirstLetter(farmerData.gender)}</Box>
              <Box>Mobile Access: {capitalizeFirstLetter(farmerData.mobileAccess)}</Box>
              <Box>Mobile Number: {farmerData.mobileNumber}</Box>
            </MainContent>
            <MainContent sx={{height: '200px', width: '20vw'}}>
              <Box>State: {capitalizeFirstLetter(farmerData.state)}</Box>
              <Box>Village: {capitalizeFirstLetter(farmerData.village)}</Box>
              <Box>District: {capitalizeFirstLetter(farmerData.district)}</Box>
              <Box>Total Land Area: {farmerData.totalLandArea}</Box>
              <Box>Owned Land: {farmerData.ownedLandArea}</Box>
              <Box>Organization: {capitalizeFirstLetter(farmerData.organization)}</Box>
            </MainContent>
          </MainProfileContent>
        </HomePage>
    </Box>
  )
}

export default FarmerProfile
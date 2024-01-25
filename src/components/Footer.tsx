import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{height: '10vh', backgroundColor: '#F0FFF0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{opacity: 0.5}}>©2022 by BharatRohan Food Ingredients. Proudly made in India for the world</Typography>
    </Box>
  )
}

export default Footer
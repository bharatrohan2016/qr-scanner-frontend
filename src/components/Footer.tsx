import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mt : '2vh', mb : '2vh'}}>
        <Typography sx={{opacity: 0.5}}>©2022 by BharatRohan Food Ingredients. Proudly made in India for the world</Typography>
    </Box>
  )
}

export default Footer
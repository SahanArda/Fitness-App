import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'


const Home = () => {
  return (
    <box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </box>
  )
}

export default Home
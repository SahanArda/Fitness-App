import React, { useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exercisesOptions, fetchData } from '../utils/fetchData'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <Box id="exercises"
      sx={{mt: {lg: "110px"}}}
      mt="50px"
      p="20px"
    >

      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg: "110px", xs: "50px"}}}
      flexWrap="wrap"
      justifyContent="center">
        {exercises.map((exercise, index) => ( //error here
          <p>{exercise.name}</p>
        ))}

      </Stack>
      
    </Box>
  )
}

export default Exercises
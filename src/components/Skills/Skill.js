import { Box, Typography, Button, useMediaQuery, Grid } from '@mui/material'
import { skills, competencies } from 'Documentation/Skills/data'

const Text = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box
      sx={
        isSmall
          ? {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }
          : {}
      }
    >
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Technical Skills
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {skills.map((skill) => (
          <Grid item key={skill}>
            <Button variant='outlined'>{skill}</Button>
          </Grid>
        ))}
      </Grid>
      <br />
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Core Competencies
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {competencies.map((competency) => (
          <Grid item key={competency}>
            <Button variant='outlined'>{competency}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Text

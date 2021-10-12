import { Box, Typography, Button, useMediaQuery, Grid } from '@mui/material'

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
        <Grid item>
          <Button variant='outlined'>Python</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>R</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Tensorflow</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Apache Spark</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Java</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>ReactJS</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>HTML/CSS</Button>
        </Grid>
      </Grid>
      <br />
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Core Competencies
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item>
          <Button variant='outlined'>Image Processing</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Computer Vision</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Statistical Analysis</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Forecasting</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Text

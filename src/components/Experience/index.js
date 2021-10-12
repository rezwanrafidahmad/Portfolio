import { Box, Grid, useMediaQuery } from '@mui/material'
import Education from './Education'
import Work from './Work'

const Experience = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box pt={13}>
      <Grid
        container
        spacing={isSmall ? 3 : 8}
        justifyContent='space-between'
        direction='row'
      >
        <Grid item xs={12} sm={6}>
          <Work />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Education />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experience

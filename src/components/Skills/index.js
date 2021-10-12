import { Box, Grid } from '@mui/material'

import Skill from './Skill'
import Certifications from './Certification'

const Skills = () => {
  return (
    <Box pt={13}>
      <Grid
        container
        spacing={10}
        justifyContent='space-between'
        direction='row'
      >
        <Grid item xs={12} sm={6}>
          <Skill />
        </Grid>
        <Grid sx={{ px: { md: 3 }, mb: { xs: 5 } }} item xs={12} sm={6}>
          <Certifications />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills

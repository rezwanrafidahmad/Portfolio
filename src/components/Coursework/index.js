import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import CAMP from './CAPM'
import data from 'Documentation/Coursework/data'

const Coursework = ({ setNav }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box pt={13}>
      <Typography
        align='center'
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Relevant Coursework
      </Typography>
      <Grid container spacing={isSmall ? 3 : 8} alignItems='stretch'>
        {data.map((items) => (
          <Grid key={items.id} item xs={12} sm={6}>
            <CAMP items={items} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Coursework

import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import CAMP from './CAPM'
import data from 'Documentation/Publications/data'

const Publications = ({ setNav }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box pt={13}>
      <Typography
        align='center'
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: 'GrayText',
          mt: 4,
        }}
      >
        Publications
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        spacing={isSmall ? 3 : 8}
        alignItems='stretch'
      >
        {data.map((items) => (
          <Grid key={items.id} item xs={12} sm={6}>
            <CAMP items={items} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Publications

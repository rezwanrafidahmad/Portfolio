import { Box, Container, Grid, Typography } from '@mui/material'
import Form from './Form'
import Map from './Map'
import overlay from 'img/overlay.png'
import Footer from '../Footer.js'

const Email = ({ setNav }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${overlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: 15,
      }}
    >
      <Typography
        align='center'
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', my: 1 }}
      >
        Contact
      </Typography>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Form />
          </Grid>
          <Grid sx={{ mt: 3 }} item xs={12} sm={6}>
            <Map />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </Box>
  )
}

export default Email

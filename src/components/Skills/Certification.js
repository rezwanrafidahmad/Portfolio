import { Box, Typography, useMediaQuery, Grid } from '@mui/material'
import data from 'Documentation/Certifications/data'

const Certifications = () => {
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
        align='center'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Certifications
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        spacing={2}
        sx={{ mt: 3 }}
      >
        {data.map((item) => (
          <Grid item xs={6}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='flex-start'
              alignItems='center'
            >
              <img src={item.img} alt='pcap' height='120' />
              <Typography
                align='center'
                variant='subtitle1'
                sx={{ fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>

              <Typography align='center' variant='subtitle1'>
                Date: {item.date}
              </Typography>

              <Typography
                display='block'
                component='a'
                href={item.link}
                target='_blank'
                rel='noreferrer'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              > 
                View
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Certifications

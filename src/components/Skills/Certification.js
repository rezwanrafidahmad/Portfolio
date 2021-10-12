import { Box, Typography, useMediaQuery, Grid } from '@mui/material'

import pcap from 'img/pcap.png'
import csm from 'img/csm.png'
import tensor from 'img/tensor.png'

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
        <Grid item xs={6}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='center'
          >
            <img src={pcap} alt='pcap' height='120' />
            <Typography
              align='center'
              variant='subtitle1'
              sx={{ fontWeight: 'bold' }}
            >
              PCAP - Certified Associate in Python Programming
            </Typography>

            <Typography
              display='block'
              component='a'
              href='https://mui.com'
              target='_blank'
              rel='noreferrer'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              https://mui.com
            </Typography>

            <Typography align='center' variant='subtitle1'>
              Date: Sep 2021
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <img src={csm} alt='csm' height='120' />
            <Typography
              align='center'
              variant='subtitle1'
              sx={{ fontWeight: 'bold' }}
            >
              CSM - Certified Scrum Master
            </Typography>

            <Typography
              display='block'
              component='a'
              href='https://mui.com'
              target='_blank'
              rel='noreferrer'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              https://mui.com
            </Typography>

            <Typography align='center' variant='subtitle1'>
              Date: Sep 2021
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <img src={tensor} alt='tensor' height='120' />
            <Typography
              align='center'
              variant='subtitle1'
              sx={{ fontWeight: 'bold' }}
            >
              Tensorflow Developer
            </Typography>

            <Typography
              display='block'
              component='a'
              href='https://mui.com'
              target='_blank'
              rel='noreferrer'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              https://mui.com
            </Typography>

            <Typography align='center' variant='subtitle1'>
              Date: Sep 2021
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Certifications

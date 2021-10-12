import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Color from 'color'

const CAMP = ({ items }) => {
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
          : {
              height: '95%',
            }
      }
    >
      <Paper
        sx={{
          height: '100%',
          mt: 5,
          p: 2,
          transition: '0.2s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 6px 12px 0 ${Color('grey')
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <Box>
          <Box sx={{ textAlign: 'center', my: 2 }}>
            <img src={items.img} alt='csm' height='120' />
          </Box>
          <Typography
            variant='h6'
            sx={{
              height: '3rem',
              lineHeight: '1.5rem',
            }}
          >
            {items.title}
          </Typography>
          <Typography
            component='span'
            variant='subtitle2'
            sx={{ color: 'primary.main' }}
          >
            Jan 2021 - Apr 2021
          </Typography>
          <Typography variant='subtitle1' sx={{ color: 'GrayText', my: 2 }}>
            <Typography
              component='span'
              variant='subtitle1'
              sx={{ fontWeight: 'bold' }}
            >
              Institute:{' '}
            </Typography>
            <Typography
              component='span'
              variant='subtitle1'
              sx={{ color: 'primary.main' }}
            >
              {items.institute}
            </Typography>
            <br />
            {items.description}
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {items.skills.map((skill) => (
              <Grid item>
                <Button size='small' variant='outlined'>
                  {skill}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Button
            component='a'
            href={items.link}
            target='_blank'
            variant='text'
            sx={{
              color: 'primary.main',
              mt: 3,
              textTransform: 'none',
              fontSize: 18,
            }}
          >
            Click to view
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default CAMP

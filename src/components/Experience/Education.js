import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import Color from 'color'

const Education = () => {
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
        Education
      </Typography>

      <Paper
        sx={{
          mt: 5,
          p: 2,
          transition: '0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 6px 12px 0 ${Color('grey')
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <Typography variant='h6'>
          Bachelor of Science on Computer Science{' '}
          <Typography
            component='span'
            variant='h6'
            sx={{ color: 'primary.main' }}
          >
            BRAC University
          </Typography>
        </Typography>
        <Typography
          component='span'
          variant='subtitle2'
          sx={{ color: 'primary.main' }}
        >
          May 2016 - Oct 2020
        </Typography>
        <Typography variant='subtitle1' sx={{ color: 'GrayText', my: 2 }}>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Thesis: <br />
          </Typography>
          Prediction of Epileptic Seizures using Support Vector Machine and
          Regularization
        </Typography>
        <Typography variant='subtitle1' sx={{ color: 'GrayText', mt: 2 }}>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Publisher:{' '}
          </Typography>
          IEEE
        </Typography>
        <Typography variant='subtitle1' sx={{ color: 'GrayText' }}>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Published:{' '}
          </Typography>
          2020 IEEE Region 10 Symposium (TENSYMP)
        </Typography>
      </Paper>

      <Paper
        sx={{
          mt: 5,
          p: 2,
          width: '100%',
          transition: '0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 6px 12px 0 ${Color('grey')
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <Typography variant='h6'>
          International A Levels{' '}
          <Typography
            component='span'
            variant='h6'
            sx={{ color: 'primary.main' }}
          >
            Academia
          </Typography>
        </Typography>
        <Typography
          component='span'
          variant='subtitle2'
          sx={{ color: 'primary.main' }}
        >
          Jan 2014 - Jan 2016
        </Typography>
      </Paper>
      <Paper
        sx={{
          mt: 5,
          p: 2,
          width: '100%',
          transition: '0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 6px 12px 0 ${Color('grey')
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <Typography variant='h6'>
          International GCSE{' '}
          <Typography
            component='span'
            variant='h6'
            sx={{ color: 'primary.main' }}
          >
            Jan 2013 - Jan 2014
          </Typography>
        </Typography>
        <Typography
          component='span'
          variant='subtitle2'
          sx={{ color: 'primary.main' }}
        >
          Jan 2014 - Jan 2016
        </Typography>
      </Paper>
    </Box>
  )
}

export default Education

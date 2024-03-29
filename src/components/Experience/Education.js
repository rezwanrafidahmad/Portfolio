import { Box, Paper, Typography, useMediaQuery, Grid, Button } from '@mui/material'
import Color from 'color'
import data from 'Documentation/Experience/Education/data'
import { msc_modules } from 'Documentation/Experience/Education/module_info'

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
      {data.map((e) => (
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
            {e.degree}{' '}
          </Typography>
          <Typography
            href={e.link}
            target='_blank'
            component='a'
            variant='h6'
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
              {e.university}
            </Typography>
            <br />
          <Typography
            component='span'
            variant='subtitle2'
            sx={{ color: 'primary.main' }}
          >
            {e.date}
          </Typography>

          {
                e.modules ? <Typography variant='subtitle1' sx={{ color: 'GrayText', mt: 2 }}>
                <Typography
                  component='span'
                  variant='subtitle1'
                  sx={{ fontWeight: 'bold' }}
                >
                  Modules
                </Typography>
                  <Grid container spacing={1} sx={{ mt: 3 }}>
                  {msc_modules.map((module) => (
                    <Grid item key={module}>
                      <Button variant='outlined'>{module}</Button>
                    </Grid>
                  ))}
                </Grid>
              </Typography> : <></>
          }

          {e.thesis && (
            <>
              <Typography variant='subtitle1' sx={{ color: 'GrayText', my: 2 }}>
                <Typography
                  component='span'
                  variant='subtitle1'
                  sx={{ fontWeight: 'bold' }}
                >
                  Thesis: <br />
                </Typography>
                {e.thesis}
              </Typography>
              {
                e.publisher ? <Typography variant='subtitle1' sx={{ color: 'GrayText', mt: 2 }}>
                <Typography
                  component='span'
                  variant='subtitle1'
                  sx={{ fontWeight: 'bold' }}
                >
                  Publisher:{' '}
                </Typography>
                {e.publisher}
              </Typography> : <></>
              }
              {
                e.published ? <Typography variant='subtitle1' sx={{ color: 'GrayText', mt: 2 }}>
                <Typography
                  component='span'
                  variant='subtitle1'
                  sx={{ fontWeight: 'bold' }}
                >
                  Published:{' '}
                </Typography>
                {e.published}
              </Typography> : <></>
              }
            </>
          )}
        </Paper>
      ))}
    </Box>
  )
}

export default Education
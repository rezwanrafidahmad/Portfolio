import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import Color from 'color'
import data from 'Documentation/Experience/Work/data'

const Work = () => {
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
              textAlign: 'justify',
            }
          : {}
      }
    >
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        Work Experience
      </Typography>

      {data.map((job) => (
        <Paper
          key={job.id}
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
            {job.title}{' '}
            <Typography
              href={job.companyLink}
              target='_blank'
              component='a'
              variant='h6'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              {job.company}
            </Typography>
          </Typography>
          {job.projects.map((res) => (
            <>
              <Typography variant='body1' sx={{ fontWeight: 'bold', mt: 2 }}>
                {res.name}
              </Typography>
              <Typography
                component='span'
                variant='subtitle2'
                sx={{ color: 'primary.main' }}
              >
                {res.date}
              </Typography>
              <Typography variant='subtitle2' sx={{ color: 'GrayText', my: 2 }}>
                Responsibilities :
              </Typography>
              {res.responsibles.map((task) => (
                <li>
                  {/* <Typography
                    component='span'
                    variant='subtitle1'
                    sx={{ fontWeight: 'bold' }}
                  >
                    {task.title}:{' '}
                  </Typography> */}
                  <Typography
                    component='span'
                    variant='subtitle2'
                    // sx={{ textAlign: 'justify' }}
                  >
                    {task.desc}
                  </Typography>
                </li>
              ))}
            </>
          ))}
        </Paper>
      ))}
    </Box>
  )
}

export default Work

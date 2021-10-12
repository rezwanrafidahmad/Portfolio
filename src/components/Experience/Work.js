import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import Color from 'color'

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
          Software Engineer{' '}
          <Typography
            component='span'
            variant='h6'
            sx={{ color: 'primary.main' }}
          >
            ServicEngine BPO
          </Typography>
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 'bold', mt: 2 }}>
          Project A:
        </Typography>
        <Typography
          component='span'
          variant='subtitle2'
          sx={{ color: 'primary.main' }}
        >
          2020 Mar - Present
        </Typography>
        <Typography variant='subtitle2' sx={{ color: 'GrayText', my: 2 }}>
          Responsibility :
        </Typography>

        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Web Scraping:{' '}
          </Typography>
          <Typography
            component='span'
            variant='subtitle2'
            sx={{ textAlign: 'justify' }}
          >
            Scraping data from websites using Groovy, Python and Selenium.
          </Typography>
        </li>
        <li sx={{ textAlign: 'justify' }}>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Data Processing & Transformation:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Processing and Transforming unstructured data (pdf, images etc.) to
            structured data using OCR and Image Processing Tools.
          </Typography>
        </li>
        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Text & Data Analytics:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Validate and cross-check text data by implementing Machine Learning
            models using Python.
          </Typography>
        </li>
        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Automation & Pipeline Architecture:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Designing and implementing effective and cost-efficient data
            processing pipelines - scrape, analyze and generate.
          </Typography>
        </li>
        <Typography variant='body1' sx={{ fontWeight: 'bold', mt: 2 }}>
          Project B:
        </Typography>
        <Typography
          component='span'
          variant='subtitle2'
          sx={{ color: 'primary.main' }}
        >
          2020 Mar - Present
        </Typography>
        <Typography variant='subtitle2' sx={{ color: 'GrayText', my: 2 }}>
          Responsibility :
        </Typography>

        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Web Scraping:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Scraping data from websites using Groovy, Python and Selenium.
          </Typography>
        </li>
        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Data Processing & Transformation:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Processing and Transforming unstructured data (pdf, images etc.) to
            structured data using OCR and Image Processing Tools.
          </Typography>
        </li>
        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Text & Data Analytics:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Validate and cross-check text data by implementing Machine Learning
            models using Python.
          </Typography>
        </li>
        <li>
          <Typography
            component='span'
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
          >
            Automation & Pipeline Architecture:{' '}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            Designing and implementing effective and cost-efficient data
            processing pipelines - scrape, analyze and generate.
          </Typography>
        </li>
      </Paper>
    </Box>
  )
}

export default Work

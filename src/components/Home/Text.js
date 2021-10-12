import { useState } from 'react'
import { Box, Typography, Button, Stack, useMediaQuery } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import RoomIcon from '@mui/icons-material/Room'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKaggle } from '@fortawesome/free-brands-svg-icons/faKaggle'
import Animate from 'Animate'

const Text = () => {
  const [info, setInfo] = useState('')
  const [link, setLink] = useState('')
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
      <Animate>
        <Button
          variant='contained'
          disableElevation
          sx={{
            textTransform: 'none',
            borderRadius: '30px 30px 30px 0',
            color: 'white',
            px: 5,
            fontSize: isSmall ? 15 : 20,
          }}
        >
          Hey! I'm
        </Button>
      </Animate>
      <Animate delay={100}>
        <Typography
          variant={isSmall ? 'h3' : 'h2'}
          sx={{ fontWeight: 'bold', color: 'GrayText', mt: 2 }}
        >
          Shaikh Rezwan
          <br />
          Rafid Ahmad
        </Typography>
      </Animate>
      <Animate delay={200}>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', color: 'GrayText', mt: 2 }}
        >
          Data Analyst | Web Developer
        </Typography>{' '}
      </Animate>
      <Animate delay={300}>
        <Button
          sx={{ mt: 2, textTransform: 'none' }}
          onMouseEnter={() => setInfo('Email')}
          onMouseLeave={() => setInfo('')}
          color={info === 'Email' ? 'primary' : 'inherit'}
          href='mailto:rafid179@gmail.com'
          startIcon={<EmailIcon />}
        >
          rafid179@gmail.com
        </Button>{' '}
        <br />
        <Button
          onMouseEnter={() => setInfo('Number')}
          onMouseLeave={() => setInfo('')}
          color={info === 'Number' ? 'primary' : 'inherit'}
          href='tel:+8801558297216'
          startIcon={<CallIcon />}
        >
          +88 01558297216
        </Button>
        <br />
        <Button
          onMouseEnter={() => setInfo('Location')}
          onMouseLeave={() => setInfo('')}
          color={info === 'Location' ? 'primary' : 'inherit'}
          sx={{ textTransform: 'none' }}
          startIcon={<RoomIcon />}
        >
          Dhaka, Bangladesh
        </Button>
        <Stack direction='row' sx={{ mt: 3 }} spacing={2}>
          <Button
            size='small'
            href='https://www.google.com/'
            target='_blank'
            onMouseEnter={() => setLink('LinkedIn')}
            onMouseLeave={() => setLink('')}
            variant={link === 'LinkedIn' ? 'contained' : 'text'}
          >
            <LinkedInIcon />
          </Button>
          <Button
            size='small'
            href='https://www.google.com/'
            target='_blank'
            onMouseEnter={() => setLink('Github')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Github' ? 'contained' : 'text'}
          >
            <GitHubIcon />
          </Button>
          <Button
            size='small'
            href='https://www.google.com/'
            target='_blank'
            onMouseEnter={() => setLink('Kaggle')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Kaggle' ? 'contained' : 'text'}
          >
            <FontAwesomeIcon icon={faKaggle} />
          </Button>
          <Button
            size='small'
            href='https://www.google.com/'
            target='_blank'
            onMouseEnter={() => setLink('Youtube')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Youtube' ? 'contained' : 'text'}
          >
            <YouTubeIcon />
          </Button>
        </Stack>
      </Animate>
    </Box>
  )
}

export default Text

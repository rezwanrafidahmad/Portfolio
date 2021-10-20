import { Container, Box, Typography, Button, Stack } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKaggle } from '@fortawesome/free-brands-svg-icons/faKaggle'
import { useState } from 'react'

const Footer = () => {
  const [link, setLink] = useState('')
  return (
    <Container>
      <Box
        pt={4}
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{ flexWrap: 'wrap', mb: 2 }}
      >
        <Typography align='center' color='GrayText' variant='subtitle2'>
          All right reserved Shaikh Rezwan Rafid Ahmad @2021
        </Typography>

        <Stack
          direction='row'
          spacing={2}
          sx={{
            mt: {
              xs: 2,
            },
          }}
        >
          <Button
            size='small'
            href='https://www.linkedin.com/in/shaikh-rezwan-rafid-ahmad-csm%C2%AE-56a9a9145/'
            target='_blank'
            onMouseEnter={() => setLink('LinkedIn')}
            onMouseLeave={() => setLink('')}
            variant={link === 'LinkedIn' ? 'contained' : 'text'}
          >
            <LinkedInIcon />
          </Button>
          <Button
            size='small'
            href='https://github.com/rezwanrafidahmad'
            target='_blank'
            onMouseEnter={() => setLink('Github')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Github' ? 'contained' : 'text'}
          >
            <GitHubIcon />
          </Button>
          <Button
            size='small'
            href='https://www.kaggle.com/rezwanrafid'
            target='_blank'
            onMouseEnter={() => setLink('Kaggle')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Kaggle' ? 'contained' : 'text'}
          >
            <FontAwesomeIcon icon={faKaggle} />
          </Button>
          <Button
            size='small'
            href='https://www.youtube.com/channel/UCmks7bY5knEh949pitbOTqw'
            target='_blank'
            onMouseEnter={() => setLink('Youtube')}
            onMouseLeave={() => setLink('')}
            variant={link === 'Youtube' ? 'contained' : 'text'}
          >
            <YouTubeIcon />
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default Footer

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Button, Stack } from '@mui/material'
import { boxActive, boxInActive } from './styles'
import Hidden from '@mui/material/Hidden'
import Drawer from './Drawer'
import PropTypes from 'prop-types'

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}
export default function Navbar(props) {
  const { nav, setNav } = props

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color='inherit'>
          <Toolbar>
            <Hidden smUp>
              <Drawer />
            </Hidden>
            <Hidden smDown>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                spacing={2}
                sx={{ m: 'auto' }}
              >
                <Button
                  sx={nav === 'Home' ? boxActive : boxInActive}
                  href='#'
                  color={nav === 'Home' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Home')}
                >
                  Home
                </Button>
                <Button
                  href='#about'
                  sx={nav === 'About' ? boxActive : boxInActive}
                  color={nav === 'About' ? 'primary' : 'inherit'}
                  onClick={() => setNav('About')}
                >
                  About Me
                </Button>
                <Button
                  href='#skills'
                  sx={nav === 'Skills' ? boxActive : boxInActive}
                  color={nav === 'Skills' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Skills')}
                >
                  Technical Skills | Certifications
                </Button>
                <Button
                  href='#experience'
                  sx={nav === 'Experience' ? boxActive : boxInActive}
                  color={nav === 'Experience' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Experience')}
                >
                  Work Experience | Education
                </Button>
                <Button
                  href='#achievements'
                  sx={nav === 'Achievements' ? boxActive : boxInActive}
                  color={nav === 'Achievements' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Achievements')}
                >
                  Achievements
                </Button>
                <Button
                  href='#training'
                  sx={nav === 'Training' ? boxActive : boxInActive}
                  color={nav === 'Training' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Training')}
                >
                  Training
                </Button>
                <Button
                  href='#coursework'
                  sx={nav === 'Coursework' ? boxActive : boxInActive}
                  color={nav === 'Coursework' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Coursework')}
                >
                  Relevant Coursework
                </Button>
                <Button
                  sx={nav === 'Publications' ? boxActive : boxInActive}
                  href='#publications'
                  color={nav === 'Publications' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Publications')}
                >
                  Publications
                </Button>
                <Button
                  sx={nav === 'Portfolio' ? boxActive : boxInActive}
                  href='#portfolio'
                  color={nav === 'Portfolio' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Portfolio')}
                >
                  Recent Portfolio
                </Button>
                <Button
                  sx={nav === 'Contact' ? boxActive : boxInActive}
                  href='#contact'
                  color={nav === 'Contact' ? 'primary' : 'inherit'}
                  onClick={() => setNav('Contact')}
                >
                  Contact
                </Button>
              </Stack>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}

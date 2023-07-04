import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Stack } from '@mui/material'

import Hidden from '@mui/material/Hidden'
import Drawer from './Drawer'
import PropTypes from 'prop-types'
import MyNavLink from './MyNavLink'
import { Link } from 'react-scroll'

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
  window: PropTypes.func,
}
export default function Navbar(props) {
  const { nav } = props

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
                <Link
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={nav === 'Home' ? 'active' : 'inactive'}
                >
                  Home
                </Link>
                <MyNavLink to='about' name='About Me' />
                <MyNavLink
                  to='skills'
                  name='Technical Skills | Certifications'
                />
                <MyNavLink to='experience' name='Work Experience | Education' />
                <MyNavLink to='training' name='Training' />
                <MyNavLink to='coursework' name='Relevant Coursework' />
                <MyNavLink to='publications' name='Publications' />
                <MyNavLink to='portfolio' name='Recent Portfolio' />
                <MyNavLink to='contact' name='Contact' />
              </Stack>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}

import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import List from '@mui/material/List'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useState } from 'react'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
const data = [
  'About',
  'Skills',
  'Experience',
  'Achievements',
  'Training',
  'Coursework',
  'Publications',
  'Portfolio',
  'Contact',
]

export default function Drawer() {
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component='a' href='#'>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        {data.map((item) => (
          <ListItem
            button
            key={item}
            component='a'
            href={`#${item.toLowerCase()}`}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <IconButton
        size='small'
        color='inherit'
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </>
  )
}

import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Cards from './Cards/Cards'
import { useMediaQuery } from '@mui/material'
import CardsFilter from './CardsFilter/Cards'
import categories from 'Documentation/Portfilo/categories'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component='div' sx={{ p: 3 }}>
          <Typography component='div'>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Portfolio({ setNav }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%' }} pt={13}>
      <Typography
        align='center'
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: 'GrayText',
          my: 4,
        }}
      >
        Recent Portfolio
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          component='div'
          value={value}
          onChange={handleChange}
          variant={isSmall ? 'scrollable' : 'fullWidth'}
        >
          <Tab component='div' label='All' {...a11yProps(0)} />
          {categories.map((item, i) => (
            <Tab component='div' label={item} {...a11yProps(i + 1)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel component='div' value={value} index={0}>
        <Cards />
      </TabPanel>
      {categories.map((item, i) => (
        <TabPanel component='div' value={value} index={i + 1}>
          <CardsFilter category={item} />
        </TabPanel>
      ))}
    </Box>
  )
}

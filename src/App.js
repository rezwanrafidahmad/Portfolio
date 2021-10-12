import { createTheme, ThemeProvider } from '@mui/material/styles'
import { amber } from '@mui/material/colors'
import { CssBaseline } from '@mui/material'

import Navbar from 'components/Navbar/index2'
import { useState } from 'react'

import HomePage2 from 'pages/HomePage2'
// import HomePage from 'pages/HomePage'

const App = ({ darkmode = false }) => {
  const theme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
      primary: {
        main: '#58ACB0',
      },
      secondary: amber,
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })

  const [nav, setNav] = useState('Home')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar nav={nav} setNav={setNav} />
      {/* <HomePage setNav={setNav} /> */}
      <HomePage2 setNav={setNav} />
    </ThemeProvider>
  )
}

export default App

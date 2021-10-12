import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Text from './Text'
import img from 'img/aboutImg.jpg'

const About = ({ setNav }) => {
  const { ref, inView } = useInView({
    threshold: [0.1, 0.5, 0.8],
  })

  useEffect(() => {
    if (inView) {
      // setNav('About')
    }
  }, [inView])
  return (
    <Box pt={13} ref={ref}>
      <Grid
        container
        spacing={3}
        justifyContent='space-between'
        direction='row'
      >
        <Grid sx={{ px: { md: 3 }, mb: { xs: 5 } }} item xs={12} sm={6}>
          <img src={img} width='100%' alt='img' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Text />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About

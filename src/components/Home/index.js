import { Box, Grid, Skeleton, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Text from './Text'
import img from 'img/heroImg.png'
import Animate from 'Animate'
import Image from 'material-ui-image'

const Home = ({ setNav }) => {
  const { ref, inView } = useInView({
    threshold: [0.1, 0.5, 0.9],
  })

  useEffect(() => {
    if (inView) {
      setNav('Home')
    } else {
      setNav('')
    }
  }, [inView, setNav])
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box pt={isSmall ? 2 : 15} pb={8} ref={ref}>
      <Grid
        container
        spacing={3}
        justifyContent='space-between'
        sx={{
          flexWrap: 'wrap-reverse',
        }}
        direction='row'
      >
        <Grid item xs={12} sm={6}>
          <Text />
        </Grid>
        <Grid sx={{ px: { md: 3 }, mb: { xs: 5 } }} item xs={12} sm={6}>
          <Animate anim='fade-left' delay={400}>
            <Image
              src={img}
              width='100%'
              alt='img'
              loading={
                <Skeleton
                  variant='circular'
                  width='100%'
                  sx={{ paddingBottom: '100%' }}
                />
              }
            />

            {/* <img src={img} width='100%' alt='img' /> */}
          </Animate>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home

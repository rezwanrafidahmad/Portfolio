import { Box } from '@mui/system'
import { Container, Grid } from '@mui/material'
import { data } from './data'
import SingleCard from './SingleCard'

const Cards = () => {
  return (
    <Container maxWidth='xl'>
      <Box py={5}>
        <Grid container spacing={5} alignItems='stretch'>
          {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <SingleCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Cards

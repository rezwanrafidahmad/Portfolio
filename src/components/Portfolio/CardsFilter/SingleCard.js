import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
} from '@mui/material'
import { Box } from '@mui/system'
import Color from 'color'
import { useState } from 'react'
import Modal from './Modal'

// import Modal from './Modal'

export default function SingleCard({ item }) {
  const { name, img0, skills } = item

  const [open, setOpen] = useState(false)

  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: `0 6px 12px 0 ${Color('grey')
            .rotate(-12)
            .darken(0.2)
            .fade(0.5)}`,
        },
      }}
      align='left'
    >
      <CardActionArea component='div' onClick={() => setOpen(true)}>
        <CardMedia
          sx={{ paddingTop: '56.25%', width: '100%', objectFit: 'cover' }}
          image={img0}
          title='Cadr img'
        />
        <CardContent sx={{ minHeight: 150 }}>
          <Box display='flex' justifyContent='space-between'>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {skills.map((item) => (
              <Grid component='div' item>
                <Button size='small' variant='outlined'>
                  {item}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Modal />
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ maxHeight: 0 }}>
        <Modal item={item} open={open} setOpen={setOpen} />
      </CardActions>
    </Card>
  )
}

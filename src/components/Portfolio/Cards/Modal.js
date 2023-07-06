import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Grid, Typography } from '@mui/material'

export default function Modal({ item, open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }

  if (!item) return ''

  const { name, img1, img2, img3, imgSub1, imgSub2, imgSub3, desc, skills, githublink, website_link, youtubelink } = item

  return (
    <div>
      <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container spacing={5} sx={{ p: 2 }}>
            <Grid item xs={12} sm={5}>
              <DialogContentText id='alert-dialog-description'>
                <Typography sx={{ my: 2, textAlign: 'left'}} variant='h3'>
                  {name}
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                  {desc}
                </Typography>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {skills.map((item) => (
                    <Grid item>
                      <Button size='small' variant='outlined'>
                        {item}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant='contained'
                  disableElevation
                  target='_blank'
                  sx={{
                    textTransform: 'none',
                    borderRadius: 30,
                    color: 'white',
                    my: 4,
                    px: 3,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                  href={githublink}
                >
                  Github
                </Button>

                { website_link ?                  
                <Button
                  variant='contained'
                  disableElevation
                  target='_blank'
                  sx={{
                    textTransform: 'none',
                    borderRadius: 30,
                    color: 'white',
                    my: 4,
                    px: 3,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                  href={website_link}
                >
                  View Website
                </Button> : <></>}

                { youtubelink ?                  
                <Button
                  variant='contained'
                  disableElevation
                  target='_blank'
                  sx={{
                    textTransform: 'none',
                    borderRadius: 30,
                    color: 'white',
                    my: 4,
                    px: 3,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                  href={youtubelink}
                >
                  View in Youtube
                </Button> : <></>}

              </DialogContentText>
            </Grid>
            <Grid item xs={12} sm={7}>
              <img
                src={img1}
                alt='img'
                width='100%'
                style={{ borderRadius: 10 }}
              />
              <Typography color='GrayText' sx={{ my: 2 }}>
                {imgSub1}
              </Typography>
              <img
                src={img2}
                alt='img'
                width='100%'
                style={{ borderRadius: 10 }}
              />
              <Typography color='GrayText' sx={{ my: 2 }}>
                {imgSub2}
              </Typography>
              <img
                src={img3}
                alt='img'
                width='100%'
                style={{ borderRadius: 10 }}
              />
              <Typography color='GrayText' sx={{ my: 2 }}>
                {imgSub3}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
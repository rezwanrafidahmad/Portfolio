import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import data from 'Documentation/About/data'

const Text = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box
      sx={
        isSmall
          ? {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }
          : {}
      }
    >
      <Typography
        variant='h3'
        sx={{ fontWeight: 'bold', color: 'GrayText', mt: 4 }}
      >
        About Me
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: 'GrayText', mt: 2, textAlign: 'justify' }}
      >
        {data.description}
      </Typography>
      <Button
        variant='contained'
        disableElevation
        sx={{
          textTransform: 'none',
          borderRadius: 30,
          color: 'white',
          my: 4,
          px: 3,
          fontSize: 15,
          fontWeight: 'bold',
        }}
        href={data.pdf}
        download='Resume - Shaikh Rezwan Rafid Ahmad'
        endIcon={<DownloadIcon />}
      >
        Download CV
      </Button>
    </Box>
  )
}

export default Text

import { Container, Box, Grid, TextField, Button } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react'

const Form = () => {
  const [state, handleSubmit] = useForm('xgerqqnj')
  if (state.succeeded) {
    return <p>We will get back to you soon!</p>
  }
  return (
    <Container>
      <Box my={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                id='first_name'
                type='first_name'
                name='first_name'
                fullWidth
                label='First Name'
                variant='outlined'
              />
              <ValidationError
                prefix='first_name'
                field='first_name'
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id='last_name'
                type='last_name'
                name='last_name'
                fullWidth
                label='Last Name'
                variant='outlined'
              />
              <ValidationError
                prefix='last_name'
                field='last_name'
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='email'
                type='email'
                name='email'
                fullWidth
                label='Your Email'
                variant='outlined'
              />
              <ValidationError
                prefix='email'
                field='email'
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='message'
                name='message'
                fullWidth
                label='Your Message'
                variant='outlined'
                multiline
                rows={6}
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                disabled={state.submitting}
                fullWidth
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
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default Form

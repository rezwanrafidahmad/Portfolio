import { Container } from '@mui/material'
import About from 'components/About'
// import Coursework from 'components/Coursework'
import Email from 'components/Email'
import Experience from 'components/Experience'
import Home from 'components/Home'
import Portfolio from 'components/Portfolio'
import Publications from 'components/Publications'
import Skills from 'components/Skills'
// import Training from 'components/Training'

const HomePage2 = ({ setNav }) => {
  return (
    <Container className='container'>
      <section id='home'>
        <Home setNav={setNav} />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      {/* <section id='training'>
        <Training />
      </section>
      <section id='coursework'>
        <Coursework />
      </section> */}
      <section id='publications'>
        <Publications />
      </section>
      <section id='contact'>
        <Email />
      </section>
    </Container>
  )
}

export default HomePage2

import { Container } from '@mui/material'
import Animate from 'Animate'
import About from 'components/About'
// import Achievements from 'components/Achievements'
import Coursework from 'components/Coursework'
import Email from 'components/Email'
import Experience from 'components/Experience'
import Home from 'components/Home'
import Portfolio from 'components/Portfolio'
import Publications from 'components/Publications'
import Skills from 'components/Skills'
import Training from 'components/Training'

const HomePage = ({ setNav }) => {
  return (
    <>
      <Container>
        <Home setNav={setNav} />
        <Animate>
          <About setNav={setNav} />
        </Animate>
        <Animate>
          <Skills setNav={setNav} />
        </Animate>
        <Animate>
          <Experience setNav={setNav} />
        </Animate>
        {/* <Animate>
          <Achievements setNav={setNav} />
        </Animate> */}
        <Animate>
          <Training setNav={setNav} />
        </Animate>
        <Animate>
          <Coursework setNav={setNav} />
        </Animate>
        <Animate>
          <Publications setNav={setNav} />
        </Animate>
        <Animate>
          <Portfolio setNav={setNav} />
        </Animate>
      </Container>

      <Email setNav={setNav} />
    </>
  )
}

export default HomePage

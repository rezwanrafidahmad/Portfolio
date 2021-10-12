import { Link } from 'react-scroll'

function MyNavLink({ name, to }) {
  return (
    <Link
      activeClass='active'
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='inactive'
    >
      {name}
    </Link>
  )
}

export default MyNavLink

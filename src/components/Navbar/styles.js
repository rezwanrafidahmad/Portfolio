const boxActive = {
  position: 'relative',
  textTransform: 'none',

  ':after': {
    position: 'absolute',
    content: '" "',
    height: '3px',
    bottom: 0,
    margin: '0 auto',
    left: 0,
    right: 0,
    width: '70%',
    background: '#58ACB0',
    transition: '0.5s',
  },
}
const boxInActive = {
  position: 'relative',
  textTransform: 'none',

  ':after': {
    position: 'absolute',
    content: '" "',
    height: '3px',
    bottom: 0,
    margin: '0 auto',
    left: 0,
    right: 0,
    width: '0%',
    background: '#58ACB0',
    transition: '0.5s',
  },
}

export { boxActive, boxInActive }

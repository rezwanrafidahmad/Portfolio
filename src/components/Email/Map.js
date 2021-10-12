import { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'

import pin from 'img/pin.svg'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 23.8212,
    longitude: 90.3937,
    width: '100%',
    height: '87%',
    zoom: 12,
  })

  return (
    <ReactMapGl
      style={{ minHeight: '30vh' }}
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoicmV6d2FucmFmaWQiLCJhIjoiY2t1b2dic3V0NGF4bTMxazZteWJuOHpvNCJ9.x-YSX-_FLuCR1G_lFcm76g'
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <img src={pin} width={30} height={30} alt='map' />
      </Marker>
    </ReactMapGl>
  )
}

export default Map

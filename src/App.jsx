import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getCurrentPosition} from "./services/navigator";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fya2xlbyIsImEiOiJja2xxbmJjNmgxZHVzMm9tc2Vja3FzNmJmIn0.oMIEudxUzM7cbbOj2bybpw';

const Map = ({lng, lat, track}) => {
    const mapContainer = useRef(null);

    const [zoom, setZoom] = useState(12);

    const [isLoadMap, setIsLoadMap] = useState(false)
    const [mapLink, setMapLink] = useState(null)


    useEffect(() => {
        if (isLoadMap && mapLink) {
            if(mapLink.getSource('route'))
            mapLink.getSource('route').setData( {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': track
                }
            });
            mapLink.setCenter(track[track.length -1])
        }
    }, [track])


    useEffect(() => {
        let cont = mapContainer.current

        const map = new mapboxgl.Map({
            container:  cont,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.on('load', function () {
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': track
                    }
                }
            });

            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#922',
                    'line-width': 8
                }
            });
            setIsLoadMap(true)
            setMapLink(map)
        });
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="map-container" ref={mapContainer} style={{
                position: 'absolute',
                top: 100,
                right: 100,
                left: 100,
                bottom: 100
            }} />
        </div>
    );
};

function App() {

  const [pos, setPos] = useState(null)
    const [track, setTrack] = useState([])
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);



  useEffect(  () => {
    const getPosition = async ()=>  {
 await getCurrentPosition(setPos)
    }
    getPosition()
  }, [])

    useEffect(() => {
        if(pos) {
            setLng(pos?.coords.longitude)
            setLat(pos?.coords.latitude)
        setTrack(track.concat([[pos?.coords.longitude, pos?.coords.latitude]]))
        }


    }, [pos])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {pos && <b>{`coords: ${pos.coords.latitude}, ${pos.coords.longitude}`}</b>}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Map lat={lat} lng={lng} track={track}/>
    </div>
  );
}

export default App;

import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getCurrentPosition} from "./services/navigator";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fya2xlbyIsImEiOiJja2xxbmJjNmgxZHVzMm9tc2Vja3FzNmJmIn0.oMIEudxUzM7cbbOj2bybpw';

interface  MapProps {
    lng: number,
    lat: number,
    track: number[][]
}
const Map = ({lng, lat, track}: MapProps) => {
    const mapContainer = useRef<null | HTMLDivElement>(null);

    const [zoom, setZoom] = useState(12);


    const [mapLink, setMapLink] = useState<any>(null)


    useEffect(() => {
        if (mapLink) {

            mapLink?.getSource('route').setData( {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': track
                }
            });
        }
    }, [track])

    useEffect(() => {
        let cont = mapContainer.current as string | HTMLElement

        const map = new mapboxgl.Map({
            container:  cont,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        setMapLink( map)

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

  const [pos, setPos] = useState<null | GeolocationPosition>(null)
    const [track, setTrack] = useState<number[][]>([])
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);


    console.log(pos)
    console.log(track)

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

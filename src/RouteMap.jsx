import { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = (n, active) => L.divIcon({
  className: 'route-marker-wrap',
  html: `<span class="route-marker ${active ? 'is-active' : ''}">${n}</span>`,
  iconSize: [28, 28], iconAnchor: [14, 14],
});

function FitMap({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 1) map.fitBounds(points.map((p) => [p.lat, p.lng]), { padding: [36, 36], maxZoom: 10 });
  }, [map, points]);
  return null;
}

export default function RouteMap({ route, showFull }) {
  const points = showFull ? route.stops : route.stops.filter((point) => point.name !== '广州');
  const segments = points.slice(1).map((point, index) => ({ from: points[index], to: point, type: point.via }));
  return (
    <div className="map-frame">
      <MapContainer center={[points[0]?.lat ?? 25, points[0]?.lng ?? 110]} zoom={7} scrollWheelZoom={false} className="route-map" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={18}
        />
        <FitMap points={points} />
        {segments.map((segment, index) => (
          <Polyline key={`${index}-${segment.to.name}`} positions={[[segment.from.lat, segment.from.lng], [segment.to.lat, segment.to.lng]]}
            pathOptions={{ color: segment.type === 'flight' ? '#ba6b4a' : '#24574e', weight: segment.type === 'flight' ? 2.6 : 3.8, opacity: .95, dashArray: segment.type === 'flight' ? '5 8' : undefined }} />
        ))}
        {points.map((point, index) => (
          <Marker key={`${index}-${point.name}`} position={[point.lat, point.lng]} icon={icon(index + 1, index === 0)}>
            <Tooltip direction="top" offset={[0, -16]}>{point.name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <div className="map-legend"><span className="legend-line" /> 当地移动 <span className="legend-line flight" /> 航班段</div>
    </div>
  );
}

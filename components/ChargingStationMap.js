// "use client"

// import { useEffect } from "react"
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
// import L from "leaflet"
// import "leaflet/dist/leaflet.css"

// const redIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// })

// export default function ChargingStationMap({ userLocation, stations, onLocationSelect }) {
//   useEffect(() => {
//     delete L.Icon.Default.prototype._getIconUrl
//     L.Icon.Default.mergeOptions({
//       iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//       iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//       shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//     })
//   }, [])

//   const MapClickHandler = () => {
//     useMapEvents({
//       click(e) {
//         onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng })
//       },
//     })
//     return null
//   }

//   return (
//     <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={13} style={{ height: "500px", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapClickHandler />
//       <Marker position={[userLocation.lat, userLocation.lng]} icon={redIcon}>
//         <Popup>Your Selected Location</Popup>
//       </Marker>

//       {stations.map((station) => (
//         <Marker key={station.id} position={[station.location.lat, station.location.lng]} icon={redIcon}>
//           <Popup>
//             <strong>{station.name}</strong><br />
//             {station.availableChargers}/{station.totalChargers} chargers<br />
//             Power: {station.chargingSpeed} kW
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   )
// }

"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const redIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

export default function ChargingStationMap({ userLocation, stations, onLocationSelect }) {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng })
      },
    })
    return null
  }

  // 🛡️ Safe guard to avoid rendering before userLocation is valid
  if (!userLocation?.lat || !userLocation?.lng) {
    return <p>Loading map...</p>
  }

  return (
    <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler />
      <Marker position={[userLocation.lat, userLocation.lng]} icon={redIcon}>
        <Popup>Your Selected Location</Popup>
      </Marker>

      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.location.lat, station.location.lng]}
          icon={redIcon}
        >
          <Popup>
            <strong>{station.name}</strong><br />
            {station.availableChargers}/{station.totalChargers} chargers<br />
            Power: {station.chargingSpeed} kW
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

// "use client"

// import { useEffect } from "react"
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
// import L from "leaflet"
// import "leaflet/dist/leaflet.css"

// const redIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// })

// export default function ChargingStationMap({ userLocation, stations, onLocationSelect }) {
//   useEffect(() => {
//     delete L.Icon.Default.prototype._getIconUrl
//     L.Icon.Default.mergeOptions({
//       iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//       iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//       shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//     })
//   }, [])

//   const MapClickHandler = () => {
//     useMapEvents({
//       click(e) {
//         onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng })
//       },
//     })
//     return null
//   }

//   return (
//     <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={13} style={{ height: "500px", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapClickHandler />
//       <Marker position={[userLocation.lat, userLocation.lng]} icon={redIcon}>
//         <Popup>Your Selected Location</Popup>
//       </Marker>

//       {stations.map((station) => (
//         <Marker
//           key={station.ID}
//           position={[station.AddressInfo.Latitude, station.AddressInfo.Longitude]}
//           icon={redIcon}
//         >
//           <Popup>
//             <strong>{station.AddressInfo.Title}</strong><br />
//             Power: {station.Connections?.[0]?.PowerKW ?? "N/A"} kW<br />
//             Status: {station.StatusType?.Title ?? "Unknown"}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   )
// }

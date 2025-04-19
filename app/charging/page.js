"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { fetchNearbyStations } from "/Users/amanverma/Documents/VoltPath/voltpath-new/lib/kafka-service.js "
import { defaultLocation } from "/Users/amanverma/Documents/VoltPath/voltpath-new/lib/types.js "

// Dynamically import the map to avoid SSR crash
const ChargingStationMap = dynamic(() => import("../../components/ChargingStationMap"), {
  ssr: false,
})

export default function ChargingStationFinder() {
  const [location, setLocation] = useState(defaultLocation)
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchNearbyStations(location)
      setStations(data)
    } catch (err) {
      console.error(err)
      setError("Failed to fetch stations")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>EV Charging Station Finder</h1>
      <p>Click on the map to select a location, then click search.</p>
      <button onClick={handleSearch} disabled={loading} style={{ marginBottom: "1rem" }}>
        {loading ? "Searching..." : "Search Nearby Charging Stations"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ChargingStationMap
        userLocation={location}
        stations={stations}
        onLocationSelect={setLocation}
      />
    </div>
  )
}

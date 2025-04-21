import axios from "axios"

export async function fetchNearbyStations(location) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/send_stations/", null, {
      params: {
        latitude: location.lat,
        longitude: location.lng,
        distance: 10
      }
    })

    if (!response.data || !Array.isArray(response.data.stations)) {
      throw new Error("Invalid response from backend")
    }

    return response.data.stations.map((station) => ({
      id: station.ID,
      name: station.AddressInfo?.Title || "Unnamed Station",
      location: {
        lat: station.AddressInfo?.Latitude,
        lng: station.AddressInfo?.Longitude
      },
      distance: station.AddressInfo?.Distance || 0,
      availableChargers: station.Connections?.length || 0,
      totalChargers: station.NumberOfPoints || 0,
      chargingSpeed: station.Connections?.[0]?.PowerKW || "N/A"
    }))
  } catch (error) {
    const backendMessage = error.response?.data?.detail || error.message
    console.error("❌ Failed to fetch stations:", backendMessage)
    throw new Error(backendMessage)
  }
}

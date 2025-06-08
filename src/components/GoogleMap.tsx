import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

const GoogleMap = ({ className }: GoogleMapProps) => {
  // Coordinates for Kimathi Street, Nairobi, Kenya
  const cafeLocation = { lat: -1.2876, lng: 36.8237 };

  // You'll need to get a Google Maps API key from https://console.cloud.google.com/
  // and add it to your environment variables or directly here for demo purposes
  const API_KEY =
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY";

  if (!API_KEY || API_KEY === "YOUR_GOOGLE_MAPS_API_KEY") {
    // Fallback component when API key is not configured
    return (
      <div
        className={`bg-gradient-to-br from-coffee-100 to-coffee-200 flex items-center justify-center ${className}`}
      >
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 text-coffee-600 mx-auto mb-4" />
          <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-2">
            The Roasted Bean Location
          </h3>
          <p className="text-coffee-600 mb-4">Kimathi Street, Nairobi, Kenya</p>
          <div className="text-coffee-500 text-sm">
            <p>📍 Coordinates: -1.2876, 36.8237</p>
            <p className="mt-2">To enable live map, add Google Maps API key</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={cafeLocation}
          defaultZoom={16}
          mapId="cafe-location-map"
          style={{ width: "100%", height: "100%" }}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          clickableIcons={true}
        >
          <Marker
            position={cafeLocation}
            title="The Roasted Bean - Vintage Cafe"
          />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;

import type { LatLngExpression } from "leaflet";
import Image from "next/image";
import {
    // biome-ignore lint/suspicious/noShadowRestrictedNames: <Don't need shadow restriction>
    Map,
    MapDrawCircle,
    MapDrawControl,
    MapDrawDelete,
    MapDrawEdit,
    MapDrawMarker,
    MapDrawPolygon,
    MapDrawPolyline,
    MapDrawRectangle,
    MapDrawUndo,
    MapFullscreenControl,
    MapLayers,
    MapLayersControl,
    MapLocateControl,
    MapMarker,
    MapMarkerClusterGroup,
    MapPopup,
    MapTileLayer,
    MapZoomControl,
} from "@/components/my-maps-components/ui/map";

const BasicMap = () => {
    const USA_CENTER = [39.8283, -98.5795] satisfies LatLngExpression;

    const CITIES = [
        { name: "New York, NY", coordinates: [40.7128, -74.006] },
        { name: "Los Angeles, CA", coordinates: [34.0522, -118.2437] },
        { name: "San Francisco, CA", coordinates: [37.7749, -122.4194] },
        { name: "Miami, FL", coordinates: [25.7617, -80.1918] },
        { name: "Orlando, FL", coordinates: [28.5383, -81.3792] },
        { name: "Chicago, IL", coordinates: [41.8781, -87.6298] },
        { name: "Houston, TX", coordinates: [29.7604, -95.3698] },
        { name: "Dallas, TX", coordinates: [32.7767, -96.797] },
        { name: "Austin, TX", coordinates: [30.2672, -97.7431] },
        { name: "Seattle, WA", coordinates: [47.6062, -122.3321] },
        { name: "Denver, CO", coordinates: [39.7392, -104.9903] },
        { name: "Boston, MA", coordinates: [42.3601, -71.0589] },
        { name: "Philadelphia, PA", coordinates: [39.9526, -75.1652] },
        { name: "San Diego, CA", coordinates: [32.7157, -117.1611] },
        { name: "Las Vegas, NV", coordinates: [36.1699, -115.1398] },
        { name: "Atlanta, GA", coordinates: [33.749, -84.388] },
        { name: "Portland, OR", coordinates: [45.5051, -122.675] },
        { name: "Minneapolis, MN", coordinates: [44.9778, -93.265] },
        { name: "Salt Lake City, UT", coordinates: [40.7608, -111.891] },
        { name: "New Orleans, LA", coordinates: [29.9511, -90.0715] },
    ];


    return (
        <Map center={USA_CENTER} zoom={4}>
            <MapLayers defaultTileLayer="Street">
                {/* Street Map Layer */}
                <MapTileLayer
                    name="Street"
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution="&copy; OpenStreetMap contributors"
                />

                {/* Satellite Map Layer */}
                <MapTileLayer
                    name="Satellite"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles &copy; Esri Satellite"
                />

                {/* Layer Toggle Control UI */}
                <MapLayersControl
                    className="absolute top-10"
                    tileLayersLabel="Map Type"
                />
                <MapFullscreenControl />
                <MapZoomControl />
                <MapLocateControl />

                <MapDrawControl>
                    <MapDrawMarker />
                    <MapDrawPolyline />
                    <MapDrawCircle />
                    <MapDrawRectangle />
                    <MapDrawPolygon />
                    <MapDrawEdit />
                    <MapDrawDelete />
                    <MapDrawUndo />
                </MapDrawControl>

                <MapMarkerClusterGroup>
                    {CITIES.map((city) => (
                        <MapMarker
                            key={city.name}
                            position={city.coordinates as LatLngExpression}
                            icon={
                                <Image src="/geo_fence.svg" className="h-8" width={200} height={200} alt="Image" />
                            }
                        >
                            <MapPopup>
                                <strong>{city.name}</strong>
                            </MapPopup>
                        </MapMarker>
                    ))}
                </MapMarkerClusterGroup>
            </MapLayers>
        </Map>
    );
};

export default BasicMap;

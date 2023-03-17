import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
  } from "react-simple-maps";
  
  const MapChart = () => {
    return (
      <ComposableMap
      className="absolute hidden md:inline-block md:-right-[700px] opacity-80"
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [60, 30, 0],
          center: [-3, -3],
          scale: 500
        }}
      >
        <Geographies
          geography="/features.json"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[-61, -36]}
          dx={0}
          dy={0}
          connectorProps={{
            stroke: "#000",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="-50" textAnchor="start" alignmentBaseline="text-after-edge" fill="#000">
            {"Bs As, Argentina"}
          </text>
        </Annotation>
      </ComposableMap>
    );
  };
  
  export default MapChart;
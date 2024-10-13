import React, { useState } from 'react';
import { Annotation, ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import nigeriaGeoJson from '../data/nigeria.json'; // Import the Nigeria GeoJSON


const stateLabels = [
    { name: "Abia", coordinates: [7.5, 5.5] },
    { name: "Adamawa", coordinates: [12.5, 9.5] },
    { name: "Akwa Ibom", coordinates: [8, 4.5] },
    { name: "Anambra", coordinates: [7, 6] },
    // { name: "Bauchi", coordinates: [10, 11] },
    // { name: "Bayelsa", coordinates: [6.2, 4.3] },
    // { name: "Benue", coordinates: [8.5, 7.5] },
    // { name: "Borno", coordinates: [13, 11.5] },
    // { name: "Cross River", coordinates: [8, 5.5] },
    // { name: "Delta", coordinates: [6, 5.5] },
    // { name: "Ebonyi", coordinates: [7.8, 6.3] },
    // { name: "Edo", coordinates: [6.5, 6] },
    // { name: "Ekiti", coordinates: [5.5, 7.7] },
    // { name: "Enugu", coordinates: [7.5, 6.5] },
    // { name: "Gombe", coordinates: [11, 10] },
    // { name: "Imo", coordinates: [7.2, 5.5] },
    // { name: "Jigawa", coordinates: [9.5, 12] },
    // { name: "Kaduna", coordinates: [8.5, 10.5] },
    // { name: "Kano", coordinates: [8.5, 11.5] },
    // { name: "Katsina", coordinates: [7.5, 12.5] },
    { name: "Kebbi", coordinates: [4.5, 12] },
    { name: "Kogi", coordinates: [7.5, 8] },
    { name: "Kwara", coordinates: [4.5, 8.5] },
    // { name: "Lagos", coordinates: [3.5, 6.5] },
    // { name: "Nasarawa", coordinates: [8.5, 8.5] },
    // { name: "Niger", coordinates: [5.5, 9.5] },
    // { name: "Ogun", coordinates: [3.5, 7] },
    // { name: "Ondo", coordinates: [4.5, 7.5] },
    // { name: "Osun", coordinates: [4.5, 7.5] },
    // { name: "Oyo", coordinates: [3.5, 8] },
    // { name: "Plateau", coordinates: [9.5, 9.5] },
    // { name: "Rivers", coordinates: [6.5, 4.5] },
    { name: "Sokoto", coordinates: [5.5, 13] },
    { name: "Taraba", coordinates: [10, 8.5] },
    { name: "Yobe", coordinates: [11.5, 12] },
    { name: "Zamfara", coordinates: [6.5, 12] },
    { name: "FCT", coordinates: [7.5, 9] },
];


const NigeriaMap = ({ data }) => {
    const [tooltipContent, setTooltipContent] = useState("");

    const handleMouseEnter = (stateName: string, stateData: number | string) => {
        setTooltipContent(`${stateName}: ${stateData}`);

    };
    // Scale to color states based on data
    const colorScale = scaleLinear()
        ?.domain([0, Math?.max(...Object?.values(data))])
        ?.range(["#e0f7fa", "#006064"]);

    return (
        <>

            <ComposableMap projection="geoMercator" width={900} height={800} projectionConfig={{ scale: 2500, center: [8, 9] }}>
                <Geographies geography={nigeriaGeoJson}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const stateName = geo.properties.name;
                            const stateData = data[stateName] || 0;

                            return (
                                <React.Fragment key={geo.rsmKey}>
                                    <Geography
                                        geography={geo} width={800}
                                        fill={colorScale(stateData)}
                                        stroke="#000"
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "#2a9d8f", outline: "none" },
                                            pressed: { outline: "none" }
                                        }}
                                        onMouseEnter={() => handleMouseEnter(stateName, stateData)}
                                    />
                                    {stateLabels.map(({ name, coordinates }) => (
                                        <Annotation
                                            key={name}
                                            subject={coordinates}
                                            dx={-10}
                                            dy={-10}
                                        >
                                            <text x="4" fontSize={8} alignmentBaseline="middle" fill="#090909">
                                                {name}: {data[name] || 0}
                                            </text>
                                        </Annotation>
                                    ))}
                                </React.Fragment>
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
            <div className="tooltip hidden">{tooltipContent}</div>
        </>
    );
};

export default NigeriaMap;

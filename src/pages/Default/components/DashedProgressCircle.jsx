import React, { useMemo } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const DashedProgressCircle = ({ percentage, label }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const totalDashArray = circumference * (percentage / 100);
    const offset = circumference - totalDashArray;
    const { width } = useWindowDimensions();

    const size = useMemo(()=>{
        width < 1024 ? 150 : 100;
    }, [width])

    return (
        <div className="flex justify-center items-center h-full bg-neutral-50">
            <div className="relative w-36 h-36 flex items-center justify-center">
                <svg
                    className="transform -rotate-90"
                    width="size"
                    height="size"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#e0e0e0"
                        strokeWidth="6"
                        strokeDasharray="4,4"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#3498db"
                        strokeWidth="6"
                        strokeDasharray={`4,4`}
                        style={{
                            strokeDasharray: `${totalDashArray} ${circumference}`,
                            strokeDashoffset: offset,
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold">{percentage}%</span>
                    <span className="mt-1 text-xs text-gray-600">{label}</span>
                </div>
            </div>
        </div>
    );
};

export default DashedProgressCircle;

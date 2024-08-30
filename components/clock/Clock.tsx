'use client'
import { getFormattedDate } from "@/utils";
import React, { useEffect, useState } from "react";




const Clock = () => {
    // getFormattedDate(new Date());
    const [timeElements, setTimeElements] = useState(getFormattedDate(new Date()));
    const updateTime = () => {
        console.log('change '+getFormattedDate(new Date()))
        setTimeElements(getFormattedDate(new Date()));
    }

    useEffect(() => {
        const intervalId = setInterval(updateTime, 60000);

        setTimeElements(getFormattedDate(new Date()));

        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className="rounded-lg border border-orange-500 w-2/8 text-center grid grid-cols-2 divide-x divide-orange-300">
            {
                timeElements.map(
                    eachElement => (
                        <div key={`te-${eachElement}`} className="px-2 py-1">
                            <h1 className="text-2xl font-bold">{`${eachElement}`}</h1>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Clock;
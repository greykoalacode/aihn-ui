'use client'
import React, { useEffect, useState } from "react";


const getFormattedDate = (date: Date) => {
    return `${date.getHours()} : ${date.getMinutes()}, ${date.getDate()} ${date.getMonth()}`;
}

const Clock = () => {
    // getFormattedDate(new Date());
    const [currentTime, setCurrentTime] = useState(getFormattedDate(new Date()));
    const updateTime = () => {
        console.log('change '+getFormattedDate(new Date()))
        setCurrentTime(getFormattedDate(new Date()));
    }

    useEffect(() => {
        const intervalId = setInterval(updateTime, 60000);

        setCurrentTime(getFormattedDate(new Date()));

        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className="rounded-lg border border-orange-500 p-2 w-2/8 text-center">
            <h1 className="text-2xl font-bold">{`${currentTime}`}</h1>
        </div>
    )
}

export default Clock;
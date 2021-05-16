/* Core */
import {FC, useEffect} from "react";

/* Components */
import {Day} from "./Day";

/* Data */
import days from '../mock-data/forecast.json';

export const Forecast: FC = () => {
    const dayListJSX = days.slice(7)
        .map((dayData) => {
            return <Day id={dayData.id}
                        day={dayData.day}
                        temperature={dayData.temperature}
                        rainProbability={dayData.rain_probability}
                        humidity={dayData.humidity}
                        type={dayData.type}/>
        });

    return (
        <div className="forecast">
            {dayListJSX}
        </div>
    );
}
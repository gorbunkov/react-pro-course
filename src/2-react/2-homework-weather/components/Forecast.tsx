/* Core */
import {FC} from "react";
import Loader from 'react-loader-spinner'

/* Components */
import {Day} from "./Day";

/* Hooks */
import {useDays} from "../hooks/useDays";

export const Forecast: FC = () => {
    const {data: days, isFetching} = useDays();

    const daysJSX = days?.map((dayData) => {
        return <Day key={dayData.id}
                    id={dayData.id}
                    day={dayData.day}
                    temperature={dayData.temperature}
                    rainProbability={dayData.rain_probability}
                    humidity={dayData.humidity}
                    type={dayData.type}/>
    });

    return isFetching ? (
        <div className="loading-indicator">
            <Loader type='ThreeDots' color={'#966590'}/>
        </div>
    ) : (
        <div className="forecast">
            {daysJSX}
        </div>
    )
}
/* Core */
import {FC} from "react";
import Loader from 'react-loader-spinner'

/* Components */
import {Day} from "./Day";

/* Hooks */
import {useDays} from "../hooks/useDays";
import {FilterFormDataModel} from "../types/FilterFormDataModel";
import {DayModel} from "../types/DayModel";

export const Forecast: FC<ForecastProps> = (props) => {
    const {data: days, isFetching} = useDays();
    const {filter} = props;

    const dayMatchesFilter = (day: DayModel, filter?: FilterFormDataModel): boolean => {
        if (!filter) return true;
        if (filter.cloudy && day.type !== 'cloudy') return false;
        if (filter.sunny && day.type !== 'sunny') return false;
        if (filter.minTemperature && day.temperature < filter.minTemperature) return false;
        if (filter.maxTemperature && day.temperature > filter.maxTemperature) return false;
        return true;
    }

    const daysJSX = days?.filter((day) => {
        return dayMatchesFilter(day, filter);
    }).map((dayData) => {
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

interface ForecastProps {
    filter?: FilterFormDataModel
}
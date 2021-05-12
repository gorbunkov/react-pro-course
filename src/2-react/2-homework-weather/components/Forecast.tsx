/* Core */
import {FC} from "react";

/* Components */
import {Day} from "./Day";

export const Forecast: FC = () => {
    return (
        <div className="forecast">
            <Day name={'Пятница'} temperature={17} cloudy={true}/>
            <Day name={'Суббота'} temperature={19} cloudy={true}/>
            <Day name={'Понедельник'} temperature={18} cloudy={true}/>
            <Day name={'Вторник'} temperature={21} cloudy={true}/>
            <Day name={'Среда'} temperature={16} rainy={true}/>
            <Day name={'Четверг'} temperature={19} rainy={true}/>
            <Day name={'Пятница'} temperature={19} sunny={true}/>
        </div>
    )
}
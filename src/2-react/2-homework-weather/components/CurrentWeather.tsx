/* Core */
import {FC} from "react";

export const CurrentWeather: FC = () => {
    return (
        <div className="current-weather">
            <p className="temperature">17</p>
            <p className="meta">
                <span className="rainy">%35</span>
                <span className="humidity">%72</span>
            </p>
        </div>
    )
}
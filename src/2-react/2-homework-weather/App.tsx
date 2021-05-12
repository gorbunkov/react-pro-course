/* Core */
import {FC} from "react";

/* Components */
import {CurrentWeather, Filter, Forecast, Head} from "./components";

export const App: FC = () => {
    return (
        <main>
            <Filter/>
            <Head/>
            <CurrentWeather/>
            <Forecast/>
        </main>
    );
};

/* Core */
import {FC} from "react";
import {QueryClientProvider, QueryClient} from "react-query";

/* Components */
import {CurrentWeather, Filter, Forecast, Head} from "./components";

export const App: FC = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Filter/>
                <Head/>
                <CurrentWeather/>
                <Forecast/>
            </main>
        </QueryClientProvider>
    );
};

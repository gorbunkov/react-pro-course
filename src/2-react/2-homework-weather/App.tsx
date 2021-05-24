/* Core */
import {FC, useState} from "react";
import {QueryClientProvider, QueryClient} from "react-query";

/* Components */
import {CurrentWeather, Filter, Forecast, Head} from "./components";
import {FilterFormDataModel} from "./types/FilterFormDataModel";

export const App: FC = () => {

    const [filterFormData, setFilterFormData] = useState<FilterFormDataModel>();

    const queryClient = new QueryClient();

    const handleFiltering = (data: FilterFormDataModel) => {
        setFilterFormData(data);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Filter handleFiltering={handleFiltering}/>
                <Head/>
                <CurrentWeather/>
                <Forecast filter={filterFormData}/>
            </main>
        </QueryClientProvider>
    );
};

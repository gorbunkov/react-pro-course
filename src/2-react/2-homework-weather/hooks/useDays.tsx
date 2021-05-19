import {useQuery} from "react-query";
import {DayModel} from "../types/DayModel";

import {api} from '../api';

export const useDays = () => {
    return useQuery<DayModel[]>('days', () => api.fetchWeather(7));
}
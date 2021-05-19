/* Core */
import waait from 'waait';
import axios from 'axios';

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const api = {
    async getWeather() {
        await waait(1000);

        return fetch(`${WEATHER_API_URL}`, { method: 'GET' });
    },

    async fetchWeather(daysLimit: number) {
        await waait(1000);
        const response = await axios.get(`${WEATHER_API_URL}`, {params: {'limit': daysLimit}});
        return response.data.data
    },
};

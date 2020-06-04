import { API_BASE_URL_DEV, API_KEY } from 'react-native-dotenv';

class BackendApiClient {
    private getApiBaseUrl(): string {
        return API_BASE_URL_DEV;
    }
    private getMapApi(): string {
        return API_KEY;
    }
}

export default new BackendApiClient();
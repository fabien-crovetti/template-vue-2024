import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Sample from '@/api/backend/sample';
import { mockSample } from '@/mocks/backend';

const axiosBackend = axios.create({
    baseURL: import.meta.env.VITE_YOODA_TWO_BACKEND_BASE_URI,
    withCredentials: true
});


if (import.meta.env.VITE_MOCK_MODE === 'true') {
    const mock = new MockAdapter(axiosBackend, {
        delayResponse: 2000,
    });
    mockSample(mock);
    mock.onAny().passThrough();
}

const sample    = new Sample(axiosBackend);

export default {
    sample
};

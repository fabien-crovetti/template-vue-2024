import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Sample from '@/api/backend/sample';
import { mockSample } from '@/mocks/backend';

import { useAccountManager } from "@/composable/accountManager";
const { logout, setJwtCredential} = useAccountManager()



const axiosBackend = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URI,
    withCredentials: true
});


async function refreshToken(){
    const axiosRefresh = axios.create({baseURL: import.meta.env.VITE_BACKEND_BASE_URI});
    return axiosRefresh.post(`/api/token/refresh`, {refresh_token: localStorage.getItem('refreshToken')})
}

axiosBackend.interceptors.request.use(function (config) {
    if(localStorage.getItem('accessToken')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosBackend.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response
    },
    async (error) => {

        const {config, response} = error

        if(response.status === 401){
            return await refreshToken()
            .then(async (res: AxiosResponse) => {
                if(res.status === 200){
                    setJwtCredential(res.data.token, res.data.refresh_token)
                    return await axiosBackend.request(config)
                }
            })
            .catch(()=>{
                logout()
            })
        }
        else{
            return Promise.reject(error);
        }
    }
);

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

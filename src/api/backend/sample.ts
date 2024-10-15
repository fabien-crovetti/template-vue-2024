import { AxiosInstance, AxiosRequestConfig } from 'axios';

class Sample {

    axiosBackend

    constructor(axiosBackend: AxiosInstance) {
        this.axiosBackend = axiosBackend
    }

    loginCheck (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.post(`/api/login_check`, filters)
    }
    getUser (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.get(`/api/user`, filters)
    }
    getBooks (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.get(`/api/books`, filters)
    }


}

export default Sample;

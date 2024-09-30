import { AxiosInstance, AxiosRequestConfig } from 'axios';

class Sample {

    axiosBackend

    constructor(axiosBackend: AxiosInstance) {
        this.axiosBackend = axiosBackend
    }

    getAppData (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.get(`/app-data`, filters)
    }
    getBooks (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.get(`/books`, filters)
    }
    getBooksRepartition (filters: AxiosRequestConfig|undefined = {}) {
        return this.axiosBackend.get(`/books/repartition`, filters)
    }

}

export default Sample;

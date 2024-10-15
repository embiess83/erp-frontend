import axios from "axios";

class Request {
    instance;
    interceptors;
    loading;

    constructor(config, interceptors) {
        // You can specify some default common configurations here
        this.instance = axios.create(config);
        this.setGlobalInterceptor(this.instance, interceptors);
    }

    setGlobalInterceptor(instance, interceptors) {
        // Request success interceptor
        let requestInterceptor = interceptors?.requestInterceptor || ((config) => {
            return config;
        });

        // Request failure interceptor
        let requestInterceptorCatch = interceptors?.requestInterceptorCatch || ((error) => {
            return Promise.reject(error);
        });

        // Response success interceptor
        let responseInterceptor = interceptors?.responseInterceptor || (async (response) => {
            return response.data;
        });

        // Response failure interceptor
        let responseInterceptorCatch = interceptors?.responseInterceptorCatch || (async (error) => {
            return Promise.reject(error);
        });

        instance.interceptors.request.use(requestInterceptor, requestInterceptorCatch);
        instance.interceptors.response.use(responseInterceptor, responseInterceptorCatch);
    }
}

export default function useAxiosIns(config) {
    return new Request(config);
}
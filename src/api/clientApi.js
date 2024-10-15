//clientApi.js

import useRequest from "./request";

const auth = 'Bearer ' + localStorage.getItem("token");
const config = {
    headers: {
        Authorization: auth
    }
};

function useClientApi() {
    const { get, post } = useRequest(config);
    const getClientApi = (params) => {
        return get("/v1/clients", params)
    }
    const addClientApi = (params) => {
        return post("/v1/clients", params)
    }
    return {
        getClientApi,
        addClientApi
    }
}
export default useClientApi;
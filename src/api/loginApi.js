//clientApi.js

import useRequest from "./request";

function useLoginApi() {
    const { post } = useRequest();
    
    const signIn = (params) => {
        return post("/v1/login", params)
    }
    return {
        signIn
    }
}
export default useLoginApi;
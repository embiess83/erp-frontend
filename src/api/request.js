import useAxiosIns from "./useAxiosIns"

//request.js
export default function useRequest (config={}){
    const requestIns=useAxiosIns({
        baseURL: "http://localhost:8080",
        timeout: 5000,
        ...config
        // For other configurations related to this service, such as corresponding interceptors and responders,
    })
    const get=(url,params,config)=>{
        return requestIns.instance.get(url, {params,...config})
    }
    const post=(url,data,config)=>{
        return requestIns.instance.post(url,data,config)
    }
    return {
        get,post
    }
}
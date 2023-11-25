import React from "react";
import { useQuery } from "react-query";
import axios from "axios"
const Api = () => {
    const { data, errors, isLoading, refact } = useQuery(["OpenAI"],()=> {
        return axios.get("http://catfact.ninja/fact").then((res)=>res.data)
     })
    return(
        <div>
            <h1> {data?.fact} </h1>
            { isLoading && <h1>Loading...</h1> }
            { errors && <h1>Error</h1> }
            <button onClick={refact} ></button>
        </div>
    )
};export default Api;
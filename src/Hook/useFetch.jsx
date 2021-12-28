import { useEffect, useState } from "react";


export default function useFetch(url){

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [data,setData]=useState(null);

    useEffect(()=>{
       setLoading(true);
       fetch(url)
       .then((res)=>res.json())
       .then((res)=>{
           setData(res);
           setLoading(false);
       })
       .catch(()=>{
           setError(true);
           setLoading(false);
       })
    },[url])

    return {loading,error,data};
}
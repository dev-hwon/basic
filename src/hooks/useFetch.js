import { useEffect, useState, useCallback } from "react";
export default function useFetch(url) {
    const [data, setData] = useState([]);
    const fnFetch = useCallback (() => {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data=> {
            setData(data);
        })
    },[data])

    useEffect(() => {
        fnFetch();
    },[])
    
    return data;
}
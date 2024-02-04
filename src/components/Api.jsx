import { useState,useEffect, createContext } from "react";


export const CounterContext= createContext()
export default function Api({children}){
    
    const [api , setApi]= useState([])


    const getApi= async()=>{
        const PHOTO_URL = "/photos.json";
        const response= await fetch(PHOTO_URL)
        const data= await response.json()
        setApi(data.photos)
        
    }

    useEffect(()=>{
        getApi()
    },[])


    return(
        <CounterContext.Provider value={{api,setApi}}>{children}</CounterContext.Provider>
    )

}
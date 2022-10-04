import { useState,useEffect } from "react";
import axios from 'axios'

const useGoogleAddress = address =>{
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAIdMAuj7y-kLBfzqANwivVjCtlcnMReUE`;

    useEffect(()=>{
        async function MapDirection(){
            const res = await axios(API);
            setMap(res.data.results[0].geometry.location)
        }

        MapDirection()
    },[])

    return map;
}

export default useGoogleAddress
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRange } from "../store/slices/rangeSlice";

export default function useUpdate(){
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://api.v2.emissions-api.org/api/v2/carbonmonoxide/data-range.json')
        .then(
          res => res.json()  
        )
        .then(
            data => dispatch(getRange(data))
        )
        .catch(
            err => alert(`${err.name}: ${err.message}`)
        )
    }, [])
}
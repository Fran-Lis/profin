import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCountries } from "../store/slices/countriesSlice";

export default function useCountries(){
    const dispatch = useDispatch()

    useEffect(() =>{
        fetch('https://api.v2.emissions-api.org/api/v2/countries.json')
        .then(
            res => res.json()
        )
        .then(
            data => dispatch(loadCountries(data))
        )
        .catch(err => alert(`${err.name}: ${err.message}`))
    }, [])
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../store/slices/dataSlice";

export default function useData(){
    const url = useSelector(state => state.url.value)
    const dispatch = useDispatch()

    useEffect(() =>{
        fetch(url)
        .then(
            res => res.json()
        )
        .then(
            data => dispatch(load(data))
        )
        .catch(
            err => alert(`${err.name}: ${err.message}`)
        )
    }, [url])

}
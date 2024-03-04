import { useDispatch, useSelector } from "react-redux"
import { changePoint } from "../../store/slices/pointSlice"
import { useState } from "react"
import { writeUrl } from "../../store/slices/urlSlice"
import useCountries from "../../hooks/useCountries"
import Input from "../Input/Input"
import Select from "../Select/Select"
import './Form.css'

export default function Form(){
    useCountries()
    const dispatch = useDispatch()
    const point = useSelector(state => state.point.value)
    const countries = useSelector(state => state.country.value)
    const [data, setData] = useState({
        begin: '',
        end: '',
        country: '',
        lat: 0,
        lon: 0
    })

    function handleInput(e){
        const {id, value} = e.target 
        setData({
            ...data,
            [id] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(writeUrl(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?${point ? `point=${data.lon}&point=${data.lat}` : `country=${data.country}`}&interval=day&begin=${data.begin}&end=${data.end}&limit=100&offset=0`))
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input id='begin' type='date' value={data.begin} onChange={handleInput} label='Begin Date' />
            <Input id='end' type='date' value={data.end} onChange={handleInput} label='End Date' />
            {point ? 
                <div id="point-form">
                    <Input id='lat' type='number' value={data.lat} onChange={handleInput} label='Latitude' />
                    <Input id='lon' type='number' value={data.lon} onChange={handleInput} label='Longitude' />
                </div>
                :
                <Select countries={countries} value={data.country} onChange={handleInput} />
            }
            <div className="btn-container">
                <button className="btn" type="button" onClick={() => dispatch(changePoint())}>{point ? 'Country' : 'Point'}</button>
                <button className="btn" type="submit">Submit</button>
            </div>
        </form>
    )
}
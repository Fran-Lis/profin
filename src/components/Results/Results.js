import { useSelector } from "react-redux"
import DataCard from "../DataCard/DataCard"
import useData from "../../hooks/useData"
import Loader from "../Loader/Loader"
import './Results.css'


export default function Results(){

    const response = useSelector(state => state.data.value)
    //const empty = []
    //console.log(response)

    useData()

    return(
        <div className="results-container">
            {response.length === 0 ?
                <Loader />
                :
                response.map(el => {
                    return(
                    <DataCard time={el.time} value={el.value} />
                    )
                })
            }
        </div>
    )
}

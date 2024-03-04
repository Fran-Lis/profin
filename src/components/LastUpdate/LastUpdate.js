import useUpdate from "../../hooks/useUpdate";
import { useSelector } from "react-redux";
import './LastUpdate.css';

export default function LastUpdate(){
    const range = useSelector(state => state.range.value)

    useUpdate()

    return(
        <div className="last-update">
            <p>Last database update: <span>{range.last}</span></p>
        </div>
    )
}
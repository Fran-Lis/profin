import './DataCard.css'

export default function DataCard(props){
    const time = props.time
    const value = props.value
    return(
        <div className='data-card'>
            <div className="time">
                <h3>Time:</h3>
                <p>Interval Start: <span>{time.interval_start}</span></p>
                <p>Max: <span>{time.max}</span></p>
                <p>Min: <span>{time.min}</span></p>
            </div>
            <div className="value">
                <h3>Values:</h3>
                <p>Average: <span>{value.average}</span></p>
                <p>Count: <span>{value.count}</span></p>
                <p>Max: <span>{value.max}</span></p>
                <p>Min: <span>{value.min}</span></p>
                <p>Standard Deviation: <span>{value['standard deviation']}</span></p>
            </div>
        </div>
    )
}
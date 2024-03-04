import useNoRepeat from "../../hooks/useNoRepeat"

export default function Select(props){
    const countries = props.countries
    const countriesList = useNoRepeat(Object.values(countries))
    return(
        <div className="input-container">
            <label htmlFor="country">Country</label>
            <select id="country" type="text" value={props.value} onChange={props.onChange} required >
                <option value={''}>Country</option>
                {countriesList.map(el =>{
                    return <option value={Object.keys(countries)[Object.values(countries).indexOf(el)]}>{el}</option>
                })}
            </select>
        </div>
    )
}
export default function Input(props){
    return(
        <div className="input-container">
                <label htmlFor={props.id}>{props.label}</label>
                <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} required />
        </div>
    )
}
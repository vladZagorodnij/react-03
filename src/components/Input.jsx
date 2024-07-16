export default function Input({label, onChangeInput, id, userData}) {
    return (
        <div>
            <label>{label}</label>
            <input type="number"
                   required
                   value={userData[id]}
                   onChange={(event) => {onChangeInput(id, event.target.value)}}
            />
        </div>
    )
}
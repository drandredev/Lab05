function Part(props) {
    return (
        <div>
            <li>{props.partes.id},{props.partes.name}, {props.partes.exercises}</li>
        </div>
    )
}

export default Part

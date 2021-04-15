import React from 'react'

export default function Persona(props) {
    return (
        <div>
        <p>{props.persona.name}</p>
        <p>{props.persona.numero}</p>
        </div>
    )
}

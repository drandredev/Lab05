import React from 'react'

export default function PersonaForm(props) {
    return (
        <form onSubmit={props.guardarPersona}>
        <div>
          name: <input onChange={props.valorNombre}/>
        </div>
        <div>
          number: <input onChange={props.valorNumero}/>
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

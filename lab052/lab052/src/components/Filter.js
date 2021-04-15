import React from 'react'

export default function Filter(props) {
    return (
        <div>
        filter: <input onChange={props.valorFiltro}/>
      </div>
    )
}

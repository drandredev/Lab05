import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  function guardarPersona(event){
    event.preventDefault()
    const nuevaPersona = {
      name: newName
    }
    for (let i = 0; i < persons.length; i++) {
      if (nuevaPersona.name === persons[i].name) {
        window.alert(`${newName} is already added to phonebook`)
        
      }
      
    }
    setPersons(persons.concat(nuevaPersona))
    setNewName("")
  }

  function valorNombre(event){
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={guardarPersona}>
        <div>
          name: <input onChange={valorNombre}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persona => <p>{persona.name}</p>)}
    </div>
  )
}

export default App
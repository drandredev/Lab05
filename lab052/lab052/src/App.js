import React, { useState } from 'react'
import Filter from './components/Filter'
import Persona from './components/Persona'
import PersonaForm from './components/PersonaForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '456465' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [ newNumero, setNewNumero ] = useState('')

  const [ newFilter, setNewFilter ] = useState('')

  function guardarPersona(event){
    event.preventDefault()
    const nuevaPersona = {
      name: newName,
      number: newNumero
    }
    for (let i = 0; i < persons.length; i++) {
      if (nuevaPersona.name === persons[i].name) {
        window.alert(`${newName} is already added to phonebook`)
        
      }
      
    }
    setPersons(persons.concat(nuevaPersona))
    setNewName("")
    setNewNumero("")
  }

  function valorNombre(event){
    setNewName(event.target.value)
  }
  function valorNumero(event){
    setNewNumero(event.target.value)
  }
  function valorFiltro(event){
    setNewFilter(event.target.value)
  }
  return (
    <div>
    <h2>Phonebook</h2>

    <Filter valorFiltro={valorFiltro} />

    <h3>Add a new</h3>

    <PersonaForm valorNombre={valorNombre} valorNumero={valorNumero} guardarPersona={guardarPersona}/>

    <h3>Numbers</h3>
      {persons.filter(persona => persona.name.includes(newFilter))
      .map(persona => <Persona persona={persona}/>)}
    </div>
  )
}

export default App
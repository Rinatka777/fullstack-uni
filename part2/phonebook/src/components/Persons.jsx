const Person = ({ person, deleteName }) => (
  <div>
    {person.name} {person.number}
    <button onClick={() => deleteName(person.id, person.name)}>delete</button>
  </div>
)

const Persons = ({ persons, deleteName }) => (
  <div>
    {persons.map(person =>
      <Person key={person.name} person={person} deleteName={deleteName}/>
    )}
  </div>
)

export default Persons

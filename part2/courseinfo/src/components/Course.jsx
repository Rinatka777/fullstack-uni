const Course = ({ course }) => {
  const { name, parts } = course
  //let total = 0
  //parts.forEach(part => {
   //total = total + part.exercises})
  const total = parts.reduce((sum, part) => sum+ part.exercises, 0)

  return (
    <div>
      <h2>{name}</h2>
      {parts.map(({ id, name, exercises }) => (
        <p key={id}>
          {name} {exercises}
        </p>
      ))}
      <p>Total of {total} exercises</p>
    </div>
  )
}

export default Course

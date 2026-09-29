const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(({ id, name, exercises }) => (
      <Part key={id} name={name} exercises={exercises} />
    ))}
  </div>
)

const Course = ({ course }) => {
  const { name, parts } = course
  //let total = 0
  //parts.forEach(part => {
   //total = total + part.exercises})
  const total = parts.reduce((sum, part) => sum+ part.exercises, 0)

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p>Total of {total} exercises</p>
    </div>
  )
}

export default Course

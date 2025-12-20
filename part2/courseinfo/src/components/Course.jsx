const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
  </div>
)

const Part = ({name, exercises}) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  const total = exercises.reduce((total,value) => {return total + value},0)
  
  return (<p><strong>Total of {total} exercises</strong></p>)
  
}

const Course = ({name, parts}) => (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
)

export default Course
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => (
  <h1>{name}</h1>
)

const Content = ({ parts }) => parts.map(part => <Part key={part.name} part={part}/>)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => (
  <div>Number of exercises {parts.reduce((acc, cur) => acc += cur.exercises, 0)}</div>
)


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

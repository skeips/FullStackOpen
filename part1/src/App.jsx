function Header(props) {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Content(){
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  )
}

function Total(props) {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts : [
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
      }
  ]
}

  
  
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App


// student data file 
const Student = ({name, age, isStudent }) => {
  return (
    <div>
        <h1>Student info</h1>
        <p><b>Name: </b>{name}</p>
        <p><b>Age: </b>{age}</p>
        <p><b>Student Status: </b>{isStudent ? "Yes, I am Student" : "No, I am not Student" }</p>
    </div>
  )
}

// export default Student;
const App = () => {
  return (
    <>
    <Student name="Mohamed" age={23} isStudent={true} />
    <Student name="Ali" age={12} isStudent={false} />
    </>
  )
}

// export default App
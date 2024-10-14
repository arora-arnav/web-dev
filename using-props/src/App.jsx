import Student from "./Student"

function App() {
  return(
    <>
      <Student name="Luffy" age={19} isStudent={true}/>
      <Student name="Zoro" age={21} isStudent={true}/>
      <Student name="Sanji" age={20} isStudent={false}/>
      <Student name="Nami" age={21} isStudent={true}/>
    </>
  ); 
}

export default App

import logo from './logo.svg';
import './App.css';

let courses;

async function getCourses() {
  const response = await fetch("http://localhost:5000/api/courses")
  courses = await response.json();
  console.log(courses)
}

function App() {
  getCourses()
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div>
        <h1>Hi</h1>
        <h3>Course titles</h3>

      </div>

  );
}

export default App;

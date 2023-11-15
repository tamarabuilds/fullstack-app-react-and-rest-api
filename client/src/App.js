import './App.css';
import { useEffect, useState } from 'react'



function App() {
  const [courses, setCourses] = useState(null)

  useEffect(()=> {
    console.log(`in fetch`)
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        console.log(data)
      })
  },[]);
  
  
  return (
      <div>
        <h1>Hi</h1>
        <h3>Course titles</h3>
        <ul>
          {courses.map( course => (<li>{course.id}: {course.title}</li>))}
        </ul>

      </div>

  );
}

export default App;

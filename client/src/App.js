import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'

// App components

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(()=> {
  //   console.log(`in fetch`)
  //   fetch("http://localhost:5000/api/courses")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCourses(data);
  //       console.log(data)
  //     })
  // },[]);
  
  useEffect(() => {
    // let the app know that data is loading
    setLoading(true);
    axios
      .get('http://localhost:5000/api/courses')
      .then((response) => {
        setCourses(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch((error)=> {
        console.log(`Error fetch and parsing the data`, error);
      });
  }, []);


  
  return (
      <div>
        <h2>Hi</h2>
        <h3>Course titles</h3>
        <ul>
          {courses.map( course => (<li>{course.id}: {course.title}</li>))}
        </ul>

      </div>

  );
}

export default App;

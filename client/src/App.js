import axios from 'axios';
import { useEffect, useState } from 'react'

// App components
import Courses from './components/Courses';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // let the app know that data is loading
    setLoading(true);
    axios
      .get('http://localhost:5000/api/courses')
      .then((response) => {
        setCourses(response.data);
        // console.log(response.data)
        setLoading(false);
      })
      .catch((error)=> {
        console.log(`Error fetch and parsing the data`, error);
      });
  }, []);


  
  return (
    <div>
      <main>
        { loading ? (
          <p>Loading...</p>
        ):(
          <>
          <Courses data={courses}/>
          <h2>Hi</h2>
          <h3>Course titles</h3>
          <ul>
            {/* {courses.map( course => (<li>{course.id}: {course.title}</li>))} */}
          </ul>

          </>

        )}

      </main>
    </div>

  );
}

export default App;

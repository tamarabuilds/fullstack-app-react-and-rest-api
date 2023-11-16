import axios from 'axios';
import { useEffect, useState } from 'react'

// App components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('/courses/');

  useEffect(() => {
    console.log(url)
    // let the app know that data is loading
    setLoading(true);
    axios
      .get(`http://localhost:5000/api${url}`)
      .then((response) => {
        setCourses(response.data);
        // console.log(response.data)
        setLoading(false);
      })
      .catch((error)=> {
        console.log(`Error fetch and parsing the data`, error);
      });
  }, [url]);


  
  return (
    <div>
      <main>
        { loading ? (
          <p>Loading...</p>
        ):(
          <>
          {/* <Courses data={courses}/> */}
          <CourseDetail data={courses} />

          </>

        )}

      </main>
    </div>

  );
}

export default App;

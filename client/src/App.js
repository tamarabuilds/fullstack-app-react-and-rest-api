
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

// App components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';

function App() {
  // const [courses, setCourses] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [path, setPath] = useState('/courses');

  // useEffect(() => {
  //   // let the app know that data is loading
  //   setLoading(true);
  //   axios
  //     .get(`http://localhost:5000/api` + path)
  //     .then((response) => {
  //       setCourses(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error)=> {
  //       console.log(`Error fetch and parsing the data`, error);
  //     });
  // }, [path]);

  // const handlePathChange = (newPath) => {
  //   setPath(newPath);
  // };


  
  return (
    <div>
      <main>
          <>
            <Routes>
              {/* <Route path='/' element={<Courses data={courses} changePath={handlePathChange}/>} />
              <Route path='/courses/:id' element={<CourseDetail data={courses} changePath={handlePathChange}/>} /> */}
              <Route path='/' element={<Courses />} />
              <Route path='/courses/:id' element={<CourseDetail />} />
            </Routes>
          </>
      </main>
    </div>

  );
}

export default App;

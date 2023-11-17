
import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react' 

// App components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';

function App() {
  
  return (
    <div>
      <main>
          <>
            <Routes>
              <Route path='/' element={<Courses />} />
              <Route path='/courses/create' element={<CreateCourse />} />
              <Route path='/courses/:id' element={<CourseDetail />} />
              <Route path='signin' element={<UserSignIn />} />
              <Route path='signup' element={<UserSignUp />} />
            </Routes>
          </>
      </main>
    </div>

  );
}

export default App;

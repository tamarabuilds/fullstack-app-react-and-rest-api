import { Route, Routes } from 'react-router-dom';

// App components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <div>
      <main>
          <>
            <Routes>
              <Route path='/' element={<Courses />} />
              <Route path='/courses/:id' element={<CourseDetail />} />
              <Route path='signin' element={<UserSignIn />} />
              <Route path='signup' element={<UserSignUp />} />
              {/* <Route element={<PrivateRoute />}> */}
              <Route path='/courses/create' element={<CreateCourse />} />
              <Route path='/courses/:id/update' element={<UpdateCourse />} />
              {/* </Route> */}
            </Routes>
          </>
      </main>
    </div>

  );
}

export default App;

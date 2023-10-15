import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CoursesList } from './pages/CoursesList';
import { NoPage } from './pages/NoPage';
import { NavHeader } from './components/NavHeader';
import { CreateNewCourse } from './pages/CreateNewCourse';
import { courseToUpdate$ } from './state-signals/courseToUpdate.signal';
import { ModifyOrDeleteCourse } from './pages/ModifyOrDeleteCourse';

const App = () => {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CoursesList />} />
        <Route path='/new-course' element={<CreateNewCourse />} />
        {courseToUpdate$.value &&  <Route path='/courses/:courseId' element={<ModifyOrDeleteCourse course={courseToUpdate$.value} />} />}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}

export {App};

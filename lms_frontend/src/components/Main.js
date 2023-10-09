import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import About from './About'
import { Route, Routes } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourse from './User/MyCourse';
import FavoriteCourse from './User/FavoriteCourse';
import RecommendedCourse from './User/RecommendedCourse';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';


function Main(){
    return(
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/detail/:course_id' element={<CourseDetail />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/my-courses' element={<MyCourse />}></Route>
                <Route path='/favorite-courses' element={<FavoriteCourse />}></Route>
                <Route path='/recommended-courses' element={<RecommendedCourse />}></Route>
                <Route path='/profile-setting' element={<ProfileSetting />}></Route>
                <Route path='/change-password' element={<ChangePassword />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;
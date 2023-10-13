import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import About from './About'
import { Route, Routes } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';

// User
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourse from './User/MyCourse';
import FavoriteCourse from './User/FavoriteCourse';
import RecommendedCourse from './User/RecommendedCourse';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

// Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherCourse from './Teacher/TeacherCourse';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import AddCourse from './Teacher/AddCourse';
import UserList from './Teacher/UserList';


function Main(){
    return(
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/user-login' element={<Login />}></Route>
                <Route path='/user-register' element={<Register />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/detail/:course_id' element={<CourseDetail />}></Route>
                <Route path='/user-dashboard' element={<Dashboard />}></Route>
                <Route path='/my-courses' element={<MyCourse />}></Route>
                <Route path='/favorite-courses' element={<FavoriteCourse />}></Route>
                <Route path='/recommended-courses' element={<RecommendedCourse />}></Route>
                <Route path='/profile-setting' element={<ProfileSetting />}></Route>
                <Route path='/change-password' element={<ChangePassword />}></Route>
                {/* Teacher */}
                <Route path='/teacher-login' element={<TeacherLogin />}></Route>
                <Route path='/teacher-register' element={<TeacherRegister />}></Route>
                <Route path='/teacher-dashboard' element={<TeacherDashboard />}></Route>
                <Route path='/teacher-profile-setting' element={<TeacherProfileSetting />}></Route>
                <Route path='/teacher-courses' element={<TeacherCourse />}></Route>
                <Route path='/teacher-change-password' element={<TeacherChangePassword />}></Route>
                <Route path='/add-course' element={<AddCourse />}></Route>
                <Route path='/users-list' element={<UserList />}></Route>
                <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}></Route>

            </Routes>
            <Footer />
        </div>
    )
}

export default Main;
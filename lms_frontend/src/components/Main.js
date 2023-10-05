import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import About from './About'
import { Route, Routes } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import Login from './User/Login';
import Register from './User/Register';


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
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;
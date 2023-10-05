// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail(){
    // let {course_id} = useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Course Description</p>
                    <p className="fw-bold">Course By: <a href="...">Teacher name</a></p>
                    <p className="fw-bold">Duration: 3:30</p>
                    <p className="fw-bold">Total enrolled: 300 student</p>
                    <p className="fw-bold">Rating: 4/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <h5 className="card-header">
                    Course Video
                </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-5">1:30 mins</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Setup
                        <span className="float-end">
                            <span className="me-5">1:30 mins</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 1
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 mins</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 2
                        <span className="float-end">
                            <span className="me-5">30 mins</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 3
                        <span className="float-end">
                            <span className="me-5">2 Hour</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 4
                        <span className="float-end">
                            <span className="me-5">1 Hour 45 mins</span>
                            <button className="btn btn-sm btn-danger"><i class="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo192.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="/logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="https://www.google.com">Course title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CourseDetail;
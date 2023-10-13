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
                    <p className="fw-bold">Course By: <Link to="/teacher-detail/1">Teacher name</Link></p>
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
                            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#video1"><i className="bi bi-play-btn"></i></button>
                        </span>
                        {/* Modal Start */}
                        <div className="modal fade" id="video1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal End */}
                    </li>
                    <li className="list-group-item">Setup
                        <span className="float-end">
                            <span className="me-5">1:30 mins</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 1
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 mins</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 2
                        <span className="float-end">
                            <span className="me-5">30 mins</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 3
                        <span className="float-end">
                            <span className="me-5">2 Hour</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-btn"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 4
                        <span className="float-end">
                            <span className="me-5">1 Hour 45 mins</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-btn"></i></button>
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
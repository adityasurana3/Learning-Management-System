import { Link } from "react-router-dom";

function TeacherDetail(){

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Teacher Name</h3>
                    <p>Course Description</p>
                    <p className="fw-bold">Skills: <Link to="/teacher-detail/1">Python</Link>, <Link to="/teacher-detail/1">JavaScript</Link>, <Link to="/teacher-detail/1">C/C++</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="/teacher-detail/1">Python</Link></p>
                    <p className="fw-bold">Rating: 4/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <h5 className="card-header">
                    Course List
                </h5>
                <div className="list-group list-group-flush">
                    <Link to='/detail/1' className="list-group-item list-group-item-action">Python</Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action">JavaScript</Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action">C/C++</Link>
                </div>
            </div>
           
        </div>
    )

}

export default TeacherDetail;
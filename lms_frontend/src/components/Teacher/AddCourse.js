import TeacherSidebar from "./TeacherSidebar";

function AddCourse() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Course</h5>
            <div className="card-body">
              
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Course Video</label>
                    <input type="file" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Technologies</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <hr />
                <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddCourse;

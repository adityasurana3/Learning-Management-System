import Sidebar from "./Sidebar";

function ChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Change Settings</h5>
            <div className="card-body">
                <div classname="mb-3 row">
                    <label for="inputPassword" classname="col-sm-2 col-form-label">New Password</label>
                    <div classname="col-sm-10">
                        <input type="password" classname="form-control" id="inputPassword" />
                    </div>
                </div>
                <hr />
                <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChangePassword;

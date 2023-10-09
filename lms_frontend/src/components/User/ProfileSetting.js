import Sidebar from "./Sidebar";

function ProfileSetting() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Profile Settings</h5>
            <div className="card-body">
                <div classname="mb-3 row">
                    <label for="staticEmail" classname="col-sm-2 col-form-label">Full Name</label>
                    <div classname="col-sm-10">
                        <input type="text" readonly classname="form-control-plaintext" id="staticEmail"/>
                    </div>
                </div>
                <div classname="mb-3 row">
                    <label for="staticEmail" classname="col-sm-2 col-form-label">Email</label>
                    <div classname="col-sm-10">
                        <input type="text" readonly classname="form-control-plaintext" id="staticEmail"/>
                    </div>
                </div>
                <div classname="mb-3 row">
                    <label for="inputPassword" classname="col-sm-2 col-form-label">Password</label>
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

export default ProfileSetting;

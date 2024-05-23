import "./index.css";

const Login = () => {
  const onSubmitUserDetails = (event) => {
    event.preventDefault();

    let url = "https://apis.ccbp.in/login";
  };

  return (
    <div onSubmit={onSubmitUserDetails} className="my-cont bg-black">
      <form className="w-25 bg-light p-5 rounded">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <br />
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-w-25">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

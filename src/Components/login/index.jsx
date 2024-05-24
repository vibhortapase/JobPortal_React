import "./index.css";

const Login = () => {
  const onSubmitUserDetails = (event) => {
    
    let url = "https://apis.ccbp.in/login";
  };

  return (
    <div onSubmit={onSubmitUserDetails} className="my-cont bg-black">
      <form className=" form-UserInput p-5 rounded text-white">
        <div className="text-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="rounded websiteLogo"
            alt="website logo"
          />
        </div>
        <br /><br />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            placeholder="santosh"
            type="email"
            className="form-control bg-transparent text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            placeholder="santosh@2023"
            type="password"
            className="form-control bg-transparent text-white"
            id="exampleInputPassword1"
          />
        </div>
        <br />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-w-25">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

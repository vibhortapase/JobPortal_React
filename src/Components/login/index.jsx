import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [allValues, setValue] = useState({
    username: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",
  });

  const navigate = useNavigate();

  const token = Cookies.get("jswToken");

  const onSubmitUserDetails = async (event) => {
    event.preventDefault();

    const url = "https://apis.ccbp.in/login";

    const userDeatils = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDeatils),
    };

    let response = await fetch(url, options);
    let fetchData = await response.json();

    if (response.ok === true) {
      setValue({ ...allValues, showErrorMsg: false });
      Cookies.set("jswToken", fetchData.jwt_token);
      navigate("/");
    } else {
      setValue({
        ...allValues,
        showErrorMsg: true,
        errorMsg: fetchData.error_msg,
      });
    }
  };

  const onChangeUserName = (event) => {
    setValue({ ...allValues, username: event.target.value });
  };
  const onChangePassword = (event) => {
    setValue({ ...allValues, password: event.target.value });
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/");
    }
  });

  return (
    <div className="my-cont bg-black">
      <form
        onSubmit={onSubmitUserDetails}
        className=" form-UserInput p-5 rounded text-white"
      >
        <div className="text-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="rounded websiteLogo"
            alt="website logo"
          />
        </div>
        <br />
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            className="form-control bg-transparent text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUserName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control bg-transparent text-white"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        <br />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-w-25">
            Login
          </button>
        </div>
        <br />
        {allValues.showErrorMsg ? (
          <p className="text-danger">*{allValues.errorMsg} </p>
        ) : null}
      </form>
    </div>
  );
};

export default Login;

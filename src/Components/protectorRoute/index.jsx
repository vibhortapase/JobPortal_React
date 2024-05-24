import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectorRoute = (props) => {
  const { Component } = props;

  const token = Cookies.get("jswToken");

  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
    }
  }, []);

  return <Component />;
};

export default ProtectorRoute;

import "./index.css";
import { Link } from "react-router-dom";
import Header from "../header";

const Home = () => {
  return (
    <div className="home-cont">
      <Header></Header>
      <div className="home-info">
        <h1 className="home-heading">
          Find The Job That Fits <br />
          Your Life
        </h1>
        <br />
        <p className="fs-5 fw-bold">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <br />
        <Link to = "/jobs">
          <button type="button" className="btn btn-primary btn-lg">Find Jobs</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

const DisplayJobs = (props) => {
  const { jobItems } = props;
  return (
    <Link to={`/jobs/${jobItems.id}`} className="text-decoration-none">
      <li className="jobCard">
        <div className="my-const">
          <img className="card-company-logo" src={jobItems.company_logo_url} />
          <div className="compName-rating-cont">
            <h4 className="text-white">{jobItems.title}</h4>
            <FaStar className="ratingLogo" />
            <span className="text-white p-2">{jobItems.rating}</span>
          </div>
        </div>
        <div className="location-empType-package-cont mt-3">
          <div className="d-flex">
            <FaLocationDot className="icons pb-1" />
            <p className="text-white ms-1">{jobItems.location}</p>
            <BsBriefcaseFill className="icons ms-3 pb-1" />
            <p className="text-white ms-1">{jobItems.employment_type}</p>
          </div>
          <div className="text-white fs-5">
            <span>{jobItems.package_per_annum}</span>
          </div>
        </div>
        <hr className="hr" />
        <div className="description-cont text-white">
          <h5>Description</h5>
          <p>{jobItems.job_description}</p>
        </div>
      </li>
    </Link>
  );
};

export default DisplayJobs;

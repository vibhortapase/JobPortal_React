import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobItemDetail = () => {
  const [allValues, setValue] = useState({
    jobData: [],
    similarJobs: [],
  });
  const token = Cookies.get("jswToken");
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const url = `https://apis.ccbp.in/jobs/${id}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const jobDetail = await response.json();
      if (response.ok) {
        setValue({
          ...allValues,
          jobData: jobDetail.job_details,
          similarJobs: jobDetail.similar_jobs,
        });
      }
    };

    fetchJobDetails();
  }, []);
  return (
    <>
      <Header />
      {console.log(allValues)}
      <div className=" jobDetailPage  p-5">
        <div className="container jobDetailCard p-3">
          <div className="my-const">
            <img
              className="card-company-logo"
              src={allValues.jobData.company_logo_url}
            />
            <div className="compName-rating-cont">
              <h4 className="text-white">{allValues.jobData.title}</h4>
              <FaStar className="ratingLogo" />
              <span className="text-white p-2">{allValues.jobData.rating}</span>
            </div>
          </div>
          <div className="location-empType-package-cont mt-3">
            <div className="d-flex">
              <FaLocationDot className="icons pb-1" />
              <p className="text-white ms-1">{allValues.jobData.location}</p>
              <BsBriefcaseFill className="icons ms-3 pb-1" />
              <p className="text-white ms-1">
                {allValues.jobData.employment_type}
              </p>
            </div>
            <div className="text-white fs-5">
              <span>{allValues.jobData.package_per_annum}</span>
            </div>
          </div>
          <hr className="hr" />
          <div className="description-cont text-white">
            <div className="d-flex justify-content-between">
              <h5 className="text-bolder">Description</h5>
              <a href={allValues.jobData.company_website_url} target="_blank">
                <h5>
                  Visit <FaExternalLinkAlt className="mb-1" />
                </h5>
              </a>
            </div>
            <p>{allValues.jobData.job_description}</p>
          </div>
          <div className="skills-cont text-white mt-4">
            <h5>Skills</h5>
            <ul className="skills mt-2">
              {allValues.jobData.skills &&
                allValues.jobData.skills.map((each) => (
                  <li className="skillsList" key={each.name}>
                    <img
                      className="skillsIMG"
                      src={each.image_url}
                      alt={each.name}
                    />
                    <p className="mt-2">{each.name}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="text-white mt-4">
            <h5>Life at Company</h5>
            <div className="lifeCompany-cont">
              <p className="pe-5">
                {allValues.jobData.life_at_company &&
                  allValues.jobData.life_at_company.description}
              </p>
              <img
                className="lifeCompany-img"
                src={
                  allValues.jobData.life_at_company &&
                  allValues.jobData.life_at_company.image_url
                }
                alt="Company-Img"
              />
            </div>
          </div>
        </div>

        <br />

        <div className="container jobDetailCard bg-black text-white p-0">
          <h3 className="">Similar Jobs</h3>
          <ul className="similarJob-Cont">
            {allValues.similarJobs.map((each) => (
              <li key={each.id}>
                <div className="similarJob-List p-3">
                  <div className="my-const">
                    <img
                      className="card-company-logo"
                      src={each.company_logo_url}
                    />
                    <div className="compName-rating-cont">
                      <h4 className="text-white">{each.title}</h4>
                      <FaStar className="ratingLogo" />
                      <span className="text-white p-2">{each.rating}</span>
                    </div>
                  </div>
                  <br />
                  <h5>Description</h5>
                  <p>{each.job_description}</p>
                  <div className="location-empType-package-cont mt-3">
                    <div className="d-flex">
                      <FaLocationDot className="icons pb-1" />
                      <p className="text-white ms-1">
                        {allValues.jobData.location}
                      </p>
                      <BsBriefcaseFill className="icons ms-3 pb-1" />
                      <p className="text-white ms-1">
                        {allValues.jobData.employment_type}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobItemDetail;

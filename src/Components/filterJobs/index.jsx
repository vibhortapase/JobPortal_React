import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const FilerJobs = (props) => {
  const { empFilteritem } = props;
  const { packageFilteritem } = props;

  const token = Cookies.get("jswToken");

  const [allValues, setValue] = useState({
    profileData: [],
  });

  const empTypeList = [
    {
      label: "Full Time",
      empTypeID: "FULLTIME",
    },
    {
      label: "Part Time",
      empTypeID: "PARTTIME",
    },
    {
      label: "Freelance",
      empTypeID: "FREELANCE",
    },
    {
      label: "Internship",
      empTypeID: "INTERNSHIP",
    },
  ];

  const salaryRangeList = [
    {
      label: "10 LPA and above",
      salaryRangeID: "1000000",
    },
    {
      label: "20 LPA and above",
      salaryRangeID: "2000000",
    },
    {
      label: "30 LPA and above",
      salaryRangeID: "3000000",
    },
    {
      label: "40 LPA and above",
      salaryRangeID: "4000000",
    },
  ];

  useEffect(() => {
    const getProfile = async () => {
      const url = "https://apis.ccbp.in/profile";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const fetchData = await response.json();

      if (response.ok === true) {
        setValue({ ...allValues, profileData: fetchData.profile_details });
      }
    };

    getProfile();
  }, []);

  const onChangeEmpFilter = (event) => {
    empFilteritem(event.target.value, event.target.checked);
  };

  const onChangePackageFilter = (event) => {
    packageFilteritem(event.target.value, event.target.checked);
  };

  return (
    <>
      <div className="profileCard">
        <img
          className="profileImg"
          src={allValues.profileData.profile_image_url}
          alt="Profile-Avatar"
        />
        <h3 className="text-primary">{allValues.profileData.name}</h3>
        <p>{allValues.profileData.short_bio}</p>
        <br />
      </div>
      {/* --------------------------------------------------------------------    */}
      <hr className="hr-filter" />
      <div className="text-white empFilter-cont">
        <h5 className="">Type of Employment</h5>
        <ul className="liList">
          {empTypeList.map((each) => (
            <li className="mb-2" key={each.empTypeID}>
              <input
                className="checkbox-input"
                type="checkbox"
                value={each.empTypeID}
                id={each.empTypeID}
                onChange={onChangeEmpFilter}
              />
              <label htmlFor={each.empTypeID}>{each.label}</label>
            </li>
          ))}
        </ul>
      </div>
      {/* -------------------------------------------------------------------- */}
      <hr className="hr-filter" />
      <div className="text-white empFilter-cont">
        <h5 className="">Salary Range</h5>
        <ul className="liList">
          {salaryRangeList.map((each) => (
            <li className="mb-2" key={each.salaryRangeID}>
              <input
                className="checkbox-input"
                type="radio"
                name="fav_language"
                value={each.salaryRangeID}
                id={each.salaryRangeID}
                onChange={onChangePackageFilter}
              />
              <label htmlFor={each.salaryRangeID}>{each.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilerJobs;

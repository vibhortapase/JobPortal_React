import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import DisplayJobs from "../displayJobs";
import FilerJobs from "../filterJobs";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const Jobs = () => {
  const [allValues, setValue] = useState({
    jobList: [],
    empType: [],
    minPack: "",
    userSearch: "",
    variable: "",
    searchBtn: false,
  });
  const token = Cookies.get("jswToken");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPack}&search=${allValues.userSearch}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const jobData = await response.json();

      if (response.ok === true) {
        setValue({ ...allValues, jobList: jobData.jobs });
      }
    };
    fetchData();
  }, [allValues.userSearch, allValues.empType, allValues.minPack]);

  const onChangeUserSearch = () => {
    setValue({ ...allValues, userSearch: allValues.variable });
  };
  
  const onChangeUserSearchValue = (event) => {
    if (event.key === "Enter") {
      onChangeUserSearch();
    }
    else if(event.target.value === ""){
      setValue({ ...allValues, userSearch: "", variable: ""});
    }
    else {
      setValue({ ...allValues, variable: event.target.value });
    }
  };

  const EmploymentFilterFunc = (value, isChecked) => {
    if (isChecked) {
      setValue({ ...allValues, empType: [...allValues.empType, value] });
    } else {
      setValue({
        ...allValues,
        empType: allValues.empType.filter((each) => each !== value),
      });
    }
  };

  const PackageFilterFunc = (value, isChecked) => {
    setValue({ ...allValues, minPack: value });
  };

  return (
    <>
      <Header />
      <div className="job-cont">
        <div className="job-filter-section">
          <FilerJobs
            empFilteritem={EmploymentFilterFunc}
            packageFilteritem={PackageFilterFunc}
          />
        </div>
        <div className="all-job-display-section">
          <input
            placeholder="Search"
            value={allValues.variable}
            onChange={onChangeUserSearchValue}
            onKeyDown={onChangeUserSearchValue}
            type="search"
            className="userSearch"
          />
          <button type="submit" className="searchBtn" onClick={onChangeUserSearch}>
            <FaSearch />
          </button>
          <br />
          <ul>
            {allValues.jobList.map((each) => (
              <DisplayJobs jobItems={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;

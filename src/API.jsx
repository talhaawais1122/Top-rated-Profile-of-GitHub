import React, { useState, useEffect } from "react";
import "./Api.css";

const Api = () => {
  const [data, setData] = useState([]);

  const apiData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data1 = await response.json();
    setData(data1);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    
    <div className="container">
    
      <div className="row card-columns">
        {data.map((currData) => (
          <div className="card" key={currData.id} style={{ width: "18rem" }}>
            <img
              src={currData.avatar_url}
              className="card-img-top"
              alt={`${currData.login} Avatar`}
            />
            <div className="card-body">
              <h5 className="card-title">{currData.login}</h5>
              <p className="card-text">Profile URL <span> {currData.html_url}</span>:</p>
              <a href={currData.html_url} className="btn btn-primary">
                Go to Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;

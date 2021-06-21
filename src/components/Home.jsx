import React, { useState, useEffect } from "react";
import "./Home.css";
import UserCard from "./UserCard";
import LazyLoad from "react-lazyload";
import { Spinner } from "./Spinner";
import axios from "axios";

function Home() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=150").then((res) => {
      console.log("response from API", res.data);
      setDatas(res.data.results);
      setLoading(false)
    }).catch(err => {
      console.log(err)
    });
  }, []);
  console.log(datas);
  if (loading) {
    return <Spinner/>
  }
  return (
      <div className="cards-container">
        {datas.map((data, idx) => (
          <LazyLoad key={idx} placeholder={<Spinner />} height={150}>
            <UserCard
              key={idx}
              firstName={data.name.first}
              lastName={data.name.last}
              celuller={data.cell}
              email={data.email}
              country={data.location.country}
              picture={data.picture.large}
            />
          </LazyLoad>
        ))}
      </div>
  );
}

export default Home;

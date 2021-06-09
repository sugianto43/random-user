import React from "react";
import "./Home.css";
import UserCard from "./UserCard";
import LazyLoad from "react-lazyload";
import { Spinner } from "./Spinner";

function Home() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    8, 9,
  ];
  return (
    <>
      <div className="cards-container">
        {data.map((datas, idx) => (
          <LazyLoad key={idx} placeholder={<Spinner />}>
            <UserCard key={idx} />
          </LazyLoad>
        ))}
      </div>
    </>
  );
}

export default Home;

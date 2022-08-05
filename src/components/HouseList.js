import React, { useContext } from "react";

import { HouseContext } from "./HouseContext";

import House from "./House";

import { Link } from "react-router-dom";

import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl lg:mt-[400px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 ">
        Sorry, nothing found!
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:pt-48 gap-4 lg:grid-cols-3">
          {houses.map((house, i) => {
            return (
              <Link to={`/property/${house.id}`} key={i}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;

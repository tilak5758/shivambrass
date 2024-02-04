import React from "react";
import Heading from "../components/common/Heading";
import Teams from "../components/home/Team";
import Swiper from "../components/home/Swiper";
import MySwiper from "../components/home/Swiper";

export default function Team() {
  return (
    <>
      <Heading heading="Team" title="Home" subtitle="Team" />
      {/* <Teams /> */}
      <MySwiper/>
    </>
  );
}

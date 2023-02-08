import React from "react";
import Header from "./components/header";
import HeroBanner from "./components/home/heroBanner";
import FeaturedProfile from "./components/home/featuredProfile";
import SuccessStories from "./components/home/successStories";
import FooterUI from "../pages/components/footer"
import "../assets/styles/home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <HeroBanner/>
            <FeaturedProfile/>
            <SuccessStories/>
            <FooterUI/>
        </>
    );
};

export default Home;

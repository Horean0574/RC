import React from "react";
import Layout from "../components/Layout";
import movie from "../assets/video/movie.mp4";

function Home() {
    return (
        <Layout headline={"RC社招人啦！欢迎加入！"} headTip={"只收初一的"}>
            <video src={movie} controls autoPlay loop style={{
                width: "100%",
                borderRadius: "16px",
            }}></video>
        </Layout>
    );
}

export default Home;

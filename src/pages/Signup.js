import React from "react";
import Layout from "../components/Layout";

function Signup() {
    return (
        <Layout headline={"RC社团报名"}>
            <iframe src="http://rc.horean0574.xyz" frameBorder="0" title={"RC社报名问卷星"} style={{
                width: "100%",
                height: "100%",
            }}></iframe>
        </Layout>
    );
}

export default Signup;

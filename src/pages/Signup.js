import React from "react";
import Layout from "../components/Layout";
// import jinshuju
//     from "https://jinshuju.net/f/x3zLor/embedded.js?inner_redirect=false&banner=show&background=white&height=301"

function Signup() {
    return (
        <Layout headline={"RC社团报名"}>
            <iframe style={{
                minHeight: "calc(100% - 1em)",
            }} id="goldendata_form_x3zLor"
                    src="https://jinshuju.net/f/x3zLor?background=white&banner=show&embedded=true&inner_redirect=false"
                    width="100%" frameBorder={0} allowTransparency="true"></iframe>
        </Layout>
    );
}

export default Signup;

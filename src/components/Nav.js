import React from "react";
import Button from "@mui/material/Button";
import Section from "./Section";

class Nav extends React.Component {
    render() {
        let style = {
            sec: Object.assign({
                width: "calc(15% - 16px)",
                height: "600px",
                textAlign: "center",
                backgroundColor: "rgba(156, 156, 156, 0.25)",
            }, this.props.style),
            btn: {
                display: "block",
                margin: "8px 0",
            },
        };
        return (
            <Section style={style.sec}>
                <Button variant={"outlined"} size={"large"} color={"success"} href={"/"}
                        style={style.btn}>主页</Button>
                <Button variant={"outlined"} size={"large"} color={"primary"} href={"/about"}
                        style={style.btn}>简介</Button>
                <Button variant={"outlined"} size={"large"} color={"secondary"} href={"/signup"}
                        style={style.btn}>报名</Button>
            </Section>
        );
    }
}

export default Nav;

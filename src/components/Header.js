import React from "react";
import Section from "./Section";
import "../styles/Header.css";

class Header extends React.Component {

    render() {
        let style = {
            sec: Object.assign({
                display: "block",
                backgroundColor: "rgba(156, 156, 156, 0.25)",
            }, this.props.style),
        };
        return (
            <Section style={style.sec}>
                <h1 id={"headline"}>
                    <span id={"headline-text"} onClick={() => {
                        window.location.reload();
                    }}>{this.props.content}</span>
                </h1>
                {(this.props.tip !== "") && <h4 id={"tip"}>{this.props.tip}</h4>}
            </Section>
        );
    }
}

export default Header;

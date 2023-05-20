import React from "react";
import Section from "./Section";

class Footer extends React.Component {
    render() {
        let style = {
            sec: Object.assign({
                display: "block",
                textAlign: "center",
                backgroundColor: "rgba(156, 156, 156, 0.25)",
            }, this.props.style),
        }
        return (
            <Section style={style.sec}>
                <p>技术支持：吴文迪 刘天逸</p>
                <p>技术顾问：肖浩然</p>
            </Section>
        );
    }
}

export default Footer;

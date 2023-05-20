import React from "react";
import Section from "./Section";

class Article extends React.Component {
    render() {
        let style = {
            sec: Object.assign({
                width: "calc(85% - 16px)",
                height: "600px",
                backgroundColor: "rgba(156, 156, 156, 0.25)",
            }, this.props.style),
        };
        return (
            <Section style={style.sec}>
                {this.props.children}
            </Section>
        );
    }
}

export default Article;

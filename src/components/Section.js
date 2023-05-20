import React from "react";

class Section extends React.Component {
    render() {
        let style = {
            sec: Object.assign({
                position: "relative",
                margin: "8px",
                padding: "16px",
                borderRadius: "16px",
                display: "inline-block",
                verticalAlign: "top",
                boxSizing: "border-box",
                overflow: "auto",
            }, this.props.style),
        };
        return (
            <section style={style.sec}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;

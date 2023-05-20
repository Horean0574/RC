import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header content={this.props.headline} tip={this.props.headTip}/>
                <Nav/>
                <Article>
                    {this.props.children}
                </Article>
                <Footer/>
            </>
        );
    }
}

export default Layout;

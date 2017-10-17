import React from "react";
import { Link } from "react-router";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <div className="App">
          <div className="header">
            <Header/>
          </div>        
          <div className="body">
            <div className="content">
              {this.props.children}
            </div>
            <div className="sidebar">
              <SideBar/>
            </div>      
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
        {/* <Nav/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div> */}
      </div>

    );
  }
}

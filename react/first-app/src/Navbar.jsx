import React, { Component } from "react";
import './toggle.css'

export default class Navbar extends Component {
    state={
        isDark:false
    }
  render() {

    const dark='navbar navbar-expand-lg navbar-dark bg-dark'
    const primary='navbar navbar-expand-lg navbar-dark bg-primary'

    const changeColor=()=>{
        // if(this.state.isDark==true)
        // {
        //     this.setState({
        //         isDark:false
        //     })
        // }
        // else{
        //     this.setState({
        //         isDark:true
        //     })
        // }
        this.setState({
            isDark:!this.state.isDark
        })
    }
    return (
      <div>
        <nav className={this.state.isDark ? dark : primary }>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
             
              <li className="nav-item ">
                    <label className="switch">
                    <input onClick={changeColor} type="checkbox" defaultChecked />
                    <span className="slider round" />
                    </label>
              </li>
            </ul>
          </div>
        </nav>
               

      </div>
    );
  }
}

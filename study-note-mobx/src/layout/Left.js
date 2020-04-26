import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'

function Left() {
    return (
    <div className="main-sidebar">
            <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
                <a href="index.html">Study Note</a>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
            </div>
            <ul className="sidebar-menu">
                <li className="menu-header">Dashboard</li>
                <li className="nav-item dropdown active">
                    <a href="!#" className="nav-link has-dropdown">
                        <i className="fas fa-fire"></i>
                        <span>Test</span>
                    </a>
                    <ul className="dropdown-menu list-group">
                        <li><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>Home</NavLink></li>
                        <li><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/about"}>About</NavLink></li>
                    </ul>
                </li>
            </ul>
            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <i className="fas fa-rocket"></i> Documentation
            </a>
            </div>
            </aside>
        </div>
  )
}
export default Left;
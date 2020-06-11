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
                <li>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>
                        <i className="far fa-square"></i> 
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/option"}>
                        <i className="far fa-square"></i> 
                        <span>Option</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/card"}>
                        <i className="far fa-square"></i>
                        <span>New Note</span>
                    </NavLink>
                </li>
                <li className="menu-header"><hr/></li>
                <li>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/note"}>
                        <i className="far fa-square"></i>
                        <span>Notes</span>
                    </NavLink>
                </li>
                {/*
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
                */}
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
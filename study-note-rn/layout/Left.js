import React from 'react';
import { Link } from 'router';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { A, Div } from 'components/commons';

function Left() {
    return (
    <Div className="main-sidebar">
        <Div id="sidebar-wrapper">
            <Div className="sidebar-brand">
                <Text href="index.html">Study Note</Text>
            </Div>
            <Div className="sidebar-brand sidebar-brand-sm">
                <A href="index.html">St</A>
            </Div>
            <Div className="sidebar-menu">
                {/*<FontAwesome name="square"/>*/}
                <Div>
                    <Link className="nav-link" exact = "true" to={"/"}>
                        <Div>
                            <FontAwesome name="square"/>
                            <Text>Home</Text>
                        </Div>
                    </Link>
                </Div>
                <Div>
                    <Link className="nav-link" exact = "true" to={"/option"}>
                        <Div>
                            <FontAwesome name="square"/>
                            <Text>Option</Text>
                        </Div>
                    </Link>
                </Div>
                <Div>
                    <Link className="nav-link" exact = "true" to={"/note/new"}>
                        <Div>
                            <FontAwesome name="square"/>
                            <Text>New Note</Text>
                        </Div>
                    </Link>
                </Div>
                <Div style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}></Div>
                <Div>
                    <Link className="nav-link" exact = "true" to={"/note"}>
                        <Div>
                            <FontAwesome name="square"/>
                            <Text>Notes</Text>
                        </Div>
                    </Link>
                </Div>
                {/*
                <Div className="nav-item dropdown active">
                    <a href="!#" className="nav-link has-dropdown">
                        <i className="fas fa-fire"></i>
                        <Text>Test</Text>
                    </a>
                    <Div className="dropdown-menu list-group">
                        <Div><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>Home</NavLink></Div>
                        <Div><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/about"}>About</NavLink></Div>
                    </Div>
                </Div>
                */}
            </Div>
            <Div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <A href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <FontAwesome name="rocket"/> Documentation
            </A>
            </Div>
            </Div>
        </Div>
  )
}
export default Left;
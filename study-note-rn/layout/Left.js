import React from 'react';
import {NavLink} from 'react-router-dom'
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare,faRocket } from '@fortawesome/free-solid-svg-icons'

function Left() {
    return (
    <View className="main-sidebar">
        <View id="sidebar-wrapper">
            <View className="sidebar-brand">
                <Text href="index.html">Study Note</Text>
            </View>
            <View className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
            </View>
            <View className="sidebar-menu">
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>
                        <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon>
                        <Text>Home</Text>
                    </NavLink>
                </View>
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/option"}>
                    <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon>
                        <Text>Option</Text>
                    </NavLink>
                </View>
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/note/new"}>
                    <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon>
                        <Text>New Note</Text>
                    </NavLink>
                </View>
                <View className="menu-header"><hr/></View>
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/note"}>
                    <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon>
                        <Text>Notes</Text>
                    </NavLink>
                </View>
                {/*
                <View className="nav-item dropdown active">
                    <a href="!#" className="nav-link has-dropdown">
                        <i className="fas fa-fire"></i>
                        <Text>Test</Text>
                    </a>
                    <View className="dropdown-menu list-group">
                        <View><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>Home</NavLink></View>
                        <View><NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/about"}>About</NavLink></View>
                    </View>
                </View>
                */}
            </View>
            <View className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <Text href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> Documentation
            </Text>
            </View>
            </View>
        </View>
  )
}
export default Left;
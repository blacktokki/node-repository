import React from 'react';
import {NavLink} from 'react-router-dom'
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import A from 'components/commons/A'

function Left() {
    return (
    <View className="main-sidebar">
        <View id="sidebar-wrapper">
            <View className="sidebar-brand">
                <Text href="index.html">Study Note</Text>
            </View>
            <View className="sidebar-brand sidebar-brand-sm">
                <A href="index.html">St</A>
            </View>
            <View className="sidebar-menu">
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/"}>
                    <FontAwesome name="square"/>
                        <Text>Home</Text>
                    </NavLink>
                </View>
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/option"}>
                    <FontAwesome name="square"/>
                        <Text>Option</Text>
                    </NavLink>
                </View>
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/note/new"}>
                    <FontAwesome name="square"/>
                        <Text>New Note</Text>
                    </NavLink>
                </View>
                {/*<View className="menu-header"><hr/></View>*/}
                <View>
                    <NavLink className="nav-link" exact activeClassName={"font-weight-bold text-primary"} to={"/note"}>
                    <FontAwesome name="square"/>
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
            <A href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <FontAwesome name="rocket"/> Documentation
            </A>
            </View>
            </View>
        </View>
  )
}
export default Left;
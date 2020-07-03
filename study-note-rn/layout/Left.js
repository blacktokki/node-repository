import React from 'react';
import { Link } from 'router/router'
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
                {/*<FontAwesome name="square"/>*/}
                <View>
                    <Link className="nav-link" exact = "true" to={"/"}>
                        <View>
                            <FontAwesome name="square"/>
                            <Text>Home</Text>
                        </View>
                    </Link>
                </View>
                <View>
                    <Link className="nav-link" exact = "true" to={"/option"}>
                        <View>
                            <FontAwesome name="square"/>
                            <Text>Option</Text>
                        </View>
                    </Link>
                </View>
                <View>
                    <Link className="nav-link" exact = "true" to={"/note/new"}>
                        <View>
                            <FontAwesome name="square"/>
                            <Text>New Note</Text>
                        </View>
                    </Link>
                </View>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}></View>
                <View>
                    <Link className="nav-link" exact = "true" to={"/note"}>
                        <View>
                            <FontAwesome name="square"/>
                            <Text>Notes</Text>
                        </View>
                    </Link>
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
import React from 'react';
import { View, Text,Button,TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { A } from 'components/commons'
import Div from './Div';

function Header() {
  return (
    <View className="main-header">
      <Div className="navbar-bg"></Div>
      <Div className="navbar navbar-expand-lg main-navbar">
        <View className="form-inline mr-auto" style={{ flexDirection: "row"}}>
          <View className="navbar-nav mr-3" style={{ flexDirection: "row"}}>
            <View><A href="!#" data-toggle="sidebar" className="nav-link nav-link-lg"><FontAwesome name="bars" style={{fontSize: 20, color: 'white'}}/></A></View>
            {/*<View><A href="!#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><FontAwesome name="search" style={{fontSize: 30}}/></A></View>*/}
          </View>
          <View className="search-element" style={{ flexDirection: "row"}}>
            <TextInput className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" style={{width:250}}/>
            <FontAwesome.Button name="search"/>
            <View className="search-backdrop"></View>
            {/*
            <View className="search-result">
              <View className="search-header">
                <Text children="Histories"/>
              </View>
              <View className="search-item">
                <a href="!#">How to hack NASA using CSS</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </View>
              <View className="search-item">
                <a href="!#">Kodinger.com</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </View>
              <View className="search-item">
                <a href="!#">#Stisla</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </View>
              <View className="search-header">
              <Text children="Result"/>
              </View>
              <View className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-3-50.png"} alt="product"/>
                  oPhone S9 Limited Edition
                </a>
              </View>
              <View className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-2-50.png"} alt="product"/>
                  Drone X2 New Gen-7
                </a>
              </View>
              <View className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-1-50.png"} alt="product"/>
                  Headphone Blitz
                </a>
              </View>
              <View className="search-header">
                <Text children="Projects"/>
              </View>
              <View className="search-item">
                <a href="!#">
                  <View className="search-icon bg-danger text-white mr-3">
                    <i className="fas fa-code"></i>
                  </View>
                  Stisla Admin Template
                </a>
              </View>
              <View className="search-item">
                <a href="!#">
                  <View className="search-icon bg-primary text-white mr-3">
                    <i className="fas fa-laptop"></i>
                  </View>
                  Create a new Homepage Design
                </a>
              </View>
            </View>
            */}
          </View>
        </View>
        {/*
        <ul className="navbar-nav navbar-right">
        </ul>
        */}
      </Div>
    </View>
  );
}

export default Header;

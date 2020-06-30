import React from 'react';
import { View, Text,Button,TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <View className="main-header">
      <View className="navbar-bg"></View>
      <View className="navbar navbar-expand-lg main-navbar">
        <View className="form-inline mr-auto">
          <View className="navbar-nav mr-3">
            <View><Text href="!#" data-toggle="sidebar" className="nav-link nav-link-lg"><FontAwesomeIcon icon={faBars}/></Text></View>
            <View><Text href="!#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><FontAwesomeIcon icon={faSearch}/></Text></View>
          </View>
          <View className="search-element">
            <TextInput className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250"/>
            <Button className="btn" type="submit" title={<FontAwesomeIcon icon={faSearch}/>}></Button>
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
      </View>
    </View>
  );
}

export default Header;

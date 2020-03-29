import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Anatomy from "./screens/anatomy/";
import DetailArticle from "./screens/detailArticle/";
import LoginUser from "./screens/loginUser/";
import SignUpUser from "./screens/signUpUser/";
import MyProfile from "./screens/myProfile/";
import SideBar from "./screens/sidebar";

const Drawer = createDrawerNavigator(
  {
    Anatomy: { screen: Anatomy },
    DetailArticle: { screen: DetailArticle },
    LoginUser: { screen: LoginUser },
    SignUpUser: { screen: SignUpUser },
    MyProfile: { screen: MyProfile }
  },
  {
    initialRouteName: "LoginUser",
    contentOptions: {
    activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;

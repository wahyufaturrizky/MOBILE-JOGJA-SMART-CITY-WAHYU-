import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Card,
  CardItem,
  cardImage,
  Body,
  Grid,
  Col
} from "native-base";

import {
  View,
} from "react-native";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover2.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Home",
    route: "Anatomy",
    // icon: "phone-portrait",
  },
  {
    name: "Profile",
    route: "MyProfile",
  },
  {
    name: "Tour",
    route: "Anatomy",
  },
  {
    name: "Article",
    route: "Anatomy",
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <View style={styles.drawerImage}>
            <View style={{backgroundColor: "#F7F7F7", alignItems: "center", paddingVertical: 16, borderRadius: 10}}>
              <View style={{borderColor: "#DADADA", borderWidth: 2, borderRadius: 30, padding: 10}}>
                <Icon style={{fontSize: 32, color: "#CFBFB1"}} type="SimpleLineIcons" name="user" />
              </View>
              <Text style={{marginTop: 8}}>Wahyu Fatur Rizki</Text>
              <Text caption>Indonesia</Text>
            </View>
          </View>

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
          <Grid style={{marginTop: 16}}>
            <Col style={{alignItems: "center"}}>
              <Icon style={{color:"#CFBFB1"}} type="AntDesign" name="twitter" />
            </Col>
  
            <Col style={{alignItems: "flex-start"}}>
              <Icon style={{color:"#CFBFB1"}} type="AntDesign" name="instagram" />
            </Col>
          </Grid>                     
          <Grid style={{marginTop: 54, marginBottom: 8}}>
            <Col style={{alignItems: "center"}}>
              <Icon style={{color:"#E1949E"}} name="ios-log-out" />
            </Col>
  
            <Col style={{alignItems: "flex-start"}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginUser")}><Text style={{color:"#E1949E"}}>Sign Out</Text></TouchableOpacity>
            </Col>
          </Grid>                     
        </Content>
      </Container>
    );
  }
}

export default SideBar;

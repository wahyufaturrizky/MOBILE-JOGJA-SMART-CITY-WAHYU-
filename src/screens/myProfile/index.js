import React, { Component } from "react";
import Carousel from 'react-native-banner-carousel';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Item,
  Input,
  Form,
  Card,
  CardItem,
  Thumbnail,
  Body,
  ListItem,
  H3,
  Platform
} from "native-base";

import { 
  Image,
  View,
  Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
const cardImage05 = require("../../../assets/drawer-cover_05.jpg");
const wahyu = require("../../assets/img/author.jpg");

class MyProfile extends Component {

  renderPage(image, index) {
    return (
    <View key={index}>
      <Image style={{ width: BannerWidth, height: BannerHeight }}
        source={require("../../assets/img/banner01.jpg",)} />
      <View
        style={{width: '100%', height: 280, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0)', position: 'absolute'}}>
      </View>
    </View>
    );
    }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent>
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("Anatomy")}
            >
              <Icon style={{color:"black"}} name="user" type="SimpleLineIcons" />
            </Button>
          </Left>

          <Body>
            <Title style={{color: "black"}}>My Profile</Title>
          </Body>
          <Right/>
        </Header>

        <ScrollView>
          <Content padder>

            <Card style={{marginTop: 24,}}>
              <CardItem cardBody>
                <Image source={cardImage05} style={{height: 200, width: null, flex: 1}} />
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail source={wahyu} />

                  <Body>
                    <Text>Wahyu Fatur Rizki</Text>
                    <Text style={{marginTop: 8}} note><Icon style={{fontSize: 16}} name="map" type="SimpleLineIcons" /> Indonesia, Batam</Text>
                    <Text style={{marginTop: 8}} note><Icon style={{fontSize: 16}} name="phone" type="SimpleLineIcons" /> 0822 7458 6011</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <H3 style={{marginTop: 24}}>Info Saya</H3>

            <ListItem style={{marginTop: 24}} icon>
              <Left>
                <Button style={{ backgroundColor: "#e74645" }}>
                  <Icon active type="SimpleLineIcons" name="user" />
                </Button>
              </Left>

              <Body>
                <Text>Info Personal</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button style={{ backgroundColor: "#fb7756" }}>
                  <Icon active type="SimpleLineIcons" name="wallet" />
                </Button>
              </Left>

              <Body>
                <Text>Info Saldo</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button style={{ backgroundColor: "#1ac0c6" }}>
                  <Icon active type="SimpleLineIcons" name="lock" />
                </Button>
              </Left>

              <Body>
                <Text>Ubah Kata Sandi</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button style={{ backgroundColor: "#456de6" }}>
                  <Icon active type="SimpleLineIcons" name="bubbles" />
                </Button>
              </Left>

              <Body>
                <Text>FAQ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{marginTop: 16}} icon>
              <Left>
                <Button onPress={() => this.props.navigation.navigate("LoginUser")} style={{ backgroundColor: "#e64545" }}>
                  <Icon active type="SimpleLineIcons" name="logout" />
                </Button>
              </Left>

              <Body>
                <Text>Log Out</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button style={{backgroundColor: "white"}} active={this.state.tab1} onPress={() => this.props.navigation.navigate("Anatomy")}>
              <Icon active={this.state.tab1} style={{color: "black"}} type="SimpleLineIcons" name="home" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} style={{color: "black"}} type="SimpleLineIcons" name="magnifier" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} style={{color: "black"}} type="SimpleLineIcons" name="compass" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} style={{color: "black"}} type="SimpleLineIcons" name="user" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MyProfile;

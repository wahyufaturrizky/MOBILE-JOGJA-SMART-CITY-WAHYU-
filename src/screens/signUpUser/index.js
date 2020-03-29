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
  Grid,
  Col,
  H3,
  Badge
} from "native-base";

import { 
  Image,
  View,
  Dimensions, 
  TouchableOpacity} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
const cardImage04 = require("../../../assets/drawer-cover_04.jpg");
const wahyu = require("../../assets/img/author.jpg");

class SignUpUser extends Component {

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
            <Button transparent>
              <Icon style={{color:"black"}} type="SimpleLineIcons" name="user" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black"}}>Sign Up</Title>
          </Body>
          <Right/>
        </Header>

        <ScrollView>
          <Content padder>
            {/* Sign In */}
            <H3 style={{marginTop: 16, textAlign: "center"}}>Yuk Daftar Sedulur!</H3>
            <Text style={{marginTop: 8, textAlign: "center"}}>Sign Up</Text>

            <Button onPress={() => this.props.navigation.navigate("Anatomy")} transparent block rounded style={{borderColor: "#CFAD8A", marginTop: 24, borderWidth: 1}}>
              <Text style={{color: "#CFAD8A"}}>Continue as a Guest</Text>
            </Button>

            <Item rounded style={{marginTop: 24}}>
              <Icon active name='user' type="SimpleLineIcons" />
              <Input placeholder='Fullname'/>
            </Item>

            <Item rounded style={{marginTop: 24}}>
              <Icon active name='envelope-open' type="SimpleLineIcons" />
              <Input placeholder='Email'/>
            </Item>

            <Item rounded style={{marginTop: 16}}>
              <Icon active name='phone' type="SimpleLineIcons" />
              <Input placeholder='Mobile Number'/>
            </Item>

            <Item rounded style={{marginTop: 16}}>
              <Icon active name='key' type="SimpleLineIcons" />
              <Input placeholder='Password'/>
            </Item>

            <Item rounded style={{marginTop: 16}}>
              <Icon active name='key' type="SimpleLineIcons" />
              <Input placeholder='Comfirm Password'/>
            </Item>

            <Button onPress={() => this.props.navigation.navigate("Anatomy")} block rounded style={{backgroundColor: "#CFAD8A", marginTop: 24}}>
              <Text>Sign Up</Text>
            </Button>

            <Text style={{marginTop: 32, textAlign: "center", fontWeight: "100"}}>Already have an account:</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginUser")}><Text style={{color: "#CFAD8A", fontWeight: "bold", textAlign: "center"}}> Sign In</Text></TouchableOpacity>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default SignUpUser;

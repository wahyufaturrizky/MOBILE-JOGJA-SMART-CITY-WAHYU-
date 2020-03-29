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

class LoginUser extends Component {

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
            <Title style={{color: "black"}}>Sign In</Title>
          </Body>
          <Right/>
        </Header>

        <ScrollView>
          <Content padder>
            {/* Sign In */}
            <H3 style={{marginTop: 16, textAlign: "center"}}>Halo Sedulur!</H3>
            <Text style={{marginTop: 8, textAlign: "center"}}>Sign In</Text>

            <Item rounded style={{marginTop: 24}}>
              <Icon active name='user-following' type="SimpleLineIcons" />
              <Input placeholder='Username'/>
            </Item>
            <Item rounded style={{marginTop: 16}}>
              <Icon active name='key' type="SimpleLineIcons" />
              <Input placeholder='Password'/>
            </Item>

            <Button 
              block 
              rounded 
              style={{backgroundColor: "#CFAD8A", marginTop: 24}}
              onPress={() => this.props.navigation.navigate("Anatomy")}
              >
              <Text>Sign In</Text>
            </Button>

            <Text style={{color: "#828282", marginTop: 8}}>Forgot Password</Text>

            <Text style={{marginTop: 16, textAlign: "center"}}>Or Sign in with</Text>

            <Grid style={{marginTop: 24}}>
              <Col>
                <Button block rounded style={{backgroundColor: "#DC4E42"}}>
                <Icon active name='social-google' type="SimpleLineIcons" />
                <Text>Google</Text>
              </Button>
              </Col>
              <Col style={{marginLeft: 16}}>
                <Button block rounded style={{backgroundColor: "#3B5999"}}>
                <Icon active name='social-facebook' type="SimpleLineIcons" />
                <Text>Facebook</Text>
              </Button>
              </Col>
            </Grid>

            <Text style={{marginTop: 32, textAlign: "center", fontWeight: "100"}}>Dont have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUpUser")}><Text style={{color: "#CFAD8A", fontWeight: "bold", textAlign: "center"}}> Sign Up</Text></TouchableOpacity>

          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default LoginUser;

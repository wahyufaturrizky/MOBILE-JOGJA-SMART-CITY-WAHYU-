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
  List,
  ListItem
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

const news_icon = require("../../assets/img/news_220px.png");
const tour_icon = require("../../assets/img/tour_220px.png");
const info_icon = require("../../assets/img/info_2020px.png");
const article_icon = require("../../assets/img/scroll_220px.png");
const cardImage01 = require("../../../assets/drawer-cover_01.jpg");
const cardImage02 = require("../../../assets/drawer-cover_02.jpg");
const cardImage03 = require("../../../assets/drawer-cover_03.jpg");
const cardImage04 = require("../../../assets/drawer-cover_04.jpg");

const images = [
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg"
];

class Anatomy extends Component {

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
        <Carousel autoplay autoplayTimeout={5000} loop index={0} pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
        <View style={{position: "absolute",left: 8, right: 8}}>
          <Header style={{paddingLeft: 0}} transparent androidStatusBarColor="#fff">
            <Left>
              <Button style={{paddingLeft: 0}} transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon style={{color: "#fff"}} type="SimpleLineIcons" name="menu" />
              </Button>
            </Left>
            <Right/>
          </Header>
          <View style={{position: "absolute",left: 8, right: 8, top: 255}}>
            <Form style={{backgroundColor: "white"}} searchBar rounded>
            <Item>
              <Input placeholder="Yuk cari tujuan wisata Anda disini?" />
              <Icon active name="search" />
            </Item>
          </Form>
          </View>
        </View>

        <ScrollView style={{marginTop: 50}} >
          <Content padder>
            <Grid>
              <Col>
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>News</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={news_icon} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>

              <Col style={{marginLeft: 8}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Tour</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={tour_icon} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Grid>

            <Grid style={{marginTop: 8}}>
              <Col>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Info</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={info_icon} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
              <Col style={{marginLeft: 8}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={{fontSize: 13}}>Article</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Thumbnail source={article_icon} />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Grid>
            {/* List Article */}
            <H3 style={{marginTop: 24}}>Popular Article</H3>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Grid>
                <Col>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailArticle")}>
                  <Card  style={{marginTop: 8, marginLeft: 12, width: 150, height: 150}}>
                    <CardItem cardBody>
                      <Image style={{
                        resizeMode: "cover",
                        width: null,
                        height: 100,
                        flex: 1
                        }} source={cardImage04} />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Puncak Pinus Pengger wisata Jogja</Text>
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12, width: 150, height: 150}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage02} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Puncak Pinus Pengger wisata Jogja</Text>
                    </Left>
                  </CardItem>
                </Card>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12, width: 150, height: 150}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage03} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Candi Borobudur</Text>
                    </Left>
                  </CardItem>
                </Card>
                </Col>
                <Col>
                <Card style={{marginTop: 8, marginLeft: 12, width: 150, height: 150}}>
                  <CardItem cardBody>
                    <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 100,
                      flex: 1
                      }} source={cardImage01} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>Candi Prambanan</Text>
                    </Left>
                  </CardItem>
                </Card>
                </Col>
              </Grid>   

            </ScrollView>

            {/* List Article */}
            <H3 style={{marginTop: 24}}>List Article</H3>

            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={cardImage04} />
                </Left>

                <Body>
                  <Text>Puncak Pinus Pengger</Text>
                  <Text note>Wisata jogja satu ini . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate("DetailArticle")}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={cardImage03} />
                </Left>

                <Body>
                  <Text>Puncak Pinus Pengger</Text>
                  <Text note>Wisata jogja satu ini . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
            
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={cardImage02} />
                </Left>

                <Body>
                  <Text>Puncak Pinus Pengger</Text>
                  <Text note>Wisata jogja satu ini . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={cardImage01} />
                </Left>

                <Body>
                  <Text>Puncak Pinus Pengger</Text>
                  <Text note>Wisata jogja satu ini . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button style={{backgroundColor: "white"}} active={this.state.tab1} >
              <Icon active={this.state.tab1} style={{color: "black"}} type="SimpleLineIcons" name="home" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} style={{color: "black"}} type="SimpleLineIcons" name="magnifier" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} style={{color: "black"}} type="SimpleLineIcons" name="compass" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab4} onPress={() => this.props.navigation.navigate("MyProfile")}>
              <Icon active={this.state.tab4} style={{color: "black"}} type="SimpleLineIcons" name="user" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Anatomy;

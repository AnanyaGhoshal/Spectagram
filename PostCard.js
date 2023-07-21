import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png")}
                        ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{this.props.post.caption}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea:{
    marginTop: Platform.OS ==="android"  ?StatusBar.currentHeight : RFValue(35)
  },
  cardContainer:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  authorContainer:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  authorImageContainer:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"},
  authorNameContaine:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"},
  authorNameText:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"},
  captionContainer:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  captionText:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"},
  actionContainer:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"},
  likeButton:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"}



  

});

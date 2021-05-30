import React, { Component } from "react";
import { ScrollView, View, Animated } from "react-native";
import ProductVerticalList from "../../Components/ProductVerticalList";
import ProductHorizontalList from "./../../Components/ProductHorizontalList";
import AddProductButton from "./Components/AddProductButton";
import { Icon } from "native-base";
import { Alert } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { TouchableOpacity } from "react-native";

export default class Home extends React.Component {

  // componentWillMount() {
  //   this.addButtonTopPosition = new Animated.Value(100);
  // }

     componentDidMount() {
      console.log(this.props.navigation);
     }

  
  // showAddButton = () => {
  //   Animated.timing(this.addButtonTopPosition, {
  //     toValue: 0,
  //     duration: 500
  //   }).start();
  // };

  // hideAddButton = () => {
  //   Animated.timing(this.addButtonTopPosition, {
  //     toValue: 100,
  //     duration: 500
  //   }).start();
  // };

  // _onScroll = event => {
  //   const currentOffset = event.nativeEvent.contentOffset.y;
  //   const dif = currentOffset - (this.offset || 0);
  //   if (Math.abs(dif) < 3) {
  //   } else if (dif < 0) {
  //     this.showAddButton();
  //   } else {
  //     this.hideAddButton();
  //   }

  //   this.offset = currentOffset;
  // };
 
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#1C222E'
    },
    headerLeft: (
      <TouchableOpacity
      //onPress={ () => this.props.navigation()} 
      >
        <Icon
        type="Entypo"
        name="menu"
        style={{ color: "#fff", marginLeft: 15 }}
        //onPress={ () => this.props.navigationOptions.()}
        />
      </TouchableOpacity>
      


    ),
    headerRight: (
      <View style={{ flexDirection: "row" }}>
        <Icon
          type="EvilIcons"
          name="search"
          style={{ color: "#fff", marginRight: 15 }}
        />
        <Icon
          type="EvilIcons"
          name="heart"
          style={{ color: "#fff", marginRight: 10 }}
        />
      </View>
    )
  };

  render() {

    //const { navigate } = this.props.navigation;

    return (

      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ backgroundColor: "#fbeef2", flex: 1 }}
          onScroll={this._onScroll}
        >
          <ProductHorizontalList />
          <ProductVerticalList />
        </ScrollView>
        <Animated.View
          style={{
            flex: 1,
            position: "absolute",
            width: "100%",
            top: this.addButtonTopPosition
          }}
        >
          <AddProductButton {...this.props}/>
        </Animated.View>
      </View>
    );
  }
}

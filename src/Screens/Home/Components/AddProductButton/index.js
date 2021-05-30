import React, { Component } from "react";

import { Text } from "react-native";
import {Button,ButtonContainer } from "./style";
import { Icon } from "native-base";
import { navigation } from "react-navigation";
import { render } from "react-dom";


//const {b} = this.props;

const AddProductButton = ({navigation} = this.props.navigation ) => (
  
  <ButtonContainer      
  >
  
    <Button 
      onPress={() => navigation.navigate('Upload_Deal')}
    >  

      <Text
        style={{
          color: "#fff",
          padding: 5,
          fontWeight: "bold",
          fontSize: 20
        }}>
        +
      </Text>
    </Button>
  </ButtonContainer>
);

export default AddProductButton;

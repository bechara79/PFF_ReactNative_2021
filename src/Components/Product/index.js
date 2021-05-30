import React from "react";
import {
  Container,
  Description,
  Title,
  ProductImage,
  Price,
  Date,
  Button
} from "./styles";
import  { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Product = props => (
  <Container>
    <ProductImage source={{ uri: props.item.image }} />
    <Description>
      <Title>{props.item.title}</Title>
      <Price>{props.item.price.toFixed(2)} MAD</Price>
      <Date>{props.item.data}</Date>
      <TouchableOpacity  >
      <Text
        style={{
          color: "#61C5FF",
          textAlign: "right",  
          marginStart :145,   
          fontWeight: "bold",
          fontSize: 20
        }}>
        VIEW DEAL
      </Text>
      
      </TouchableOpacity>
    </Description>
  </Container>
);
export default Product;

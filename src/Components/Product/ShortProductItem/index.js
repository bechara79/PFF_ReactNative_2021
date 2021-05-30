import React from "react";
import {text} from "react-native";

import {
  ContainerShort,
  DescriptionShort,
  TitleShort,
  ProductImageShort,
  PriceShort
} from "./styles";

const ShortProductItem = props => (
  <ContainerShort>
    <ProductImageShort source={{ uri: props.item.image }} />
    <DescriptionShort>
      <TitleShort >{props.item.title}</TitleShort>
      <PriceShort> {props.item.price.toFixed(2)} MAD</PriceShort>  
    </DescriptionShort>
  </ContainerShort>
);
export default ShortProductItem;

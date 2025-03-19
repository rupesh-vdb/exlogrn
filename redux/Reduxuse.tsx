import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Products from "./Products";
import { ScrollView } from "react-native-gesture-handler";


const Reduxuse = () => {
  const product = [
    {
      id: 1,
      name: "Item1",
      price: 100,
    },
    {
      id: 2,
      name: "Item2",
      price: 200,
    },
    {
      id: 3,
      name: "Item3",
      price: 300,
    },
    {
      id: 4,
      name: "Item4",
      price: 400,
    },
    {
      id: 5,
      name: "Item5",
      price: 500,
    }
  ];
  return (
    <View>
      <Header />
      <ScrollView style={{padding: 20}}>
      {product.map((item) =><Products item={item} />)
      }
      </ScrollView>
    </View>
  );
};

export default Reduxuse;
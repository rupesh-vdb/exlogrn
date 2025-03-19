import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const cartData = useSelector((state: { reducer: any }) => state.reducer);
  const [cartitems,setcartitems]=useState(0);
  useEffect(() => {
    setcartitems(cartData.length);
  }, [cartData])
  return (
    <View>
        <Text style={{fontSize:30, textAlign: "center", padding:5, color: "black"}}>{cartitems}</Text>
    </View>
  );
};

export default Header;
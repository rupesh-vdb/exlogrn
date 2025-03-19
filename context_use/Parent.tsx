import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import First from "./First";

//Create, Provide, Use
export const Cc = createContext(null);
const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  const reset=()=>{
    setCount(0);
  };
  return (
    <Cc.Provider value={{ count, increment, decrement, reset}}>
      <View>
        <First />
      </View>
    </Cc.Provider>
  );
};

export default Parent;

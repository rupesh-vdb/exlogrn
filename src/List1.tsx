import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Parent from "../context_use/Parent";
import Main from "../redux_toolkit_use/Main";
import Test from "../Test"
// type List1Props = {
//   store: string[];
//   setStore: React.Dispatch<React.SetStateAction<string[]>>;
// };

const List1 = (route) => {
  const { store, setStore } = route.route.params;
const [storeArray, setStoreArray] = useState<string[]>([]);
  useEffect(() => {
    setStoreArray(store)
  }, [store]);
  const clearData = () =>{
    setStore([]);
    setStoreArray([]);
  }
  return (
    <View style={{ backgroundColor: "#1E1A3C" }}>
    <View style={{ backgroundColor: "#1E1A3C" }}>
      <Text style={{color:"white", padding:20, fontSize:20}}>List of Items</Text>

      <View style={{ padding: 20, backgroundColor: "#3E3364" }}>
        {storeArray.map((item, index) => (
          <Text key={index} style={{ color:"white", marginBottom: 5 }}>
            {item}
          </Text>
        ))}
      </View>

      <Button title="Clear" color="gray" onPress={() => clearData()} />
    </View>
    {/* <Parent/> */}
    {/* <Main/> */}
    {/* <test/> */}
    <Text style={{padding:400}}>..</Text>
    </View>
  );
};

export default List1;

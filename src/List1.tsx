import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

type List1Props = {
  store: string[];
  setStore: React.Dispatch<React.SetStateAction<string[]>>;
};

const List1 = (route) => {
  const { store } = route.route.params;
const [storeArray, setStoreArray] = useState<string[]>([]);
  useEffect(() => {
    setStoreArray(store)
  }, [store]);
  const clearData = () =>{
    setStoreArray([""])
  }
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>List of Items</Text>

      <View style={{ padding: 20 }}>
        {storeArray?.map((item, index) => (
          <Text key={index} style={{ marginBottom: 5 }}>
            {item}
          </Text>
        ))}
      </View>

      <Button title="Clear" color="gray" onPress={() => clearData()} />
    </View>
  );
};

export default List1;

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Animated, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-query";

function App({ store, setStore }) {
  const [data, setData] = useState<any[]>([]);
  const getapidata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getapidata();
  }, []);
  // useQuery(){
  //     querykey:['posts'],
  //     queryFn:getapidata,
  // };
  const renderItem = ({ item }: { item: any }) => (
    <View style={{ padding: 10, borderBottomWidth: 2, borderColor: "#ccc" }}>
      <Text style={{ fontSize: 18 }}>User ID: {item.userId}</Text>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    // <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
    //     <Text style={{ fontSize: 24, marginBottom: 10 }}>API Data</Text>
    //     <FlatList
    //         data={data}
    //         renderItem={renderItem}
    //     />
    // </View>
    <ScrollView style={{ flex: 1, padding: 20, bottom: 200 }}>
      <FlatList
        style={{ backgroundColor: "#3E3364"}}
        data={data}
        // renderItem={renderItem}
        renderItem={({ item }) => (
            <Button
              title={`User ID ${item.userId} : ${item.title} `}
              color="#3E3364" 
              onPress={() => {
                if (!store.includes(item.title)) {
                  setStore([...store, item.title]);
                }
              }}
            />
          )}
      />
    </ScrollView>
  );
}

export default App;

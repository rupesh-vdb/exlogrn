import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import List1 from "./List1";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const gg = (firstName: string, secondName: string, thirdName: string) => {
  return firstName + secondName + thirdName;
};

type RootStackParamList = {
  List1: {
    store: string[];
    setStore: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const list = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState("");
  const [store, setStore] = useState<string[]>([]);
  const pushtoarray = () => {
    if (text.trim() === "") {
      Alert.alert("Empty Input", "Please enter a todo item.");
      return;
    }
    if (!store.includes(text)) {
      setStore((prevStore) => [...prevStore, text]);
      Alert.alert("Added", `"${text}" added to the list.`);
      setText("");
    } else {
      Alert.alert("Duplicate", `"${text}" is already in the list.`);
    }
    setText("");
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.first}>
        <Text>Todo list</Text>
      </View>
      <TextInput
        style={styles.second}
        placeholder="What do you want to do?"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.third} onPress={pushtoarray}>
        <Text>{"Are you sure?"}</Text>
      </TouchableOpacity>
      <View style={{ padding: 20 }}>
        <Button
          title="Check added items here"
          onPress={() =>
            navigation.navigate("List1", { store: store })
          }
        />
      </View>
      {/* <View style={[styles.box, {backgroundColor: 'powderblue'}]} /> */}
      {/* <List1 store={store} setStore={setStore} />  */}
      {/* <View>
             <View style={{ padding: 20 }}>
                {store.map((item, index) => (
                <Text key={index} style={{ marginBottom: 5 }}>{item}</Text>
                ))}
            </View>
            <Button title="Clear" color="gray" onPress={() => setStore([])} />
            </View>    */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
    height: 100,
  },
  first: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 50,
    height: 100,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  second: {
    flex: 1,
    height: 40,
    margin: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  third: {
    flex: 1,
    backgroundColor: "peachpuff",
    padding: 10,
    margin: 20,
    alignItems: "center",
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default list;

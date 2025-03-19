import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { Cc } from './Parent';

const Subclass = () => {
    const {count, increment, decrement, reset}=useContext(Cc);
  return (
    <View>
        <Text style={{color:"white"}}>Counter : {count}</Text>
        <Button title="Increment" onPress={increment}></Button>
        <Button title="Decrement" onPress={decrement}></Button>
        <Button title="Reset" onPress={reset}></Button>
    </View>
  )
}

export default Subclass
import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addtocart, removefromcart } from "./action";

const Products = (props) => {
  const item=props.item;
  const dispatch = useDispatch();
  const carItems = useSelector((state: { reducer: any }) => state.reducer);
  const [isadded, setisadded]=useState(false);
  const handleaddtocart = (item) =>{
      // console.warn('added to cart', item);
      dispatch(addtocart(item));
  }
  const handleremovefromcart=(item)=>{
    dispatch(removefromcart(item));
  }
  useEffect(()=>{
    // if(carItems && carItems.length){
    //   carItems.forEach((element)=>{
    //     if(element.name==item.name){
    //       setisadded(true);
    //     }
    //   })
    // }
    let result=carItems.filter((element)=>{
      return element.name===item.name;
    });
    if(result.length){
      setisadded(true);
    }else{
      setisadded(false);
    }
  },[carItems])
  return (
    <View style={{alignItems: "center", padding: 70, margin: 10, borderWidth: 2, borderColor: "black"}}>
      <Text style={{fontSize:20, padding:5}}>{item.id}</Text>
      <Text style={{fontSize:20, padding:5}}>{item.name}</Text>
      <Text style={{fontSize:20, padding:5}}>Price : {item.price}</Text>
      {
        isadded?
        <Button title="Remove from cart" onPress={()=>handleremovefromcart(item)}/>
        :
        <Button title="Add to cart" onPress={()=>handleaddtocart(item)}/>
      }
    </View>
  );
};

export default Products;
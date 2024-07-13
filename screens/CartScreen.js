
import React, { useEffect, useState } from "react";
import{View,Text, SafeAreaView,Image,FlatList,Button,TouchableOpacity,ScrollView, Alert}from 'react-native';
import STYLES from "../styles";
import Clotya from "../Clotya";


//import CartPage from "./cartShopping";

const CartScreen=({navigation})=>{ //route
    

//function from total
    const[total,setTotal]=useState('');

    const CartCard=({clotya})=>{

       return(
           //image flatlist cartcard
        <TouchableOpacity activeOpacity={0.99} onPress={()=>{
            setTotal(clotya.price)
        }}>
<View style={STYLES.cartcard}>
    <Image source={clotya.img}
        style={{height:90,width:90}}
    />
    <View style={{height:100,marginLeft:10,paddingVertical:10,flex:1}}>
<Text style={{fontWeight:'bold',fontSize:16}}>{clotya.name}</Text>
<Text style={{fontSize:17,color:"gray"}}>{clotya.price}</Text>
    </View>

    {/* button cart  */}

   <View style={STYLES.cartBtn}>
    <TouchableOpacity >
<Image source={require('../assets/muinos.png')}
    style={{width:10,height:30}}
/>
</TouchableOpacity>
<Text style={{marginLeft:9}}>1</Text>
<TouchableOpacity>
<Image source={require('../assets/plusicon.png')}
    style={{width:30,height:30}}
/>
</TouchableOpacity>
    </View>

</View>
</TouchableOpacity>
        );
    };
    

    return(
<SafeAreaView style={{backgroundColor:'white',flex:1,}}>
<ScrollView>
<View style={STYLES.headerCart}>
{/*icon goBack */}

<TouchableOpacity onPress={()=>navigation.goBack()}>
<Image source={require('../assets/icon.png')} 
    style={{width:40,height:40}}/>
    </TouchableOpacity>
    <Text style={{fontSize:20,fontWeight:'bold',color:'#87ceeb'}}>Cart Shopping</Text>
</View>

{/*<FlatList showsVerticalScrollIndicator={false} 
contentContainerStyle={{paddingBottom:80}}
data={Clotya}
renderItem={({item}) => <CartCard clotya={item} 
/>}

/>*/}


<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:3 ,margin:20}}>

    <Text style={{fontSize:20,fontWeight:'bold'}}>Total Price</Text>
    <Text style={{fontSize:20,fontWeight:'bold'}}>${total}</Text>

    <View style={{backgroundColor:'#87ceeb',borderRadius:20,flex:0.8,marginHorizontal:5,width:108,height:49,marginLeft:7,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <TouchableOpacity>
<Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Checkout</Text>
</TouchableOpacity>
</View>
</View>


</ScrollView>
</SafeAreaView>
    );
};
export default CartScreen;
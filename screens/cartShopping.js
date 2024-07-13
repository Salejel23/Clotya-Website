import React ,{useEffect, useState}from "react";
import {View,Text,FlatList, TouchableOpacity}from 'react-native';
import STYLES from "../styles";
import SQLite from 'react-native-sqlite-storage';
import Clotya from "../Clotya";
import { Button } from "react-native-paper";




const CartPage=()=>{
    const [cart,setCart]=useState([]);
    const[products,setProducts]=useState([]);

    useEffect(()=>{
db.transaction((tx)=>{
tx.executesql(
'CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY  AUTOINCREMENT, name TEXT, price REAL)',
[],
);
tx.executesql('SELECT * FROM products',[],(_,{rows})=>{
    console.log(rows._array)
    setProducts(rows._array);
});


});
    },[]);
    const addToCart=(product)=>{
        db.transaction((tx)=>{
            tx.executesql('INSERT INTO cart(name,price)VALUES(?,?)',
            [product.name,product.price]);
        });
      
    };

    const removeFromCart=(productId)=>{
        db.transaction((tx)=>{
            tx.executesql(
                'DELET FROM products '
            [productId],
            (tx,results)=>{
               
            }
            
            )
        })
    }

    const renderCartItem=({item})=>(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
        </View>
    );

    
    return(
        <View>
     
            <FlatList data={products}
            keyExtractor={(item)=>item.id.toString()}
             renderItem={({item})=>(
            <View style={{flex:1,margin:8}}>
               <Text>{item.name}</Text>
               <Text>${item.price}</Text>
             <TouchableOpacity style={{backgroundColor:'#87ceeb',borderRadius:20,flex:0.4,marginHorizontal:5,width:90,height:30,alignItems:'center',justifyContent:'center',marginLeft:267}}>
                <Text>DELET</Text>
             </TouchableOpacity>
              {/* <Button title='Add to cart' onPress={()=>addToCart(item)}/>*/}
            </View>
             )}
            />
        </View>
    
    )


    
}





export default CartPage;

import React, { useEffect, useState } from "react";
import{ View,Text, SafeAreaView,Image,TouchableOpacity,Button,ScrollView ,FlatList}from 'react-native';
import STYLES from "../styles";
import Clotya from "../Clotya";
import {createProductsTable} from "../AppDB";


const DetailsScreen=({navigation,route})=>{

createProductsTable();

    //category list and usestate category 
    const Categories=['S','M','L','XL','XXL'];

    const[categoryIndex,setCategoryIndex]=useState(0);
  const [products,setProducts]=useState([]);

    const CategoryList=()=>{
        return<View style={STYLES.category}>
            {Categories.map((item,index)=>(
                <TouchableOpacity key={index} onPress={()=>setCategoryIndex(index)} activeOpacity={0.8}>
                <Text  style={[STYLES.categoryText,categoryIndex == index &&STYLES .categoryTextSelected]}>
                {item}
                </Text>
                </TouchableOpacity>
            ))}
        </View>
    }
    const clotya=route.params;





    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
<View style={STYLES.headerD}>
{/*left Arrow */}
<TouchableOpacity onPress={()=>navigation.goBack()}>
  <Image source={require('../assets/icon.png')}
  style={{width:40,height:40}}/>
  </TouchableOpacity>
    {/*Icon Shopping cart*/}
    <TouchableOpacity>
    <Image source={require('../assets/iconShoop.png')}
        style={{width:40,height:40 ,marginLeft:260}}  />
        </TouchableOpacity>
        </View>
{/*image details */}
    <View style={STYLES.imageContainer}>
<Image source={clotya.img} style={{flex:1,resizeMode:'contain',width:300}}/>
    </View>
    <View style={{marginTop:10,margin:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>{clotya.name}</Text>
    </View>
    {/*action Button */}
    <TouchableOpacity>
<View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={STYLES.actionBtn}>
<Text style={STYLES.borderBtn}>-</Text>
    </View>
    <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:8}}>1</Text>
<View style={STYLES.actionBtn}>
    <Text style={STYLES.borderBtn}>+</Text>
</View>
</View>
</TouchableOpacity>

{/*size text */}
    <View style={{margin:6,marginTop:11}}>
<Text style={{fontSize:18,fontWeight:'bold'}}>Size</Text>
    </View>
<CategoryList/>
<View style={{marginTop:2}}>
    <Text style={{fontSize:16,fontWeight:'bold',margin:7}}>Description</Text>
</View>
<View style={{margin:6}}>
    <Text style={{fontSize:18,color:'lightgray'}}>{clotya.about}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
<Text style={{fontSize:17,margin:6,fontWeight:'bold'}}>Total price</Text>
<Text style={{fontSize:17,margin:6,fontWeight:'bold'}}>{clotya.price}</Text>
</View>


<View style={{backgroundColor:'lightgray',borderRadius:7,flex:0.2,marginHorizontal:8,width:100,marginLeft:256,alignItems:'center',justifyContent:'center'}} >
<Button title= " Add Cart" 
onPress={()=>navigation.navigate('cart')}
/>
</View>




        </SafeAreaView>
    );
};
export default DetailsScreen;
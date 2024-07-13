
import React, { useState } from "react";
import {View,Text, SafeAreaView,TouchableOpacity,TextInput,FlatList,Image,ScrollView, ScrollViewBase }from "react-native";
import STYLES from "../styles";
import Clotya from "../Clotya";



 const HomeScreen=({navigation})=>{
 const Categories=['Adidas','Nike','Reebok','Puma'];

const[categoryIndex,setCategoryIndex]=useState(0)

const CategoryList=()=>{
return(
<SafeAreaView style={STYLES.Category}>
{Categories.map((item,index)=>(
  <TouchableOpacity key={index} 
  activeOpacity={0.8}
  onPress={()=>setCategoryIndex(index)}>
  <Text 
  style={[
    STYLES.categoryText,
    categoryIndex == index && STYLES. categoryTextSelected
    ]}>
    {item}
    </Text>
    </TouchableOpacity>
))}
</SafeAreaView>
);
};

   {/*cart */}
const Card = ({clotya}) => {
return(

  <TouchableOpacity onPress={()=>navigation.navigate("details",clotya)}>
<View style={STYLES.card}>
<View style={{height:189,alignItems:'center',justifyContent:'center'}}>
<Image style={{flex:0.90,resizeMode:'contain'}} source={clotya.img}/>
</View>
<View style={{marginTop:15}}>
<Text style={{fontSize:15,fontWeight:'bold'}}>{clotya.name}</Text>
</View>
<View style={{flexDirection:"row",margin:4}}>
<Text style={{fontSize:14,fontWeight:'bold'}}>${clotya.price}</Text>
</View>
</View>
</TouchableOpacity>

);
};

  return(
<SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:'white'}}>
<ScrollView>
<View style={STYLES.header}>
<TouchableOpacity onPress={()=>navigation.goBack()}>
<Image source={(require('../assets/icon.png'))}
  style={{width:40,height:40,margin:6}}
/>
</TouchableOpacity>
<View>
  <Text style={{fontSize:40,fontWeight:"bold",color:'#87ceeb'}}>Clotya </Text>
</View>
{/*icon sopping */}
<Image source={require('../assets/iconShoop.png')}
style={{width:40,height:40,margin:6}}
/>
</View>

<View style={STYLES.header1}>
<View>
<Text style={{fontSize:30,fontWeight:'bold'}}>Hello</Text>
<Text style={{fontSize:25,color:'lightgray'}}>Welcome to Clotya</Text>
</View>
</View>
      {/*search */}
<View style={{marginTop:10,flexDirection:'row' ,margin:7}}>
<View style={STYLES.search}>
  <TextInput placeholder="Search"  style={STYLES.inputSE}/>
</View>
{/*icon mic */}
<Image source={require('../assets/micIcon.png')} 
style={{width:50,height:40}}/>
</View>
{/*choose &view all */}
<View style={{flexDirection:'row',alignItems:"flex-start",justifyContent:'space-between',marginTop:20,margin:10}}>
<Text style={{fontSize:20,fontWeight:'bold'}}>Choose Brand</Text>
<TouchableOpacity>
<Text styl={{fontSize:25,color:'lightgray'}}>View All</Text>
</TouchableOpacity>
</View> 

 {/* CategoryList */}
<CategoryList/>
{/*Anew Arravial&view all text */}
<View style={{margin:10,flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',marginTop:2}}>
  <Text style={{fontSize:20,fontWeight:'bold'}}>Anew Arraival</Text>
  <TouchableOpacity>
  <Text styl={{fontSize:25,color:'lightgray'}}>View All</Text>
  </TouchableOpacity>
</View>

  {/*flat list proudact */}
  <View>
<FlatList 
columnWrapperStyle={{justifyContent:'space-between'}}
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  marginTop:4,
  marginBottom:10,
}}
numColumns={2} 
  data={Clotya}
renderItem={({item})=> <Card clotya = {item}/>}

/>
</View>
</ScrollView>
</SafeAreaView>
  );
 };



 
export default HomeScreen;
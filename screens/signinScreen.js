
import React ,{useEffect, useState}from "react";
import{SafeAreaView, View,ScrollView,Text,TextInput,Image,TouchableOpacity, Alert
} from 'react-native';
import STYLES from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";





function SignInScreen ({navigation}){

    const [password,setPassword]=useState("");
    const[username,setUserName]=useState("");

    useEffect(()=>{
getData();
    },[]);
const getData=()=>{
  try{
AsyncStorage.getItem('USER')
.then(value=>{
  if(value!==null){
    navigation.navigate('home')
  }
})
  }catch{

  }
}

const setData = async()=>{
  if(username.length==0){
Alert.alert('opps','Enter Data')
  }else{
    try{
AsyncStorage.setItem('USER',username);
navigation.navigate('home');
    }catch(e){
console.log(error);
    }
  }
}

return( 
<SafeAreaView style={{paddingHorizontal:50,flex:1}}>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{marginTop:40 ,alignItems:'center'}}>
    <Text style={{fontSize:35,fontWeight:'bold',color:'black'}}> Welcome </Text>
    <Text style={{fontSize:18,fontWeight:'bold',color:'lightgray'}}> please enter your data to continue  </Text>
</View>

   <View style={{marginTop:7}}>
<View style={STYLES.inputContainer}>
        {/*username */}
    <TextInput 
style={STYLES.input}
      placeholder="Enter your email"
        onChangeText={(username)=>setUserName(username)}
        
      />
   </View>
</View>

  <View style={{marginTop:20}}>
<View style={STYLES.inputContainer}>
     {/*password */}
<TextInput style={STYLES.input} 
placeholder="Enter your password" 
secureTextEntry
    onChangeText={(password)=>setPassword(password)}
/>

</View>
  </View>
   {/*forgot password text */}
  <View style={{alignItems:'flex-end',  marginTop:20,margin:20}}>
<TouchableOpacity>
    <Text style={{fontSize:17,color:'red'}}>Forgot password?</Text>
</TouchableOpacity>
  </View>
    {/*remember text  */}
  <View style={{alignItems:'flex-start',marginTop:20,margin:20}}>
    <Text style={{fontSize:17}}>Remember Me</Text>
  </View>
     {/*login */}
 <View style={{marginLeft:"10%"}}>
    <TouchableOpacity 
    onPress={setData}
    style={STYLES.login}
    
    >
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>login</Text>
    </TouchableOpacity>
 </View>
     {/*or text */}
 <View 
 style={{marginVertical:20,
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 }}>
<View style={STYLES.line}></View>
<Text style={{fontWeight:'bold',marginHorizontal:5}}>OR</Text>
<View style={STYLES.line}></View>
 </View>
 {/*btn face & google */}
 <View 
 style={{
    flexDirection:'row',
    justifyContent:"space-around"}}>
<View style={STYLES.btn1}>
<Text style={{fontWeight:"bold",color:'white'}}>Facebook</Text>
<Image  style={STYLES.btnImage}
source={{uri:'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BHkEd6znUYJ.png'}}/>
</View>
<View style={{width:2}}/>
<View style={STYLES.btn2}>
<Text style={{fontWeight:"bold",color:'white'}}>Google</Text>
<Image 
style={STYLES.btnImage}
    source={{uri:'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg'}}
/>
</View>
 </View>
     {/*no account text */}
 <View style={{flexDirection:"row",alignItems:'flex-end',justifyContent:'center',marginTop:40,marginBottom:20}}>
<Text style={{color:'lightgray',fontWeight:'bold',fontSize:17}}>No account?</Text> 
<TouchableOpacity>
<Text style={{fontWeight:'bold',fontSize:17}}>Create a new one</Text>
</TouchableOpacity>
 </View>
</ScrollView>
</SafeAreaView>
);
};

export default SignInScreen;
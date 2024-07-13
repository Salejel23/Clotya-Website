
import React from "react";
import { StyleSheet ,Dimensions} from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const width= Dimensions.get("screen").width /2-10;

const STYLES=StyleSheet.create({
inputContainer:{
    flexDirection:'row',
       marginTop:10
},
input:{
    borderBottomWidth:0.7,
    flex:0.9,
    color:'lightgray',
    padding:10,
    fontSize:20,
    margin:5,
  

},

login:{
width:'88%',
height:53,
justifyContent:'center',
alignItems:'center',
marginTop:10,
backgroundColor:'#1e90ff',
},
line:{
    height:2,
    width:155,
    backgroundColor:'lightgray',
 alignItems:'center'
},
btn1:{
    height:60,
    borderWidth:2,
    borderColor:'lightgray',
flex:0.4,
borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:"#4169e1"
},
btn2:{
    height:60,
    borderWidth:2,
    borderColor:'lightgray',
flex:0.4,
borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:"#ff0000"
},
btnImage:{
    width:30,
    height:30,
    marginLeft:5,
},
/*page home screen */
header:{
    marginTop:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
justifyContent:'space-between'

},
header1:{
    marginTop:20,
flexDirection:'row',
justifyContent:'space-between',
margin:8
},
search:{
    height:40,
backgroundColor:"lightgray",
borderRadius:10,
flex:1,
flexDirection:'row',
alignContent:"center",
width:50,
justifyContent:'space-between'

},
inputSE:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    flex:0.77, 
    margin:11
},
Category:{
    flexDirection:'row',
    marginTop:5,
    marginBottom:1,
    justifyContent:'space-between',
},
categoryText:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    margin:11,
},
categoryTextSelected:{
    color:'#87ceeb',
    paddingBottom:4,
    borderBottomWidth:4,
   
},
card:{
    height:280,
    backgroundColor:'light',
width,
marginHorizontal:5,

borderRadius:10,
marginTop:15,
    padding:11,
    margin:20,
},
//DetalisScreen
/* Header DetalisScreen */
headerD:{
    paddingHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:"space-between",
    

},
imageContainer:{
    flex:0.74,
    justifyContent:"center",
    alignItems:'center',

},
actionBtn:{
borderColor:"gray",
borderWidth:1,
borderRadius:6,
height:40,
width:20,
justifyContent:'center',
alignItems:'center',

},
borderBtn:{
    fontWeight:"bold",
    fontSize:28,
},

category:{
    flexDirection:'row',
    marginTop:3,
    marginBottom:10,
    justifyContent:'space-between',
    backgroundColor:"#dcdcdc",
    borderRadius:30,
  margin:5,
},

/*page CartScreen */

//headerCart
headerCart:{
paddingVertical:20,
flexDirection:'row',
alignItems:'center',
marginHorizontal:20,
justifyContent:'space-between',
marginRight:104
},
cartcard:{
    height:100,
    elevation:15,
    borderRadius:10,
    backgroundColor:'lightgray',
    marginVertical:10,
    marginHorizontal:10,
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
},
cartBtn:{
    width:80,
    height:30,
    backgroundColor:"#87ceeb",
    borderRadius:30,
    paddingHorizontal:17,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},

});
export default STYLES; 
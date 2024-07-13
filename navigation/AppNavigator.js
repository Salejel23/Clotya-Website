
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../screens/signinScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CartScreen from "../screens/CartScreen";

const stack=createStackNavigator();




const AppNavigator=()=>{
return(
<NavigationContainer>
<stack.Navigator screenOptions={{header:()=>null}}>

<stack.Screen name="Login" component={SignInScreen}/>
<stack.Screen name="home" component={HomeScreen}/>
<stack.Screen name="details" component={DetailsScreen}/>
<stack.Screen name="cart" component={CartScreen}/>




</stack.Navigator>
</NavigationContainer>
);
};





export default AppNavigator;
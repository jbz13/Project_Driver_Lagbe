import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";

const firebaseConfig = {
    apiKey: "AIzaSyDUtW60GROI47_RWQxPfjnFqLkVlfMpPxk",
    authDomain: "driver-lagbe-8998f.firebaseapp.com",
    databaseURL: "https://driver-lagbe-8998f-default-rtdb.firebaseio.com",
    projectId: "driver-lagbe-8998f",
    storageBucket: "driver-lagbe-8998f.appspot.com",
    messagingSenderId: "864675084904",
    appId: "1:864675084904:web:e7d145be908e545db2d9dd",
    measurementId: "G-LZB7NBCKRP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
};

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
};

function App() {
    return (
        <AuthProvider>
            <AuthContext.Consumer>
                {(auth) => (
                    <NavigationContainer>
                        {auth.IsLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
                    </NavigationContainer>
                )}
            </AuthContext.Consumer>
        </AuthProvider>
    );
}

export default App;

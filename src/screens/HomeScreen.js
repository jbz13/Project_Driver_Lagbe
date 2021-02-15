import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

import { AuthContext } from "../providers/AuthProvider";

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View>
                    <Text>Welcome to HomeScreen!!</Text>
                    <Button
                        type="outline"
                        title="Log Out!"
                        onPress={function () {
                            auth.setIsLoggedIn(false);
                        }}
                    />
                </View>
            )}
        </AuthContext.Consumer>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
    },
});

export default HomeScreen;
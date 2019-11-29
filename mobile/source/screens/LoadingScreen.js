import React, { Component } from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet
 } from "react-native";
 import Icon from "react-native-vector-icons/FontAwesome";
 import GradientView from "../nativeComponents/GradientView";

 export default class LoadingScreen extends Component {
     constructor(props) {
         super(props);
     }

     render() {

        return(
            <GradientView
                fromColor="#004EFF"
                toColor="#222222"
                cornerRadius={0}
                progress={0.5}
                style={[styles.screen]}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={[styles.contianer, {flex: 1}]}>
                        <Icon 
                            name="search"
                            size={56}
                            color={"#FFFFFF"}/>
                            
                        <Text style={[styles.text]}>
                            Give us a moment to find the truth…
                        </Text>
                    </View>
                </SafeAreaView>
            </GradientView>
        );
     }
 }

 const styles = StyleSheet.create({
     text: {
         fontSize: 16,
         color: "#FFF",
         fontFamily: "OpenSans-Semibold",
         marginTop: 16
     },
     screen: {
         flex: 1
     },
     contianer: {
         justifyContent: "center",
         alignItems: "center"
     }
 });
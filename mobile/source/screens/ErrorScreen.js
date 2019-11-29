import React, { Component } from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet
 } from "react-native";
 import Icon from "react-native-vector-icons/FontAwesome5";
 import GradientView from "../nativeComponents/GradientView";
import Button from "../component/Button";

 export default class ErrorScreen extends Component {
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
                    <View style={styles.contianer}>
                        <Icon 
                            name="spider"
                            size={56}
                            color={"#FFFFFF"} 
                            style={styles.icon} />
                        <Text style={[styles.text]}>
                            {"Sorry, this publisher isn’t in our web.\nWe’re working hard to wrap this up."}
                        </Text>
                        <Button 
                            text="Make Another Inquiry" 
                            action={() => {}} 
                            style={styles.button}/>
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
         marginTop: 32
     },
     screen: {
         flex: 1
     },
     contianer: {
         justifyContent: "center",
         alignItems: "center",
         flex: 1
     },
     icon: {
        transform: [
            { rotate: "180deg"}
        ]
     },
     button: {
        alignSelf: "center",
        marginTop: 32
     }
 });
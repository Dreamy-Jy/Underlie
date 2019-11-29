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

 export default class ResultsScreen extends Component {
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
                        <Text style={[styles.text]}>
                            {"We believe this article is likely…"}
                        </Text>

                        <Text style={[styles.resultsText]}>
                            {"True"}
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
         fontSize: 44,
         color: "#FFF",
         fontFamily: "OpenSans-Semibold",
     },
     resultsText: {
        fontSize: 70,
        color: "#FFF",
        fontFamily: "OpenSans-Extrabold",
        marginTop: 40
     },
     screen: {
         flex: 1
     },
     contianer: {
         justifyContent: "center",
         alignItems: "flex-start",
         flex: 1,
         marginLeft: 24
     },
     button: {
        marginTop: 32
     }
 });
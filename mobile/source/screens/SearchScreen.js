import React, { Component } from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet
 } from "react-native";
import SearchBar from "../component/SearchBar";
import GradientView from "../nativeComponents/GradientView";

 export default class SearchScreen extends Component {
     constructor(props) {
         super(props);

         this.state = {};
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
                        <Text style={[styles.text]}>
                            UNDERLIE
                        </Text>
                        <SearchBar text="" action={() => {}}/>
                    </View>
                </SafeAreaView>
            </GradientView>
        );
     }
 }

 const styles = StyleSheet.create({
     text: {
         fontSize: 64,
         color: "#FFF",
         fontFamily:"OpenSans-Bold"
     },
     screen: {
         flex: 1
     },
     contianer: {
         justifyContent: "center",
         alignItems: "center"
     }
 });
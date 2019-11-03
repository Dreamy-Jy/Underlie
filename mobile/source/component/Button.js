import React,{ Component } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet, Animated, Platform } from "react-native";


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    pressIn() {}

    pressOut() {}

    render() {

        return(
            <TouchableWithoutFeedback>
                <View style={[styles.container]}>
                    <Text style={[styles.text, this.props.textColor]}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6298FF",
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignSelf: "flex-start",
        borderRadius: 1000000,
        ...Platform.select({
            ios: {
                shadowColor: "#000000",
                shadowOpacity: 1,
                shadowOffset: {
                    width: 4,
                    height: 4
                },
                shadowRadius: 8
            },
            android: {
                elevation: 8
            }
        }),
    },
    text: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "OpenSans-Bold"
    }
});
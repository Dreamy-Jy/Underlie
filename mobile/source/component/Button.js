import React,{ Component } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet, Animated, Platform } from "react-native";
import { B } from "index";


export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            BGColorController: new Animated.Value(0)
        };

        this.pressIn = this.pressIn.bind(this);
        this.pressOut = this.pressOut.bind(this);
    }

    pressIn() {
        Animated.timing(this.state.BGColorController, {
            toValue: 1,
            duration: 62.5
        }).start();
    }

    pressOut() {
        Animated.timing(this.state.BGColorController, {
            toValue: 0,
            duration: 500
        }).start();

        // this.props.action();
    }

    render() {
        const BGColorSpectrum =  this.state.BGColorController.interpolate({
            inputRange: [0, 1],
            outputRange: [startColor, endColor]
        });

        return(
            <TouchableWithoutFeedback 
                onPressIn={this.pressIn}
                onPressOut={this.pressOut}>
                <Animated.View style={[styles.container, {backgroundColor: BGColorSpectrum}, this.props.style]}>
                    <Text style={[styles.text, this.props.textColor]}>{this.props.text}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const startColor = "#6298FF";
const endColor = "#004EFF";

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
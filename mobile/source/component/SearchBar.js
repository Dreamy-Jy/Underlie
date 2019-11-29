import React, { Component } from "react";
import { 
    TextInput, 
    TouchableWithoutFeedback, 
    View, 
    Animated, 
    StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

/**
 * make a is isValidInput() Prop.
 */
export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            buttonEnabled: false,
            BRadiusController: new Animated.Value(0)
        };

        this.changeText = this.changeText.bind(this);
        this.shouldEnable = this.shouldEnable.bind(this);
    }

    changeText(text) {
        this.setState({
            text: text
        });

        this.shouldEnable();
    }

    shouldEnable() {
        const pattern = /^([https:\/\/])*/;
        let newState = pattern.test(this.state.test)

        if (newState) {}

        this.setState({
            buttonEnabled: newState
        });
    }

    render() {

        const BRadiusSpectrum = null;

        return(
            <View style={[styles.contianer]}>
                <TextInput
                    style={[styles.bar]}
                    placeholder="Type a link to find the truth…"
                    placeholderTextColor="#C9C9C9"
                    value={this.state.text}
                    onChange={this.changeText}/>
                <TouchableWithoutFeedback>
                    <Animated.View 
                        style={[styles.button, {backgroundColor: (this.state.buttonEnabled)? "#6298FF": "#C9C9C9"}]}>
                        <Icon 
                            name="search"
                            size={24}
                            color={"#FFFFFF"}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#C9C9C9',
        width: 36,
        borderTopRightRadius: 10000,
        borderBottomRightRadius: 10000,
        alignItems: "center",
        justifyContent: "center"
    },
    bar: {
        borderTopLeftRadius: 10000,
        borderBottomLeftRadius: 10000,
        fontFamily: "OpenSans-Semibold",
        fontSize: 16,
        color: "#000000",
        paddingLeft: 16,
        paddingRight: 8,
        paddingVertical: 8,
        backgroundColor: "#FFFFFF",
        flex: 0.85,
    },
    contianer: {
        flexDirection: "row"
    }
})
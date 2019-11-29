import React from 'react';
import { SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

storiesOf("Buttons", module)
    .add("Regular", () => <SafeAreaView style={[{backgroundColor: "#004EFF", flex: 1}]}><Button text="Hello World" action={()=>{}}/></SafeAreaView>);
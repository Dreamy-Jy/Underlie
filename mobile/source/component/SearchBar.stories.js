import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";

storiesOf("Search Bar", module)
    .add("Regular", () => <SafeAreaView style={[{backgroundColor: "#004EFF", flex: 1}]}><SearchBar /></SafeAreaView>);
import React from "react";
import { storiesOf } from "@storybook/react-native";
import SearchScreen from "../screens/SearchScreen";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import ResultsScreen from "./ResultsScreen";

storiesOf("Screens", module)
    .add("Search Screen", () => <SearchScreen />)
    .add("Loading Screen", () => <LoadingScreen />)
    .add("Error Screen", () => <ErrorScreen />)
    .add("Results Screen", () => <ResultsScreen />);

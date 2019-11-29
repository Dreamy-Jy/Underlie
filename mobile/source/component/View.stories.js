import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import GradientView from "../nativeComponents/GradientView";

storiesOf("Views", module)
    .add("GradientView", () => <GradientView 
                                    style={{
                                        flex: 1,
                                    }}
                                    fromColor="#004EFF"
                                    toColor="#222222"
                                    cornerRadius={0}
                                    progress={0.5}>
                                </GradientView>);
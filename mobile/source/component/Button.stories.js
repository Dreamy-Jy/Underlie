import React from 'react';
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

storiesOf("Button", module)
    .add("default", () => <Button text="Hello World" />);
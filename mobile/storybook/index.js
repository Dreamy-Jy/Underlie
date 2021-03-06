import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';
import { Navigation } from "react-native-navigation";

// import stories
configure(() => {
  // require('./stories');
  require('../source/component/Button.stories');
  require('../source/component/SearchBar.stories');
  require('../source/component/View.stories');
  require('../source/screens/Page.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
Navigation.registerComponent("storybook.UI", () => StorybookUIRoot);

export default StorybookUIRoot;

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';
import { Navigation } from "react-native-navigation";

// import stories
configure(() => {
  // require('./stories');
  require('../source/component/Button.stories')
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
Navigation.registerComponent("storybook.UI", () => StorybookUIRoot);

// Navigation.setRoot({
//   root: {
//     component: {
//       name: "storybook.UI",
//     }
//   }
//   // screen: {
//   //   screen: "storybook.UI",
//   //   title: "Storybook",
//   // },
// });

export default StorybookUIRoot;

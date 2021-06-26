/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
const _package = require('../package.json')

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        path: _package.homepage.split('github.io/')[1],  //github repository name
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

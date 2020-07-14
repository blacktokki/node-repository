module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','module:metro-react-native-babel-preset'],
    "plugins": [
      [  
        "module-resolver",
        {
          "root":["./"],
          "extensions":[".js","min.js",".ios.js","android.js",".web.js",".native.js"]
        }
      ],
    ]
  };
};

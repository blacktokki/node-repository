module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [  
        "module-resolver",
        {
          "root":["./"],
          "extensions":[".js","min.js",".ios.js","android.js",".css"]
        }
      ],
      "react-native-classname-to-style",
      [  
        "react-native-platform-specific-extensions",
        {
          "extensions": ["css"]
        }
      ]
    ]
  };
};

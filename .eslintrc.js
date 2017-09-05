module.exports = {
  "extends": ["airbnb", "react-app"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    // lol lets get messy :P
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    // idk wtf these are
    "jsx-a11y/href-no-hash": "off"
  }
};

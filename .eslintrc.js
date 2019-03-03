module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "airbnb",
    "prettier",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "prettier",
    "flowtype"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": false,
      "trailingComma": "all"
    }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-unused-state": 0,
    "react/jsx-wrap-multilines": false,
    "no-unused-vars": 0,
    "no-debugger": 0,
    "no-undef": 0
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    }
  }
}
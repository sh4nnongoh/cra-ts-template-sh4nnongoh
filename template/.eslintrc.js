module.exports = {
  env: {
    "browser": true, // Allows use of browser objects (i.e. window)
    // "jest/globals": true // Allows use of jest test constructs
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures:  {
      "jsx":  true  // Allows for the parsing of JSX
    }
  },
  extends: [
    "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:jest/recommended",
    "airbnb", 
    "airbnb/hooks",
    "plugin:security/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "html"
  ],
  "rules": {
    "import/extensions": ["error", "never", { "svg": "always", "css": "always", "json": "always" }],
    "linebreak-style": "off",
    "prefer-arrow-callback": ["error", { "allowUnboundThis": false }],
    "react/jsx-filename-extension": "off",
    "comma-dangle": ["error", "never"],
    complexity: ["warn", 20],
    quotes: ["error", "double"],
    "max-len": ["error", { "code": 120 }],
    "no-multiple-empty-lines": [ "error", { "max": 1 }]
  },
  settings: {
    react:  {
      version:  "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};

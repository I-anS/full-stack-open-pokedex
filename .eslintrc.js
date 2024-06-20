module.exports = {
  env: {
    browser: true, // Enables browser global variables
    es2021: true, // Enables ES12 features
    node: true, // Enables Node.js global variables
    "jest/globals": true, // Enables Jest global variables
  },
  extends: [
    "eslint:recommended", // Use recommended configurations
    "plugin:react/recommended", // Use recommended React settings
    "plugin:jest/recommended", // Use recommended Jest settings
  ],
  parser: "@babel/eslint-parser", // Use Babel ESLint parser for latest syntax support
  parserOptions: {
    ecmaVersion: "latest", // Latest ECMAScript standards
    sourceType: "module", // Support for ES6 modules
    ecmaFeatures: {
      jsx: true, // Support for JSX
    },
    requireConfigFile: false, // No need for a Babel configuration file
  },
  plugins: [
    "react", // React-specific linting tools
    "jest", // Jest-specific linting tools
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "react/jsx-uses-react": "error", // Ensures React is in scope when using JSX
    "react/jsx-uses-vars": "error", // Prevents unused vars when they are used in JSX
    // Disable prop-types rule
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  overrides: [
    {
      files: [".eslintrc.*", "webpack.*.js"], // Specific configurations for ESLint and Webpack config files
      parserOptions: {
        sourceType: "script", // Treat these files as CommonJS (allows require and module.exports)
      },
    },
  ],
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
   "space-before-function-paren": "off",
   "indent": "off",
   "eol-last": "off",
   "semi": "off", 
   "quotes": "off",
   // allow jsx syntax in js files (for next.js project)
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
  },
  overrides: [
    {
      "files": ["**/*.js?(x)"],
      "rules": {
// ******** add ignore rules here *********
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      }
    }
  ]
}

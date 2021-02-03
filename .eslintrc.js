module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react-hooks",],

  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/explicit-function-return-type": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-empty-interface": 2,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-bind": 2,
    "react/no-unsafe": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "react/prop-types": 0
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
}

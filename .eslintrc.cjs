module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    "implicit-arrow-linebreak": [0],
    "linebreak-style": ["error", "unix"],
    "react/jsx-curly-newline": [0],
    "react/jsx-one-expression-per-line": [0],
    "jsx-a11y/label-has-associated-control": [1],
    "jsx-a11y/label-has-for": [1],
    indent: [0],
    "import/extensions": [0],
    "react/jsx-indent": [0],
    "function-paren-newline": [0],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "operator-linebreak": [0],
    "@typescript-eslint/no-unused-vars": [2],
    "@typescript-eslint/no-shadow": [2],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "default-param-last": [0],
    "react/jsx-wrap-multilines": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
    "react/require-default-props": "off",
    "spaced-comment": "off",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/order": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
};

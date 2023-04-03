module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "plugin:vue/base",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    //parser: "babel-eslint"
  }
};

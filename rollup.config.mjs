import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "iife",
    plugins: [commonjs()],
  },
};

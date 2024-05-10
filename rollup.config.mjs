import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "dist/scripts/index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
  },
  plugins: [commonjs()],
};

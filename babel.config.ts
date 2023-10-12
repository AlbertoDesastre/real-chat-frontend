// When converting this file to a .js extension, TypeScript thinks it's a CommonJS module and throws an error.
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

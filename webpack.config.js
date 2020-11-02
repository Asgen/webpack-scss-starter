const path = require("path");
const miniCss = require("mini-css-extract-plugin");
module.exports = {
  mode: `development`,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`), // Где искать сборку
    publicPath: "http://localhost:8080/", // Веб адрес сборки
    compress: true, // Сжатие
    // Автоматическая перезагрузка страницы
    // Если не работает по стандартному URLу в браузере 'http://localhost:8080/',
    // то добавьте к нему '/webpack-dev-server': 'http://localhost:8080/'
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
};

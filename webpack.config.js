const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: process.env.MODE || "development",
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "actix-static-files Webpack test",
			template: path.join(__dirname, "/src/index.html")
		})
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: path.resolve(path.join(__dirname, "/node_modules")),
				loader: "ts-loader"
			},{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 5000
	}
}

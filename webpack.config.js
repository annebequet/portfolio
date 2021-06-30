const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
 "mode": "production",
  "entry": "./src/app.js",

 "output": {
   "path": __dirname + '/build',
   "filename": "main.js"
 },
 devServer: {
   contentBase: path.join(__dirname, 'build')
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader",
       ]
     },
     {
       "test": /\.(jpe?g|png|gif|svg)$/i, 
       "use": "file-loader?name=app/images/[name].[ext]"
     },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
             "@babel/preset-env",
           ]
         }
       }
     },
   ]
 }
};
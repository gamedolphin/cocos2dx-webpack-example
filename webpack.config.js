var webpack = require('webpack');
var _ = require('lodash');

var npmModules = require('./package.json').dependencies;
var vendorLibs = [];
if(npmModules) {
    _.each(npmModules,function (item,key) {
        vendorLibs.push(key);
    });
}


module.exports = {
    entry: {
        app: "./source/init.js",
        vendor: vendorLibs,
    },
    output: {
        path: __dirname+"/src",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ]
};

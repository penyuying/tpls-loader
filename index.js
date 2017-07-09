var loaderUtils = require("loader-utils");
var gulpTpls=require("gulp-tpls");
var assign = require("object-assign");

function getLoaderConfig(context) {
	var query = loaderUtils.getOptions(context) || {};
	var configKey = query.config || 'tplsLoader';
	var config = context.options && context.options.hasOwnProperty(configKey) ? context.options[configKey] : {};

	delete query.config;

	return assign(query, config);
}
/**
* source为原文件的字符串格式
*/
module.exports=function(source,map){
    var config=getLoaderConfig(this);
    //对source进行解析
    var _export=gulpTpls.buildHtml(source,config);
    // console.log(config);
    // console.log(_export);
    return _export;
};
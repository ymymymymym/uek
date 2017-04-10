/*
* @Author: yuxiaoxian
* @Date:   2017-04-05 22:22:30
* @Last Modified by:   yuxiaoxian
* @Last Modified time: 2017-04-05 22:27:00
*/

'use strict';
/*窗口 加载完之后执行程序*/
window.onload=function(){
	// alert(1)
	var designwidth=375;/*定义设计尺寸*/

	function fontSize(){
		/*设置尺寸 文档的宽度*/
		var CW=document.documentElement.clientWidth;
		/*console.logo(CW);  输出文档的宽度*/
		var size=CW/designwidth*100+"px";
		/*设备的尺寸/设计尺寸*100 加上单位*/
		document.querySelector("html").style.fontSize=size;
		/*设置html的font-size*/
	}
/*运行函数*/
fontSize();
window.onresize=fontSize;
/*监测窗口尺寸是否发生变化*/
}
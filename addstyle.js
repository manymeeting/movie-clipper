function insertStyles(){


	var doc,cssCode=[],cssText;
	var len = arguments.length;
	var head,styles,firstStyle;
	if(len == 1){
		doc = document;
		cssCode.push(arguments[0])
	}else if(len == 2){
		doc = arguments[0];
		cssCode.push(arguments[1]);
	}else{
		alert("函数最多接收两个参数！");
	}
	head = doc.getElementsByTagName("head")[0];
	styles= head.getElementsByTagName("style");
	if(styles.length == 0){

		var tempStyle = doc.createElement("style");
		tempStyle.setAttribute("type","text/css");
		head.appendChild(tempStyle);

		// if(doc.createStyleSheet){//ie
		// 	doc.createStyleSheet();
		// }else{//FF
		// 	var tempStyle = doc.createElement("style");
		// 	tempStyle.setAttribute("type","text/css");
		// 	head.appendChild(tempStyle);
		// }
	}
	firstStyle = styles[0];
	cssText=cssCode.join("\n");
	// if(!+"\v1"){//opacity兼容
	// 	var str = cssText.match(/opacity:(\d?\.\d+);/); 
	// 	if(str!=null){
	// 		cssText = cssText.replace(str[0],"filter:alpha(opacity="+pareFloat(str[1])*100+")");
	// 	}
	// }
	if(firstStyle.styleSheet){
		firstStyle.styleSheet.cssText += cssText;
	}else if(doc.getBoxObjectFor){
		firstStyle.innerHTML += cssText;
	}else{
		firstStyle.appendChild(doc.createTextNode(cssText));
	}


}


function deleteStyles(index){

	if (index < 0) {
		return;
	}

	var head, styles;
	var doc = document;

	head = doc.getElementsByTagName("head")[0];
	styles= head.getElementsByTagName("style");

	head.removeChild(styles[index]);
	
	var result;
	return result;

}



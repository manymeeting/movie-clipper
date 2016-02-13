function clip(){

	var inputFile = document.getElementById("filePathInput").value;
	var outputPath = document.getElementById("filePathOutput").value;


	var startTimeH = document.getElementById("startTimeH").value;
	var startTimeM = document.getElementById("startTimeM").value;
	var startTimeS = document.getElementById("startTimeS").value;

	var endTimeH = document.getElementById("endTimeH").value;
	var endTimeM = document.getElementById("endTimeM").value;
	var endTimeS = document.getElementById("endTimeS").value;

	var date1 = startTimeH + ":" + startTimeM + ":" + startTimeS;
	var date2 = endTimeH + ":" + endTimeM + ":" + endTimeS;

	var ddate1 = new Date("2016/1/1 "+ date1); 
	var ddate2 = new Date("2016/1/1 "+ date2); 

	var date3=ddate2.getTime()-ddate1.getTime(); //时间差秒        

	//计算出相差天数  
    var days=Math.floor(date3/(24*3600*1000));  
  
    //计算出小时数  
  
    var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数  
    var hours=Math.floor(leave1/(3600*1000)) ; 
    //计算相差分钟数  
    var leave2=leave1%(3600*1000) ;       //计算小时数后剩余的毫秒数  
    var minutes=Math.floor(leave2/(60*1000));  
    //计算相差秒数  
    var leave3=leave2%(60*1000)  ;    //计算分钟数后剩余的毫秒数  
    var seconds=Math.round(leave3/1000)  ;

    var finalLength = hours + ":" + minutes + ":" + seconds;

    var fileNameWithoutPath = inputFile.substr(inputFile.lastIndexOf("/") + 1);
 
    var test = fileNameWithoutPath.lastIndexOf(".");
    var fileNameSuffix = fileNameWithoutPath.substr(fileNameWithoutPath.lastIndexOf("."));
    var pureFileName = fileNameWithoutPath.substr(0, fileNameWithoutPath.length - fileNameSuffix.length);

    //var outputFileName = inputFile.substr(inputFile.lastIndexOf("/")+1, inputFile.lastIndexOf(".")) + "-" + startTimeH +  startTimeM + startTimeS + inputFile.substr(inputFile.lastIndexOf("."));

    var outputFileName = pureFileName + "-" + startTimeH +  startTimeM + startTimeS + inputFile.substr(inputFile.lastIndexOf("."));

	var command = "ffmpeg -ss " + date1 + " -i " + inputFile + " -vcodec copy -acodec copy -t " +  finalLength + " " + outputPath + outputFileName;

	document.getElementById("commandOutput").value = command;
}






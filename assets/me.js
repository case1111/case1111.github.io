if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "l", "lu", "lug","lugg","lugge","lugger","luggers","luggers.","luggers.x","luggers.xy","luggers.xyz","luggers.xyz","luggers.xy","luggers.x","luggers.","luggers","lugger","lugge","lugg","lug","lu","l"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
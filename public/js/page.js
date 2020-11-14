document.getElementById('navspace').style.height = $(".navbar").height()+"px";

var mobbgv = 0;

function mobbg(){
	if(mobbgv){
		document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,0.0)";
		mobbgv=0;
	}
	else{
		document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,0.8)";
		mobbgv=1;
	}
}
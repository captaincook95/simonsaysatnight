function start(){
	var x = $('#codeInput').val(); 
	if (x === ""){
	alert("Bitte Code eintragen");
	} else {
		var regex=/^[0-9]+$/;
		if (!(x.match(regex)))
		{
        alert("Nur Ziffern sind zulässig");
		} 
		else{
		location.href="http://htmlpreview.github.io/?https://github.com/captaincook95/simonsaysatnight/blob/master/simon2.html%3Fcode=" + $('#codeInput').val();
		}
	}
}


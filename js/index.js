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
		location.href="simon.html?code=" + $('#codeInput').val();
		}
	}
}


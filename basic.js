function addText(event) {
	var a = document.getElementById("Bar").value;
    var targ = event.target || event.srcElement;
    // document.getElementById("Bar").value += targ.textContent.trim() || targ.innerText.trim();
    if (a == undefined || a == ''){
    	if(targ.innerText.trim() == '/' || targ.innerText.trim() == '+'  || targ.innerText.trim() == '*' || targ.innerText.trim() == '-'){
    		document.getElementById("Bar").value = '';
    	}else{
    		document.getElementById("Bar").value = targ.textContent.trim() || targ.innerText.trim();
    	}
    }else if (a == 0){
    	if(targ.innerText.trim().match('/') || targ.innerText.trim().match('/+')  || targ.innerText.trim().match('/*') || targ.innerText.trim().match('-')){
    		document.getElementById("Bar").value = targ.textContent.trim() || targ.innerText.trim();
    	}else{
    	document.getElementById("Bar").value = targ.textContent.trim() || targ.innerText.trim();
    	}
    }else if(a.match('Infinity') || a.match('NaN')){
    	if(targ.innerText.trim().match('/') || targ.innerText.trim().match('/+')  || targ.innerText.trim().match('/*') || targ.innerText.trim().match('-')){
    		document.getElementById("Bar").value = 0;
    	}else{
    		document.getElementById("Bar").value = targ.textContent.trim() || targ.innerText.trim();
    	}
    }else if (a.includes('.')){
    	if(targ.innerText.trim() == '.'){
    		document.getElementById("Bar").value = document.getElementById("Bar").value;
    		console.log('got here');

    	}else{
    		document.getElementById("Bar").value += targ.textContent.trim() || targ.innerText.trim();
    	}
   }else{

    	document.getElementById("Bar").value += targ.textContent.trim() || targ.innerText.trim();
    }
    console.log(targ.innerText);
}
function equalTo(){
	var a = (eval(document.getElementById("Bar").value));
	document.getElementById("Bar").value = a;
}
function removeText(){
	var a = document.getElementById("Bar").value;
	if(a.match('Infinity') || a.match('NaN')){
		a = 0;
	}else{
		a = a.substring(0,a.length - 1);
	}
	document.getElementById("Bar").value = a;
}
function removeAll(){
	document.getElementById("Bar").value = '';
}
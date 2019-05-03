
function randomplace() {
   
   var myarray= new Array("choix1","choix2","choix3");//on construit un array et on affecte les 3 id des réponses possible
    var random1 = myarray[Math.floor(Math.random() * myarray.length)]; // we choose a rndom valur of the array and we put it a random1
    var random2 = myarray[Math.floor(Math.random() * myarray.length)];
    var random3 = myarray[Math.floor(Math.random() * myarray.length)];
    while (random1==random2 || random1==random3 || random2==random3) { //while the 3 value are not different keep looking randomly
    var random1 = myarray[Math.floor(Math.random() * myarray.length)];
    var random2 = myarray[Math.floor(Math.random() * myarray.length)];
    var random3 = myarray[Math.floor(Math.random() * myarray.length)];
    }// when we find the values we get out from the loop and we display the values at the div havin the id message(i) with i {1,2,3}
    
    console.log(random1+" "+random2+" "+random3);

    document.getElementById("choix1").id=random1;
    if (choix2!= random1) {
      document.getElementById("choix2").id=random2;
    }
    if (choix3!=random2) {
       document.getElementById("choix3").id=random3;
}
    }
   

function nbre1() {
	return b=Math.round( Math.random()*1000 ) ;
}

function nbre2() {
	return a=Math.round( Math.random()*1000 ) ;
}
c=Math.round( Math.random()*1000 );
d=Math.round( Math.random()*1000 );
//the 2 previous function take a parametre from the form and ececute the operation and return the value with a random number added to them 
function add() {
	return a+b;
}
function sub() {
	return a-b;
}
function mul() {
	return a*b;
}
function divint() {
	return Math.floor(a/b);
}

function operation1() 
{
   var e = document.getElementById("operation");
   var oper = e.options[e.selectedIndex].value;
	if (oper == "+") {
		return add();
	}
	else if (oper == "-") {
		return sub();
	}
	else if (oper == "x") {
		return mul();
	}
	else if (oper == "/") {
		return divint();
	}
	else {
		return false;
	}

}
function operation2() {
   var e = document.getElementById("operation");
   var oper = e.options[e.selectedIndex].value;
	if (oper == "+") {
		return add()-c;
	}
	else if (oper == "-") {
		return sub()-c;
	}
	else if (oper == "x") {
		return mul()-c;
	}
	else if (oper == "/") {
		return divint()-c;
	}
	else {
		return false;
	}

}
function operation3() {
   var e = document.getElementById("operation");
   var oper = e.options[e.selectedIndex].value;
	if (oper == "+") {
		return add()-d;
	}
	else if (oper == "-") {
		return sub()-d;
	}
	else if (oper == "x") {
		return mul()-d;
	}
	else if (oper == "/") {
		return divint()-d;
	}
	else {
		return false;
	}

}
function incrementValue()
{
    var value = parseInt(document.getElementById('score').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value + 10;
    document.getElementById('score').value = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('score').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value - 10;
    document.getElementById('score').value = value;
}

function countandmsg() {
     var countdownElement = document.getElementById('countdown1');
     var losttext = document.getElementById('lost');
     var wintext = document.getElementById('wintext');
     var seconds = 10;
     var second = 0;
     var score = document.getElementById('score');
     var timeout = document.getElementById('timeout');

    interval = setInterval(function() {
        countdownElement.firstChild.data = 'Hurry up  you have only ' + (seconds - second) + ' seconds';
        if (second >= seconds) {
            timeout.style.display = 'block';
             wintext.style.display = 'none';
              losttext.style.display = 'none';
            document.getElementById("choix1").disabled = true;
      			document.getElementById("choix2").disabled = true;
      			document.getElementById("choix3").disabled = true;
      			clearInterval(interval);
      			document.getElementById('play').innerHTML = 'PLAY AGAIN';
            document.getElementById("play").disabled = false;
            document.getElementById('score').innerHTML = decrementValue();
			//countdownElement.style.display = 'none';
        }
		else if ( second < seconds && document.getElementById("choix1").disabled == true) {
           	wintext.style.display = 'block';
            timeout.style.display = 'none';
            losttext.style.display = 'none';
        		document.getElementById("choix1").disabled = true;
      			document.getElementById("choix2").disabled = true;
      			document.getElementById("choix3").disabled = true;
      			clearInterval(interval);
            document.getElementById('play').innerHTML = 'PLAY AGAIN';
            document.getElementById('score').innerHTML = incrementValue();
            document.getElementById("play").disabled = false;
    		//countdownElement.style.display = 'none';
        }
      	else if ( second < seconds && document.getElementById("choix2").disabled == true) {
          	losttext.style.display = 'block';
            wintext.style.display = 'none';
            timeout.style.display = 'none';
        		document.getElementById("choix1").disabled = true;
      			document.getElementById("choix2").disabled = true;
      			document.getElementById("choix3").disabled = true;
            document.getElementById('play').innerHTML = 'PLAY AGAIN';
      			clearInterval(interval);
            document.getElementById("play").disabled = false;
            document.getElementById('score').innerHTML = decrementValue();

    		//countdownElement.style.display = 'none';
        }
        else if ( second < seconds && document.getElementById("choix3").disabled == true) {
          	losttext.style.display = 'block';
            wintext.style.display = 'none';
            timeout.style.display = 'none';
        		document.getElementById("choix1").disabled = true;
      			document.getElementById("choix2").disabled = true;
      			document.getElementById("choix3").disabled = true;
            document.getElementById('play').innerHTML = 'PLAY AGAIN';
            document.getElementById("play").disabled = false;
      			clearInterval(interval);
            document.getElementById('score').innerHTML = decrementValue();
    		//countdownElement.style.display = 'none';
        }
        else {
          document.getElementById("play").disabled = true;
        }
  

        second++;

    
    }, 1000);

}
function resetmsg() {
     var losttext = document.getElementById('lost');
     var wintext = document.getElementById('wintext');
     var timeout = document.getElementById('timeout');
     var score = document.getElementById('score').value='0';
     document.getElementById('choix1').disabled = false;
     document.getElementById('choix2').disabled = false;
     document.getElementById('choix3').disabled = false;
     losttext.style.display = 'none';
     timeout.style.display = 'none';
     wintext.style.display = 'none';
}

 
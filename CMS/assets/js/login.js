jQuery(document).ready(function() {
	App.init();
	Validation.initValidation();
});

$.backstretch([
	"assets/img/bg/19.jpg",
	"assets/img/bg/18.jpg",
], {
	fade: 1000,
	duration: 7000
});

function mouseoverPass(obj) {
		  var obj = document.getElementById('myPassword');
		  obj.type = "text";
		}
		function mouseoutPass(obj) {
		  var obj = document.getElementById('myPassword');
		  obj.type = "password";
		}


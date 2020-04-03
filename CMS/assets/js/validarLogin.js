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

//Inicialización de firebase
var config = {
	apiKey: "AIzaSyD03G77hqsICi7lKAMzzvyOkfxDmBg0xw4",
	authDomain: "webasodecsj.firebaseapp.com",
	databaseURL: "https://webasodecsj.firebaseio.com",
	projectId: "webasodecsj",
	storageBucket: "webasodecsj.appspot.com",
	messagingSenderId: "595397153077"
	};
firebase.initializeApp(config);
var database = firebase.database()

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	    window.location.replace("index.php");
	}
});



var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#loginForm").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                correo:
	                {
	                    required: true,
	                    email: true
	                },
	                contrasenna:
	                {
	                    required: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	      
	                correo:
	                {
	                    required: 'Por favor, ingrese su correo electrónico',
	                    email: 'Por favor, ingrese un correo electrónico válido'
	                },
	                contrasenna:
	                {
	                    required: 'Por favor, ingrese su contraseña'
	                }
	            },   
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
					   
				},
				submitHandler: function(form)
				{
					//console.log(correo, contrasenna);
					firebase.auth().signInWithEmailAndPassword($("form :input")[0].value, $("form :input")[1].value).catch(function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						if (errorCode == "auth/wrong-password"){
							alert("Contraseña Incorrecta");
						} else if (errorCode == "auth/user-not-found"){
							alert("Usuario no encontrado");
						} else if (error == "auth/user-disabled"){
							alert("Usuario deshabilitado");
						}
					});
				}
	        });
        }

    };
}();
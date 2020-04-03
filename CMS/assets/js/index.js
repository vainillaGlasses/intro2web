jQuery(document).ready(function() {
	App.init();
	Masking.initMasking();
	Datepicker.initDatepicker();
	Validation.initValidation();
	StyleSwitcher.initStyleSwitcher();
	$("#indexNavbar").addClass("active");

	moment().locale()
});

// Initialize Firebase
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

	function cargarTextos(){
		//Se carga el texto de la presentación, misión y visión
		return firebase.database().ref('/Inicio/').once('value').then(function(snapshot) {
			var presentacion = snapshot.val().Presentacion;
			var mision = snapshot.val().Mision;
			var vision = snapshot.val().Vision;
			$("#presentacion").val(presentacion)
			$("#mision").val(mision)
			$("#vision").val(vision)
		});
	}

	cargarTextos();

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    $("#account").html(user.email);
	  } else {
	    window.location.replace("login.html");
	  }
	});


var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#formInicio").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                presentacion:
	                {
	                    required: true
	                },
	                mision:
	                {
	                    required: true
	                },
	                vision:
	                {
	                    required: true
	                }	                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                presentacion:
	                {
	                    required: 'Ingrese la presentacion.'
	                },
	                mision:
	                {
	                    required: 'Ingrese la misión.'
	                },
	                vision:
	                {
	                    required: 'Ingrese la visión.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },

	            submitHandler: function(form)
	            {
	            	var formData = $(form).serializeArray()
	            	console.log(formData)
	            	var nuevaPresentacion = formData[0]["value"];
	            	var nuevaMision = formData[1]["value"];
	            	var nuevaVision = formData[2]["value"];
	            	
	            	firebase.database().ref('Inicio/').set({
						Presentacion: nuevaPresentacion,
						Mision: nuevaMision,
						Vision: nuevaVision
	            	});

	            	alert("Datos modificados correctamente");
	            	return false;
	            }

	        });
        }

    };
}();



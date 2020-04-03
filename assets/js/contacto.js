jQuery(document).ready(function() {
	App.init();
	StyleSwitcher.initStyleSwitcher();
	PageContactForm.initPageContactForm();
	$("#contactoNavbar").addClass("active")
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

function cargarFooter(){
	return firebase.database().ref('Footer/').once('value').then(function(snapshot) {
		var texto = snapshot.val().texto;
		$("#textoFooter").html(texto);
	});	
}

cargarFooter();

var GoogleMap = function () {


    // Return
    return {

      //Basic Map
      initGoogleMap: function () {

        /* Map */
        var fenway = {lat: 9.9381006, lng: -84.0755324};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: fenway,
          scrollwheel: false,
          zoom: 14
        });

        var marker = new google.maps.Marker({
          position: fenway,
          map: map,
          title: 'ASODEC-SJ'
        });

      },
      // End Basic Map

    };
    // End Return

}();

// Google Map
GoogleMap.initGoogleMap();



function cargarDatosContacto(){
	return firebase.database().ref('/Contacto/').once('value').then(function(snapshot) {
		var direccion = snapshot.val().direccion;
		var email = snapshot.val().email;
		var facebook = snapshot.val().faceSj;
		var instagram = snapshot.val().instaSj;
		var tel = snapshot.val().numero;
		var sitioWeb = snapshot.val().sitioWeb;
		var horario = snapshot.val().horario;
		$("#direccion").html('<i class="fa fa-home"></i>'+direccion);
		$("#correo").html('<a href="mailto:'+email+'"><i class="fa fa-envelope"></i>'+email+'</a>');
		$("#tel").html('<a href="#"><i class="fa fa-phone"></i>'+tel+'</a>');
		$("#sitioWeb").html('<a href="'+sitioWeb+'"><i class="fa fa-globe"></i>'+sitioWeb+'</a>');
		$("#facebook").html('<a href="'+facebook+'"><i class="fa fa-facebook"></i>'+facebook+'</a>');
		$("#instagram").html('<a href="'+instagram+'"><i class="fa fa-instagram"></i>'+instagram+'</a>');
		$("#imgHorarioAsocia").attr("src", horario);
	});
}

cargarDatosContacto();


var PageContactForm = function () {

    return {
        
        //Contact Form
        initPageContactForm: function () {
	        // Validation
	        $("#contactForm").validate({
	            // Rules for form validation
	            rules:
	            {
	                name:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                subject:
	                {
	                	required: true
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 10
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                name:
	                {
	                    required: 'Por favor, ingrese su nombre.',
	                },
	                email:
	                {
	                    required: 'Por favor, ingrese su correo electrónico',
	                    email: 'Por favor, ingrese un correo electrónico válido'
	                },
	                subject:
	                {
	                	required: 'Por favor, ingrese el asunto del mensaje'
	                },
	                message:
	                {
	                    required: 'Por favor, ingrese su mensaje',
	                    minlength: 'Longitud mínima: 10 caracteres'
	                }
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	            	var name = $("#name").val();
	            	var email = $("#email").val();
	            	var type = $("#contactType").val();
	            	var subject = $("#subject").val();
	            	var message = $("#message").val();
	            	var copy = $("#copy").is(":checked");
	            	console.log(copy);
	                $.ajax({
				        type: "POST",
				        url: "assets/php/contactSend.php",
				        dataType: 'html',
				        data: {
				            name:name,
				            email:email,
				            contactType:type,
				            subject:subject,
				            message:message,
				            sendCopy:copy
				        },
				        beforeSend: function(){
				        	$('#contactForm button[type="submit"]').attr('disabled', true);
				        },
				        success: function(data) {
				            $("#contactForm")[0].reset();
				            $("#contactForm").addClass('submited');
				        },
				        error : function(data) {
				            alert(data);
				        }
				    });
				    return false;
				    
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
    
}();
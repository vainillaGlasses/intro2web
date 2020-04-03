jQuery(document).ready(function() {
	App.init();
	Masking.initMasking();
	Datepicker.initDatepicker();
	Validation.initValidation();
	StyleSwitcher.initStyleSwitcher();
	$("#contactoNavbar").addClass("active")
	$("#uploadMessage").hide();
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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#account").html(user.email);
  } else {
    window.location.replace("login.html");
  }
});



function cargarDatosContacto(){
	return firebase.database().ref('/Contacto/').once('value').then(function(snapshot) {
		var direccion = snapshot.val().direccion;
		var email = snapshot.val().email;
		var facebook = snapshot.val().faceSj;
		var instagram = snapshot.val().instaSj;
		var tel = snapshot.val().numero;
		var sitioWeb = snapshot.val().sitioWeb;
		var horario = snapshot.val().horario;
		$("#direccion").val(direccion);
		$("#correo").val(email);
		$("#tel").val(tel);
		$("#sitioWeb").val(sitioWeb);
		$("#facebook").val(facebook);
		$("#instagram").val(instagram);
		$("#imgHorarioAsocia").attr("src", horario);
	});
}

cargarDatosContacto()



var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#formEditarContacto").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                direccion:
	                {
	                    required: true
	                },
	                correo:
	                {
	                    required: true,
	                    email: true
	                },
	                tel:
	                {
	                    required: true,
	                    digits: true
	                },
	                sitioWeb:
	                {
	                	required: true,
	                	url: true
	                },
	                facebook:
	                {
	                	required: true,
	                	url: true
	                },
	                instagram:
	                {
	                	required: true,
	                	url: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                direccion:
	                {
	                    required: 'Ingrese una dirección de la ubicación de la ASOCIA.'
	                },
	                correo:
	                {
	                    required: 'Ingrese el correo electrónico de la ASOCIA.',
	                    email: 'Ingrese un correo electrónico válido.'
	                },
	                tel:
	                {
	                    required: 'Ingrese el número telefónico de la ASOCIA.',
	                    digits: 'Ingrese solamente números.'
	                },
	                sitioWeb:
	                {
	                	required: 'Ingrese el sitio web de la ASOCIA.',
	                	url: 'Ingrese una URL válida.'
	                },
	                facebook:
	                {
	                	required: 'Ingrese el facebook de la ASOCIA.',
	                	url: 'Ingrese una URL válida.'
	                },
	                instagram:
	                {
	                	required: 'Ingrese el instagram de la ASOCIA.',
	                	url: 'Ingrese un URL válido.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },

	            submitHandler: function(form)
	            {
	            	var nuevaDireccion = $("#direccion").val();
					var nuevoCorreo = $("#correo").val();
					var nuevoTel = $("#tel").val();
					var nuevoSitio = $("#sitioWeb").val();
					var nuevoFacebook = $("#facebook").val();
					var nuevoInsta = $("#instagram").val();
	            	
	            	firebase.database().ref('Contacto/').update({
						direccion: nuevaDireccion,
						email: nuevoCorreo,
						faceSj: nuevoFacebook,
						instaSj: nuevoInsta,
						numero: nuevoTel,
						sitioWeb: nuevoSitio
	            	});
	            }

	        });

	        $("#formCambiarHorario").validate({
	        	rules:
	        	{
	        		nuevoHorario:
	        		{
	        			required: true,
	        			extension: true
	        		}
	        	},

	        	messages:
	        	{
	        		nuevoHorario:
	        		{
	        			required: 'Debe seleccionar una imagen',
	        			extension: 'Sólo se permiten imágenes'
	        		}
	        	},

	        	errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },

	            submitHandler: function(form)
	            {

	            	// Create a root reference
	                
	            var file = $("#nuevaImagen").get(0).files[0];

	            // Delete the file
				httpsReference.delete().then(function() {
				  // File deleted successfully
				  // Create a root reference
                var storageRef = firebase.storage().ref();

                // Create a reference to 'images/mountains.jpg'
                var mountainImagesRef = storageRef.child("Horario/"+file.name);
                link = mountainImagesRef.put(file)


                link.on('state_changed', function(snapshot){
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);


                  $("#uploadMessage").show();
                  console.log('Upload is ' + progress + '% done');
                  $("#uploadMessage").html("Porfavor espere, subida de imagen "+progress+"% completada.")
                }, function(error) {
                  // Handle unsuccessful uploads
                }, function() {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  $("#uploadMessage").html("Subida de imagen completada!")
                  var downloadURL = link.snapshot.downloadURL;
                  firebase.database().ref('Contacto/').update({
                    horario: downloadURL
                  });
                  $("#imgHorarioAsocia").attr("src", downloadURL);
                    $(form)[0].reset();
                });
				}).catch(function(error) {
				  // Uh-oh, an error occurred!
				});            

	            	return false;
	            }

	        });
        }

    };
}();

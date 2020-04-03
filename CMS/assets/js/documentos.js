jQuery(document).ready(function() {
	App.init();
	Masking.initMasking();
	Datepicker.initDatepicker();
	Validation.initValidation();
	StyleSwitcher.initStyleSwitcher();
	$("#documentosNavbar").addClass("active");
	moment().locale('es')

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

//Cargamos los documentos que hay en la base de datos
function cargarSelect(){
	$("#docSelect")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Seleccione un Documento</option>')
	    .val("0")
	;
	var query = firebase.database().ref("Documentos").orderByChild("fecha");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    // key will be "ada" the first time and "alan" the second time
		    var key = childSnapshot.key
		    var nombre = childSnapshot.val().nombre

		    html = '<option value="'+key+'">'+nombre+'</option>'
		    $("#docSelect").append(html)
		});
	});
}

//Escuchamos cambios en el select
$("#docSelect").on('change', function(){
	docId = $(this).val();
	if (docId != 0){
		cargarDatosDocumento(docId);
	}
})

function cargarDatosDocumento(docId){
	return firebase.database().ref('Documentos/' + docId).once('value').then(function(snapshot) {
		var nombreDoc = snapshot.val().nombre;
		var descripcionDoc = snapshot.val().descripcion;
		var linkDoc = snapshot.val().documento;
		$("#nombreDocEdit").val(nombreDoc);
		$("#descDocEdit").val(descripcionDoc);
		$("#linkDocEdit").val(linkDoc);
	});
}

cargarSelect();

var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#formAgregarDocumentos").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombreDocumento:
	                {
	                    required: true
	                },
	                descripcionDocumento:
	                {
	                    required: true
	                },
	                linkDocumento:
	                {
	                    required: true,
	                    url: true
	                }	                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombreDocumento:
	                {
	                    required: 'Ingrese el nombre del documento.'
	                },
	                descripcionDocumento:
	                {
	                    required: 'Ingrese la descripción del documento.'
	                },
	                linkDocumento:
	                {
	                    required: 'Ingrese el link de la ubicación del documento.'
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
	            	var nombreDoc = formData[0]["value"];
	            	var descDoc = formData[1]["value"];
	            	var linkDoc = formData[2]["value"];
	            	
	            	firebase.database().ref('Documentos/').push({
						documento: linkDoc,
						fecha: moment().valueOf(),
						nombre: nombreDoc,
						descripcion: descDoc
					});

	            	alert("Documento agregado correctamente");
	            	cargarSelect()
	            	$("#nombreDocAgregar").val('');
	            	$("#descDocAgregar").val('');
	            	$("#linkDocAgregar").val('');	            	
	            	return false;
	            }
	        });


	        $("#formEditarDocumentos").validate({                   
	            // Rules for form validation
	            rules:
	            {
	            	editDocSelect:
	            	{
	            		checkSelect: true
	            	},
	                nombreDocumento:
	                {
	                    required: true
	                },
	                descripcionDocumento:
	                {
	                    required: true
	                },
	                linkDocumento:
	                {
	                    required: true,
	                    url: true
	                }	                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	            	editDocSelect:
	            	{
	            		checkSelect: 'Debe seleccionar un documento'
	            	},
	                nombreDocumento:
	                {
	                    required: 'Ingrese el nombre del documento.'
	                },
	                descripcionDocumento:
	                {
	                    required: 'Ingrese la descripción del documento.'
	                },
	                linkDocumento:
	                {
	                    required: 'Ingrese el link de la ubicación del documento.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },
	            submitHandler: function(form)
	            {
	            	var clickedButtonValue = $(document.activeElement).val();
	            	var docId = $("#docSelect").val();
	            	if (clickedButtonValue == "eliminar"){
	            		database.ref("Documentos/"+docId).remove();
	            		alert("Documento eliminado correctamente");
	            	} else {
	            		var formData = $(form).serializeArray()	            	
		            	var nombreDoc = formData[1]["value"];
		            	var descDoc = formData[2]["value"];
		            	var linkDoc = formData[3]["value"];
		            	
		            	database.ref('Documentos/'+docId).update({
						nombre: nombreDoc,
						descripcion: descDoc,
						documento: linkDoc
		            	});

		            	alert("Documento editado correctamente");
	            	}
	            	cargarSelect()
	            	$("#docSelect").val("0");
	            	$("#nombreDocEdit").val('');
	            	$("#descDocEdit").val('');
	            	$("#linkDocEdit").val('');	            	
	            	return false;
	            }
	        });

	        $.validator.addMethod("checkSelect", function(value) {
			   return $("#docSelect").val() != "0"
			});
        }

    };
}();


/*function imprimirInfoDocumentos(){
		var query = firebase.database().ref("Documentos").orderByChild("fecha");
		query.once("value").then(function(snapshot) {
    		snapshot.forEach(function(childSnapshot) {
			    // key will be "ada" the first time and "alan" the second time
			    console.log(childSnapshot.val().nombre)
			    var dt = moment(-childSnapshot.val().fecha).format()
			    console.log(dt)
			});
    	});
	}*/


jQuery(document).ready(function() {
	App.init();
	Masking.initMasking();
	Datepicker.initDatepicker();
	Validation.initValidation();
	StyleSwitcher.initStyleSwitcher();
	moment().locale('es')
	$("#adminNavbar").addClass("active");
	$("#puesto").hide();
	$("#tutoria").hide();
	$("#asistencia").hide();
	$("#puestoEdit").hide();
	$("#tutoriaEdit").hide();
	$("#asistenciaEdit").hide();
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

function cargarPersonas(){
	$("#selectPersonas")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Seleccione una Persona</option>')
	    .val("0");

	firebase.database().ref("Personas/").orderByChild("nombre").once("value").then(function(snap){
		snap.forEach(function(persona) {
			var key = persona.key;
		    var nombre = persona.val().nombre;
		    html = '<option value="'+key+'">'+nombre+'</option>'
		    $("#selectPersonas").append(html);
		})		
	})
}

cargarPersonas();

//Cargamos los puestos que hay en la base de datos
function cargarPuestos(){
	$("#selectPuestos")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Agregar un Puesto</option>')
	    .val("0")
	;
	$("#puestoSelect")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Seleccione un Puesto</option>')
	    .val("0")
	;
	$("#puestoSelectEdit")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Seleccione un Puesto</option>')
	    .val("0")
	;
	var query = firebase.database().ref("Puestos").orderByChild("puesto");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    // key will be "ada" the first time and "alan" the second time
		    var key = childSnapshot.key
		    var puesto = childSnapshot.val().puesto

		    html = '<option value="'+key+'">'+puesto+'</option>'
		    $("#selectPuestos").append(html)
		    $("#puestoSelect").append(html)
		    $("#puestoSelectEdit").append(html)
		});
	});
}

cargarPuestos();


//Cargamos los cursos que hay en la base de datos
function cargarCursos(){
	$("#selectCursos")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Agregar un Curso</option>')
	    .val("0")
	;
	$("#asisSelectAddPersona")
	    .find('option')
	    .remove()
	    .end()
	;
	$("#asisSelectEditPersona")
	    .find('option')
	    .remove()
	    .end()
	;
	$("#tutoSelectAddPersona")
	    .find('option')
	    .remove()
	    .end()
	;
	$("#tutoSelectEditPersona")
	    .find('option')
	    .remove()
	    .end()
	;
	var query = firebase.database().ref("Cursos").orderByChild("curso");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    // key will be "ada" the first time and "alan" the second time
		    var key = childSnapshot.key
		    var curso = childSnapshot.val().curso

		    html = '<option value="'+key+'">'+curso+'</option>'
		    $("#selectCursos").append(html);
		    $("#asisSelectEditPersona").append(html);
		    $("#asisSelectAddPersona").append(html);
		    $("#tutoSelectAddPersona").append(html);
		    $("#tutoSelectEditPersona").append(html);

		});
	});
}

function cargarImagenes(){
	return firebase.database().ref('Horarios/').once('value').then(function(snapshot) {
		var consulta = snapshot.val().consulta;
		var tutoria = snapshot.val().tutoria;
		$("#imgHorarioConsulta").attr("src", consulta)
		$("#imgHorarioTutoria").attr("src", tutoria)
	});	
}

function cargarFooter(){
	return firebase.database().ref('Footer/').once('value').then(function(snapshot) {
		var texto = snapshot.val().texto;
		$("#textoFooter").val(texto)
	});	
}

cargarCursos();
cargarImagenes();
cargarFooter();






$("#checkAsociaEdit").on('change', function(){
	if ($("#checkAsociaEdit").is(":checked")){
		$("#puestoEdit").show()
	} else {
		$("#puestoEdit").hide()
	}
})

$("#checkTutorEdit").on('change', function(){
	if ($("#checkTutorEdit").is(":checked")){
		$("#tutoriaEdit").show()
	} else {
		$("#tutoriaEdit").hide()
	}
})

$("#checkAsistenteEdit").on('change', function(){
	if ($("#checkAsistenteEdit").is(":checked")){
		$("#asistenciaEdit").show()
	} else {
		$("#asistenciaEdit").hide()
	}
})


$("#checkAsocia").on('change', function(){
	if ($("#checkAsocia").is(":checked")){
		$("#puesto").show()
	} else {
		$("#puesto").hide()
	}
})

$("#checkTutor").on('change', function(){
	if ($("#checkTutor").is(":checked")){
		$("#tutoria").show()
	} else {
		$("#tutoria").hide()
	}
})

$("#checkAsistente").on('change', function(){
	if ($("#checkAsistente").is(":checked")){
		$("#asistencia").show()
	} else {
		$("#asistencia").hide()
	}
})

$("#selectPuestos").on('change', function(){
	var selectVal = $(this).val();
	if (selectVal == "0"){
		$("#nombrePuesto").val('');
	} else {
		$("#nombrePuesto").val($('#selectPuestos option:selected').text());
	}
})


$("#selectCursos").on('change', function(){
	var selectVal = $(this).val();
	if (selectVal == "0"){
		$("#nombreCurso").val('');
	} else {
		$("#nombreCurso").val($('#selectCursos option:selected').text());
	}
})


$("#selectPersonas").on('change', function(){
	var selectVal = $(this).val();
	$("#uploadEditPersonaMsj").html("");
	if (selectVal == '0'){
		$("#formEditarPersonas")[0].reset();
		$("#puestoEdit").hide();
		$("#tutoriaEdit").hide();
		$("#asistenciaEdit").hide();
		$("#checkAsociaEdit").attr('checked', false);
		$("#checkAsistenteEdit").attr('checked', false);
		$("#checkTutorEdit").attr('checked', false);
		$("#fotoPersonaEdit").attr("src", "assets/img/user.jpg");
		$("#descAsociaEdit").val("");
		$("#descAsistenciaEdit").val("");
		$("#descTutoriaEdit").val("");
	} else {
		database.ref("Personas/").child(selectVal).once("value").then(function(persona){
			var datos = persona.val();
			//Se cargan los datos personales
			$("#fotoPersonaEdit").attr("src", datos.foto);
			$("#editNombrePersona").val(datos.nombre);
			$("#editTelefono").val(datos.telefono);
			$("#editCorreo").val(datos.correo);
			$("#editFacebook").val(datos.facebook);
			$("#editDescripcion").val(datos.descripcion);

			//Verificamos si es de la asocia
			if (datos.puesto != null){
				$("#checkAsociaEdit").attr('checked', true);
				$("#puestoEdit").show();
				$("#puestoSelectEdit").val(datos.puesto);
				$("#descAsociaEdit").val(datos.descripcionAsocia);
			} else {
				$("#checkAsociaEdit").attr('checked', false);
				$("#puestoEdit").hide();
				$("#puestoSelectEdit").val('0');
			}

			//Verificamos si es asistente, y en cuales cursos
			if (datos.asistencias != null){
				$("#checkAsistenteEdit").attr('checked', true);
				$("#asistenciaEdit").show();
				asistencias = []
				for(var key in datos.asistencias){
				  asistencias.push(key);
				}
				console.log(asistencias);
				$("#asisSelectEditPersona").val(asistencias);
				$("#descAsistenciaEdit").val(datos.descripcionAsistencia);
				console.log(datos.descripcionAsistencia)
			} else {
				$("#checkAsistenteEdit").attr('checked', false);
				$("#asistenciaEdit").hide();
				$("#asisSelectEditPersona").val('0');
			}


			//Verificamos si es tutor, y en cuales cursos
			if (datos.tutorias != null){
				$("#checkTutorEdit").attr('checked', true);
				$("#tutoriaEdit").show();
				tutorias = []
				for(var key in datos.tutorias){
				  tutorias.push(key);
				}
				console.log(tutorias);
				$("#tutoSelectEditPersona").val(tutorias);
				$("#descTutoriaEdit").val(datos.descripcionTutoria);
			} else {
				$("#checkTutorEdit").attr('checked', false);
				$("#tutoriaEdit").hide();
				$("#tutoSelectEditPersona").val('0');
			}
		    
		})
	}
})

//Borrar Persona
$("#delPersona").on('click', function(){
	var selectValue = $("#selectPersonas").val()
	if (selectValue != 0){
		var nombrePersona = $("#editNombrePersona").val();
		if(confirm("Seguro que desea borrar a "+nombrePersona)){
			database.ref('Personas/').child(selectValue).remove();
			$("#formEditarPersonas")[0].reset();
			$("#puestoEdit").hide();
			$("#tutoriaEdit").hide();
			$("#asistenciaEdit").hide();
			$("#checkAsociaEdit").attr('checked', false);
			$("#checkAsistenteEdit").attr('checked', false);
			$("#checkTutorEdit").attr('checked', false);
			$("#fotoPersonaEdit").attr("src", "assets/img/user.jpg");
			cargarPersonas();
		}
	}
});

//Quitar rango de Asocia a todos
$("#resetAsocia").on('click', function(){
	if(confirm("Seguro que desea quitar a los miembros de la Asocia?\
 Esta operación elimina el rango pero no a la persona")){
		var query = firebase.database().ref("Personas").orderByChild("puesto").startAt("");
		query.once("value").then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
			    database.ref('Personas/'+childSnapshot.key).update({
					puesto: null
            	});
			});
		});
	}
});

//Quita el rango de asistentes
$("#resetAsistencias").on('click', function(){
	if(confirm("Seguro que desea quitar a los asistentes?\
 Esta operación elimina el rango pero no a la persona")){
		var query = firebase.database().ref("Personas").orderByChild("asistencias");
		query.once("value").then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
			    database.ref('Personas/'+childSnapshot.key).update({
					asistencias: null,
					descripcionAsistencia: null
            	});
			});
		});
	}
});

//Quita el rango de tutores
$("#resetTutorias").on('click', function(){
	if(confirm("Seguro que desea quitar a los tutores?\
 Esta operación elimina el rango pero no a la persona")){
		var query = firebase.database().ref("Personas").orderByChild("tutorias");
		query.once("value").then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
			    database.ref('Personas/'+childSnapshot.key).update({
					tutorias: null,
					descripcionTutoria:null
            	});
			});
		});
	}
});



var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {

        	$("#formAgregarPersona").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombrePersona:
	                {
	                    required: true
	                },
	                fotoPersona:
	                {
	                	required: true
	                },
	                telefono:
	                {
	                	required: false,
	                	digits: true
	                },
	                correo:
	                {
	                	required: false,
	                	email: true
	                },
	                facebook:
	                {
	                	required: false,
	                	url: true
	                },
	                descripcion:
	                {
	                	required: true
	                },
	                puestoSelect:
	                {
	                	checkPuesto: true
	                },
	                asisSelectAddPersona:
	                {
	                	checkAsis: true
	                },
	                tutoSelectAddPersona:
	                {
	                	checkTuto: true
	                }

	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombrePersona:
	                {
	                    required: 'Ingrese el nombre de la persona.'
	                },
	                fotoPersona:
	                {
	                	required: 'Debe subir una fotografía de la persona.'
	                },
	                telefono:
	                {
	                	digits: 'Ingrese solamente números.'
	                },
	                correo:
	                {
	                	email: 'Ingrese un correo válido.'
	                },
	                facebook:
	                {
	                	url: 'Ingrese un url válido.'
	                },
	                descripcion:
	                {
	                	required: 'Debe ingresar una pequeña descripción.'
	                },
	                puestoSelect:
	                {
	                	checkPuesto: 'Debe elegir el puesto que ocupará la persona en la ASOCIA.'
	                },
	                asisSelectAddPersona:
	                {
	                	checkAsis: 'Debe elegir el curso del cuál la persona es asistente.'
	                },
	                tutoSelectAddPersona:
	                {
	                	checkTuto: 'Debe elegir el curso del cuál la persona es tutor.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },
	            submitHandler: function(form)
	            {
	            	var nombre = $("#nombrePersona").val();
	            	var foto = $("#fotoPersona").get(0).files[0];
	            	var telefono = $("#telefono").val() == "" ? null : $("#telefono").val();
	            	var correo = $("#correo").val() == "" ? null : $("#correo").val();
	            	var facebook = $("#facebook").val() == "" ? null : $("#facebook").val();
	            	var descripcion = $("#descripcion").val();
	            	var puesto = $("#checkAsocia").is(":checked") ? $("#puestoSelect").val() : null;
	            	var asistencia = $("#checkAsistente").is(":checked") ? $("#asisSelectAddPersona").val() : null;
	            	var tutoria = $("#checkTutor").is(":checked") ? $("#tutoSelectAddPersona").val() : null;
	            	var tutorias = [];
	            	if (tutoria != null){
		            	tutoria.forEach(function(val, i){
		            		tutorias[val] = true;
		            	})
	            	}
	            	var asistencias = [];
	            	if (asistencia != null){
		            	asistencia.forEach(function(val, i){
		            		asistencias[val] = true;
		            	})
	            	}
	            	var descAsocia = puesto == null ? null : $("#descAsocia").val();
	            	var descAsistencia = asistencia == null ? null : $("#descAsistencia").val();
	            	var descTutoria = tutoria == null ? null : $("#descTutoria").val();

	            	// Create a root reference
	                var storageRef = firebase.storage().ref();

	                // Create a reference to 'mountains.jpg'
	                var personPictureRef = storageRef.child(foto.name);

	                // Create a reference to 'images/mountains.jpg'
	                var peopleImagesRef = storageRef.child("Personas/"+(moment().valueOf()*Math.random()).toString()+foto.name);
	                var upload = peopleImagesRef.put(foto)


	                upload.on('state_changed', function(snapshot){
	                  // Observe state change events such as progress, pause, and resume
	                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

	                  console.log('Upload is ' + progress + '% done');
	                  $("#uploadPersonaMsj").html("Porfavor espere, subida de datos "+progress+"% completa.")
	                }, function(error) {
	                  // Handle unsuccessful uploads
	                }, function() {
	                  // Handle successful uploads on complete
	                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	                  $("#uploadPersonaMsj").html("Subida de datos completa!")
	                  var downloadURL = upload.snapshot.downloadURL;
	                  database.ref('Personas/').push({
							nombre:nombre,
							foto:downloadURL,
							telefono: telefono,
							correo: correo,
							facebook: facebook,
							descripcion:descripcion,
							puesto:puesto,
							tutorias,
							asistencias,
							descripcionAsocia:descAsocia,
							descripcionAsistencia:descAsistencia,
							descripcionTutoria:descTutoria
		            	});
	                	$("#puesto").hide();
						$("#tutoria").hide();
						$("#asistencia").hide();
						$("#checkAsocia").attr('checked', false);
						$("#checkAsistente").attr('checked', false);
						$("#checkTutor").attr('checked', false);
						$("#descAsocia").val("");
						$("#descAsistencia").val("");
						$("#descTutoria").val("");
						cargarPersonas();
	                    $(form)[0].reset();
	                });
	            	return false;
	            }
	        });



			//Editar Personas
			$("#formEditarPersonas").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                editNombrePersona:
	                {
	                    required: true
	                },
	                editTelefono:
	                {
	                	required: false,
	                	digits: true
	                },
	                editCorreo:
	                {
	                	required: false,
	                	email: true
	                },
	                editFacebook:
	                {
	                	required: false,
	                	url: true
	                },
	                editDescripcion:
	                {
	                	required: true
	                },
	                puestoSelectEdit:
	                {
	                	checkPuestoEdit: true
	                },
	                asisSelectEditPersona:
	                {
	                	checkAsisEdit: true
	                },
	                tutoSelectEditPersona:
	                {
	                	checkTutoEdit: true
	                }

	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                editNombrePersona:
	                {
	                    required: 'Ingrese el nombre de la persona.'
	                },
	                editTelefono:
	                {
	                	digits: 'Ingrese solamente números.'
	                },
	                editCorreo:
	                {
	                	email: 'Ingrese un correo válido.'
	                },
	                editFacebook:
	                {
	                	url: 'Ingrese un url válido.'
	                },
	                editDescripcion:
	                {
	                	required: 'Debe ingresar una pequeña descripción.'
	                },
	                puestoSelectEdit:
	                {
	                	checkPuestoEdit: 'Debe elegir el puesto que ocupará la persona en la ASOCIA.'
	                },
	                asisSelectEditPersona:
	                {
	                	checkAsisEdit: 'Debe elegir el curso del cuál la persona es asistente.'
	                },
	                tutoSelectEditPersona:
	                {
	                	checkTutoEdit: 'Debe elegir el curso del cuál la persona es tutor.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },
	            submitHandler: function(form)
	            {
	            	var idPersona = $("#selectPersonas").val();
	            	var nombre = $("#editNombrePersona").val();
	            	var foto = $("#editFotoPersona").get(0).files[0] == null ? $("#fotoPersonaEdit").attr("src") : $("#editFotoPersona").get(0).files[0];
	            	var telefono = $("#editTelefono").val() == "" ? null : $("#editTelefono").val();
	            	var correo = $("#editCorreo").val() == "" ? null : $("#editCorreo").val();
	            	var facebook = $("#editFacebook").val() == "" ? null : $("#editFacebook").val();
	            	var descripcion = $("#editDescripcion").val();
	            	var puesto = $("#checkAsociaEdit").is(":checked") ? $("#puestoSelectEdit").val() : null;
	            	var asistencia = $("#checkAsistenteEdit").is(":checked") ? $("#asisSelectEditPersona").val() : null;
	            	var tutoria = $("#checkTutorEdit").is(":checked") ? $("#tutoSelectEditPersona").val() : null;
	            	var tutorias = [];
	            	if (tutoria != null){
		            	tutoria.forEach(function(val, i){
		            		tutorias[val] = true;
		            	})
	            	}
	            	var asistencias = [];
	            	if (asistencia != null){
		            	asistencia.forEach(function(val, i){
		            		asistencias[val] = true;
		            	})
	            	}
	            	var descAsocia = puesto == null ? null : $("#descAsociaEdit").val();
	            	var descAsistencia = asistencia == null ? null : $("#descAsistenciaEdit").val();
	            	var descTutoria = tutoria == null ? null : $("#descTutoriaEdit").val();

	            	if (foto != $("#fotoPersonaEdit").attr("src")){
		            	// Create a root reference
		                var storageRef = firebase.storage().ref();

		                // Create a reference to 'mountains.jpg'
		                var personPictureRef = storageRef.child(foto.name);

		                // Create a reference to 'images/mountains.jpg'
		                var peopleImagesRef = storageRef.child("Personas/"+(moment().valueOf()*Math.random()).toString()+foto.name);
		                var upload = peopleImagesRef.put(foto)


		                upload.on('state_changed', function(snapshot){
		                  // Observe state change events such as progress, pause, and resume
		                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
		                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

		                  console.log('Upload is ' + progress + '% done');
		                  $("#uploadEditPersonaMsj").html("Porfavor espere, subida de datos "+progress+"% completa.")
		                }, function(error) {
		                  // Handle unsuccessful uploads
		                }, function() {
		                  // Handle successful uploads on complete
		                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
		                  $("#uploadPersonaMsj").html("Subida de datos completa!")
		                  var downloadURL = upload.snapshot.downloadURL;
		                  database.ref('Personas/'+idPersona).set({
								nombre:nombre,
								foto:downloadURL,
								telefono: telefono,
								correo: correo,
								facebook: facebook,
								descripcion:descripcion,
								puesto:puesto,
								tutorias,
								asistencias,
								descripcionAsocia:descAsocia,
								descripcionAsistencia:descAsistencia,
								descripcionTutoria:descTutoria
			            	});
		                  	cargarPersonas();
		                });
	            	} else {
	            		database.ref('Personas/'+idPersona).set({
							nombre:nombre,
							telefono: telefono,
							foto: foto,
							correo: correo,
							facebook: facebook,
							descripcion:descripcion,
							puesto:puesto,
							tutorias,
							asistencias,
							descripcionAsocia:descAsocia,
							descripcionAsistencia:descAsistencia,
							descripcionTutoria:descTutoria
		            	});
		            	$("#uploadEditPersonaMsj").html("Subida de datos completa!")
		            	cargarPersonas();
	            	}
	            	$("#formEditarPersonas")[0].reset();
					$("#puestoEdit").hide();
					$("#tutoriaEdit").hide();
					$("#asistenciaEdit").hide();
					$("#fotoPersonaEdit").attr("src", "assets/img/user.jpg");
					$("#selectPersonas").val('0');
					$("#checkAsociaEdit").attr('checked', false);
					$("#checkAsistenteEdit").attr('checked', false);
					$("#checkTutorEdit").attr('checked', false);
					$("#descAsociaEdit").val("");
					$("#descAsistenciaEdit").val("");
					$("#descTutoriaEdit").val("");

                    $(form)[0].reset();
	            	return false;
	            }
	        });



	        $("#formEditarPuestos").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombrePuesto:
	                {
	                    required: true
	                }                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombrePuesto:
	                {
	                    required: 'Ingrese el nombre del puesto a agregar/editar.'
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
	            	var selectValue = formData[0]["value"];
	            	var nombrePuesto = formData[1]["value"];

	            	if (selectValue == "0"){
	            		firebase.database().ref('Puestos/').push({
							puesto: nombrePuesto
						});
						
	            	} else {
	            		database.ref('Puestos/'+selectValue).update({
							puesto: nombrePuesto
		            	});
	            	}
	            	cargarPuestos()
	            	$("#selectPuestos").val("0");
	            	$("#nombrePuesto").val('');

	            	return false;	            	
	            }
	        });

	        $("#formEditarCursos").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombreCurso:
	                {
	                    required: true
	                }                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombreCurso:
	                {
	                    required: 'Ingrese el nombre del curso a agregar/editar.'
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
	            	var selectValue = formData[0]["value"];
	            	var nombreCurso = formData[1]["value"];

	            	if (selectValue == "0"){
	            		firebase.database().ref('Cursos/').push({
							curso: nombreCurso
						});
						
	            	} else {
	            		database.ref('Cursos/'+selectValue).update({
							curso: nombreCurso
		            	});
	            	}
	            	cargarCursos()
	            	$("#selectCursos").val("0");
	            	$("#nombreCurso").val('');

	            	return false;	            	
	            }
	        });

	        $("#formHorarioConsulta").validate({
	        	rules:
	        	{
	        		nuevoHorarioConsulta:
	        		{
	        			required: true,
	        			extension: true
	        		}
	        	},

	        	messages:
	        	{
	        		nuevoHorarioConsulta:
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
		            var file = $("#nuevoHConsulta").get(0).files[0];

		            // Create a root reference
	                var storageRef = firebase.storage().ref();

	                // Create a reference to 'mountains.jpg'
	                var mountainsRef = storageRef.child(file.name);

	                // Create a reference to 'images/mountains.jpg'
	                var mountainImagesRef = storageRef.child("Consultas/"+(moment().valueOf()*Math.random()).toString()+file.name);
	                var link = mountainImagesRef.put(file)


	                link.on('state_changed', function(snapshot){
	                  // Observe state change events such as progress, pause, and resume
	                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

	                  console.log('Upload is ' + progress + '% done');
	                  $("#uploadConsultaMsj").html("Porfavor espere, subida de imagen "+progress+"% completada.")
	                }, function(error) {
	                  // Handle unsuccessful uploads
	                }, function() {
	                  // Handle successful uploads on complete
	                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	                  $("#uploadConsultaMsj").html("Subida de imagen completada!")
	                  var downloadURL = link.snapshot.downloadURL;
	                  firebase.database().ref('Horarios/').update({
	                    consulta: downloadURL
	                  });
	                  $("#imgHorarioConsulta").attr("src", downloadURL);
	                    $(form)[0].reset();
	                });

	            

	            	return false;
	            }
	        });

	        $("#formHorarioTutoria").validate({
	        	rules:
	        	{
	        		nuevoHorarioTutoria:
	        		{
	        			required: true,
	        			extension: true
	        		}
	        	},

	        	messages:
	        	{
	        		nuevoHorarioTutoria:
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
		            var file = $("#nuevoHTutoria").get(0).files[0];

		            // Create a root reference
	                var storageRef = firebase.storage().ref();

	                // Create a reference to 'mountains.jpg'
	                var mountainsRef = storageRef.child(file.name);

	                // Create a reference to 'images/mountains.jpg'
	                var mountainImagesRef = storageRef.child("Tutorias/"+(moment().valueOf()*Math.random()).toString()+file.name);
	                var link = mountainImagesRef.put(file)


	                link.on('state_changed', function(snapshot){
	                  // Observe state change events such as progress, pause, and resume
	                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

	                  console.log('Upload is ' + progress + '% done');
	                  $("#uploadTutoriaMsj").html("Porfavor espere, subida de imagen "+progress+"% completada.")
	                }, function(error) {
	                  // Handle unsuccessful uploads
	                }, function() {
	                  // Handle successful uploads on complete
	                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	                  $("#uploadTutoriaMsj").html("Subida de imagen completada!")
	                  var downloadURL = link.snapshot.downloadURL;
	                  firebase.database().ref('Horarios/').update({
	                    tutoria: downloadURL
	                  });
	                  $("#imgHorarioTutoria").attr("src", downloadURL);
	                    $(form)[0].reset();
	                });

	            

	            	return false;
	            }
	        });

	        $("#formFooter").validate({
	        	rules:
	        	{
	        		textoFooter:
	        		{
	        			required: true
	        		}
	        	},

	        	messages:
	        	{
	        		textoFooter:
	        		{
	        			required: 'Debe escribir el texto del footer.'
	        		}
	        	},

	        	errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },

	            submitHandler: function(form)
	            {
	            	var nuevoTexto = $("#textoFooter").val();
	            	
	                firebase.database().ref('Footer/').update({
	                    texto: nuevoTexto
	                  });

	                alert("Datos modificados correctamente");

	            	return false;
	            }
	        });

	        $.validator.addMethod("checkPuesto", function(value) {
	        	if ($("#checkAsocia").is(":checked")){
	        		return $("#puestoSelect").val() != "0";
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkAsis", function(value) {
	        	if ($("#checkAsistente").is(":checked")){
	        		return $("#asisSelectAddPersona option:selected").length != 0;
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkTuto", function(value) {
	        	if ($("#checkTutor").is(":checked")){
	        		return $("#tutoSelectAddPersona option:selected").length != 0;
	        	} else {
	        		return true;
	        	}			   
			});

			$.validator.addMethod("checkPuestoEdit", function(value) {
	        	if ($("#checkAsociaEdit").is(":checked")){
	        		return $("#puestoSelectEdit").val() != "0";
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkAsisEdit", function(value) {
	        	if ($("#checkAsistenteEdit").is(":checked")){
	        		return $("#asisSelectEditPersona option:selected").length != 0;
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkTutoEdit", function(value) {
	        	if ($("#checkTutorEdit").is(":checked")){
	        		return $("#tutoSelectEditPersona option:selected").length != 0;
	        	} else {
	        		return true;
	        	}			   
			});

        }

    };
}();
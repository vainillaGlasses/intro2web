jQuery(document).ready(function() {
	App.init();
	Masking.initMasking();
	Datepicker.initDatepicker();
	Validation.initValidation();
	StyleSwitcher.initStyleSwitcher();
	moment().locale('es')
	$("#articulosNavbar").addClass("active");
	$("#descuento").hide();
	$("#encargo").hide();
	$("#descuentoEdit").hide();
	$("#encargoEdit").hide();
	$("#formAgregarArticulo")[0].reset();
	$("#formEditarArticulo")[0].reset();
	$("#checkOferta").attr('checked', false);
	$("#checkOfertaEdit").attr('checked', false);
	$("#checkEncargo").attr('checked', false);
	$("#checkEncargoEdit").attr('checked', false);	
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


$("#checkOferta").on('change', function(){
	if ($("#checkOferta").is(":checked")){
		$("#descuento").show()
	} else {
		$("#descuento").hide()
	}
})


$("#checkEncargo").on('change', function(){
	if ($("#checkEncargo").is(":checked")){
		$("#encargo").show()
	} else {
		$("#encargo").hide()
	}
})

$("#checkOfertaEdit").on('change', function(){
	if ($("#checkOfertaEdit").is(":checked")){
		$("#descuentoEdit").show()
	} else {
		$("#descuentoEdit").hide()
	}
})


$("#checkEncargoEdit").on('change', function(){
	if ($("#checkEncargoEdit").is(":checked")){
		$("#encargoEdit").show()
	} else {
		$("#encargoEdit").hide()
	}
})


function cargarArticulos(){
	$("#selectArticulos")
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Seleccione un Artículo</option>')
	    .val("0");

	firebase.database().ref("Articulos/").orderByChild("nombre").once("value").then(function(snap){
		snap.forEach(function(articulo) {
			var key = articulo.key;
		    var nombre = articulo.val().nombre;
		    html = '<option value="'+key+'">'+nombre+'</option>'
		    $("#selectArticulos").append(html);
		})		
	})
}

cargarArticulos();


$("#selectArticulos").on('change', function(){
	var selectVal = $(this).val();
	$("#uploadArticuloEditMsj").html("")
	if (selectVal == '0'){
		$("#formEditarArticulo")[0].reset();
		$("#descuentoEdit").hide();
		$("#encargoEdit").hide();
		$("#checkOfertaEdit").attr('checked', false);
		$("#checkEncargoEdit").attr('checked', false);
		$("#verFotoArticulo").attr("src", "assets/img/art.jpg");
	} else {
		database.ref("Articulos/").child(selectVal).once("value").then(function(articulo){
			var datos = articulo.val();
			//Se cargan los datos del articulo
			$("#verFotoArticulo").attr("src", datos.foto);
			$("#nombreEdit").val(datos.nombre);
			$("#precioEdit").val(datos.precio);
			$("#descripcionEdit").val(datos.descripcion);

			//Verificamos si posee algún descuento
			if (datos.precioOferta != null){
				$("#checkOfertaEdit").attr('checked', true);
				$("#descuentoEdit").show();
				$("#precioDescuentoEdit").val(datos.precioOferta);
			} else {
				$("#checkOfertaEdit").attr('checked', false);
				$("#descuentoEdit").hide();
				$("#precioDescuentoEdit").val("");
			}

			//Verificamos si es por encargo
			if (datos.linkEncargo != null){
				$("#checkEncargoEdit").attr('checked', true);
				$("#encargoEdit").show();
				$("#linkEncargoEdit").val(datos.linkEncargo);
				$("#fechaLimiteEncargoEdit").val(datos.fechaLimiteEncargo)
			} else {
				$("#checkEncargoEdit").attr('checked', false);
				$("#encargoEdit").hide();
				$("#linkEncargoEdit").val("");
			}
		    
		})
	}
})


//Borrar Articulo
$("#delArticulo").on('click', function(){
	var selectValue = $("#selectArticulos").val()
	if (selectValue != 0){
		var nombreArticulo = $("#nombreEdit").val();
		if(confirm("Seguro que desea borrar "+nombreArticulo)){
			database.ref('Articulos/').child(selectValue).remove();
			$("#formEditarArticulo")[0].reset();
			$("#descuentoEdit").hide();
			$("#encargoEdit").hide();
			$("#checkOfertaEdit").attr('checked', false);
			$("#checkEncargoEdit").attr('checked', false);
			$("#verFotoArticulo").attr("src", "assets/img/art.jpg");
			cargarArticulos();
		}
	}
});


var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {

        	$("#formAgregarArticulo").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombre:
	                {
	                    required: true
	                },
	                fotoArticulo:
	                {
	                	required: true
	                },
	                descripcion:
	                {
	                	required: true
	                },
	                precio:
	                {
	                	required: true,
	                	digits: true
	                },	                
	                precioDescuento:
	                {
	                	checkOferta: true
	                },
	                fechaLimiteEncargo:
	                {
	                	checkFechaEncargo: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombre:
	                {
	                    required: 'Ingrese el nombre del artículo.'
	                },
	                fotoArticulo:
	                {
	                	required: 'Debe subir una fotografía del artículo.'
	                },
	                descripcion:
	                {
	                	required: 'Debe ingresar una pequeña descripción.'
	                },
	                precio:
	                {
	                	required: 'Debe ingresar el precio del artículo.',
	                	digits: 'Ingrese solamente números.'
	                },
	                precioDescuento:
	                {
	                	checkOferta: 'Debe ingresar el precio en oferta del artículo.'
	                },
	                fechaLimiteEncargo:
	                {
	                	checkFechaEncargo: 'Debe seleccionar la fecha límite del encargo.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },
	            submitHandler: function(form)
	            {
	            	var nombre = $("#nombre").val();
	            	var foto = $("#fotoArticulo").get(0).files[0];
	            	var descripcion = $("#descripcion").val();
	            	var precio = $("#precio").val();
	            	var precioOferta = $("#checkOferta").is(":checked") ? $("#precioDescuento").val() : null;
	            	var linkEncargo = $("#checkEncargo").is(":checked") ? $("#linkEncargo").val() : null;
	            	var fechaLimiteEncargo = $("#checkEncargo").is(":checked") ? $("#fechaLimiteEncargo").val() : null;

	            	// Create a root reference
	                var storageRef = firebase.storage().ref();

	                // Create a reference to 'mountains.jpg'
	                var artPictureRef = storageRef.child(foto.name);

	                // Create a reference to 'images/mountains.jpg'
	                var artImagesRef = storageRef.child("Articulos/"+(moment().valueOf()*Math.random()).toString()+foto.name);
	                var upload = artImagesRef.put(foto)


	                upload.on('state_changed', function(snapshot){
	                  // Observe state change events such as progress, pause, and resume
	                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

	                  console.log('Upload is ' + progress + '% done');
	                  $("#uploadArticuloMsj").html("Porfavor espere, subida de datos "+progress+"% completa.")
	                }, function(error) {
	                  // Handle unsuccessful uploads
	                }, function() {
	                  // Handle successful uploads on complete
	                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	                  $("#uploadArticuloMsj").html("Subida de datos completa!")
	                  var downloadURL = upload.snapshot.downloadURL;
	                  database.ref('Articulos/').push({
							nombre:nombre,
							foto:downloadURL,
							precio: precio,
							precioOferta: precioOferta,
							descripcion:descripcion,
							linkEncargo:linkEncargo,
							fechaLimiteEncargo:fechaLimiteEncargo
		            	});
	                	$("#descuento").hide();
						$("#encargo").hide();
						$("#checkOferta").attr('checked', false);
						$("#checkEncargo").attr('checked', false);
						cargarArticulos();
	                    $(form)[0].reset();
	                });
	            	return false;
	            }
	        });

			$("#formEditarArticulo").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombreEdit:
	                {
	                    required: true
	                },
	                descripcionEdit:
	                {
	                	required: true
	                },
	                precioEdit:
	                {
	                	required: true,
	                	digits: true
	                },	                
	                precioDescuentoEdit:
	                {
	                	checkOferta: true
	                },
	                fechaLimiteEncargoEdit:
	                {
	                	checkFechaEncargoEdit: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombreEdit:
	                {
	                    required: 'Ingrese el nombre del artículo.'
	                },
	                descripcionEdit:
	                {
	                	required: 'Debe ingresar una pequeña descripción.'
	                },
	                precioEdit:
	                {
	                	required: 'Debe ingresar el precio del artículo.',
	                	digits: 'Ingrese solamente números.'
	                },
	                precioDescuentoEdit:
	                {
	                	checkOfertaEdit: 'Debe ingresar el precio en oferta del artículo.'
	                },
	                fechaLimiteEncargoEdit:
	                {
	                	checkFechaEncargoEdit: 'Debe seleccionar la fecha límite del encargo'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            },
	            submitHandler: function(form)
	            {
	            	var idArticulo = $("#selectArticulos").val();
	            	var nombre = $("#nombreEdit").val();
	            	var foto = $("#fotoEditArticulo").get(0).files[0] == null ? $("#verFotoArticulo").attr("src") : $("#fotoEditArticulo").get(0).files[0];
	            	var descripcion = $("#descripcionEdit").val();
	            	var precio = $("#precioEdit").val();
	            	var precioOferta = $("#checkOfertaEdit").is(":checked") ? $("#precioDescuentoEdit").val() : null;
	            	var linkEncargo = $("#checkEncargoEdit").is(":checked") ? $("#linkEncargoEdit").val() : null;
	            	var fechaLimiteEncargo = $("#checkEncargoEdit").is(":checked") ? $("#fechaLimiteEncargoEdit").val() : null;

	            	if (foto != $("#verFotoArticulo").attr("src")){

		            	// Create a root reference
		                var storageRef = firebase.storage().ref();

		                // Create a reference to 'mountains.jpg'
		                var artPictureRef = storageRef.child(foto.name);

		                // Create a reference to 'images/mountains.jpg'
		                var artImagesRef = storageRef.child("Articulos/"+(moment().valueOf()*Math.random()).toString()+foto.name);
		                var upload = artImagesRef.put(foto)


		                upload.on('state_changed', function(snapshot){
		                  // Observe state change events such as progress, pause, and resume
		                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
		                  var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

		                  console.log('Upload is ' + progress + '% done');
		                  $("#uploadArticuloEditMsj").html("Porfavor espere, subida de datos "+progress+"% completa.")
		                }, function(error) {
		                  // Handle unsuccessful uploads
		                }, function() {
		                  // Handle successful uploads on complete
		                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
		                  $("#uploadArticuloEditMsj").html("Subida de datos completa!")
		                  var downloadURL = upload.snapshot.downloadURL;
		                  database.ref('Articulos/'+idArticulo).set({
								nombre:nombre,
								foto:downloadURL,
								precio: precio,
								precioOferta: precioOferta,
								descripcion:descripcion,
								linkEncargo:linkEncargo,
								fechaLimiteEncargo:fechaLimiteEncargo
			            	});
		                  cargarArticulos();
		                	
		                });
	            	} else {
	            		database.ref('Articulos/'+idArticulo).set({
							nombre:nombre,
							foto:foto,
							precio: precio,
							precioOferta: precioOferta,
							descripcion:descripcion,
							linkEncargo:linkEncargo,
							fechaLimiteEncargo:fechaLimiteEncargo
		            	});
		            	cargarArticulos();
		            	$("#uploadArticuloEditMsj").html("Subida de datos completa!")
	            	}
	            	$("#descuentoEdit").hide();
					$("#encargoEdit").hide();
					$("#checkOfertaEdit").attr('checked', false);
					$("#checkEncargoEdit").attr('checked', false);
					$("#verFotoArticulo").attr("src", "assets/img/art.jpg");
                    $(form)[0].reset();
	            	return false;
	            }
	        });


			$.validator.addMethod("checkOferta", function(value) {
	        	if ($("#checkOferta").is(":checked")){
	        		return $("#precioDescuento").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkEncargo", function(value) {
	        	if ($("#checkEncargo").is(":checked")){
	        		return $("#linkEncargo").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});

			$.validator.addMethod("checkFechaEncargo", function(value) {
	        	if ($("#checkEncargo").is(":checked")){
	        		return $("#fechaLimiteEncargo").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});

			$.validator.addMethod("checkOfertaEdit", function(value) {
	        	if ($("#checkOfertaEdit").is(":checked")){
	        		return $("#precioDescuentoEdit").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});


			$.validator.addMethod("checkEncargoEdit", function(value) {
	        	if ($("#checkEncargoEdit").is(":checked")){
	        		return $("#linkEncargoEdit").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});

			$.validator.addMethod("checkFechaEncargoEdit", function(value) {
	        	if ($("#checkEncargoEdit").is(":checked")){
	        		return $("#fechaLimiteEncargoEdit").val() != "";
	        	} else {
	        		return true;
	        	}			   
			});

        }

    };
}();


var Datepicker = function () {

    return {
        
        //Datepickers
        initDatepicker: function () {
	        // Regular datepicker
	        $('#fechaLimiteEncargo').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });



	        $('#fechaLimiteEncargoEdit').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
        }

    };
}();
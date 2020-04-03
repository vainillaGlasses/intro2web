jQuery(document).ready(function() {
	App.init();
	StyleSwitcher.initStyleSwitcher();
	$("#documentosNavbar").addClass("active");

	moment().locale('es')

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


	function obtenerDocumentos(){
		docCount = 1
		var query = firebase.database().ref("Documentos").orderByChild("fecha");
		query.once("value").then(function(snapshot) {
    		snapshot.forEach(function(childSnapshot) {
			    // key will be "ada" the first time and "alan" the second time
			    var nombre = childSnapshot.val().nombre
			    var descripcion = childSnapshot.val().descripcion
			    var link = childSnapshot.val().documento
			    var timestamp = childSnapshot.val().fecha
			    var fecha = moment(timestamp).locale('es').format('LL')
			    var hora = moment(timestamp).locale('es').format('LT')


			    html = '<div class="panel panel-default"> \
							<div class="panel-heading">\
								<h4 class="panel-title">\
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse'+docCount+'">\
										'+nombre+'\
									</a>\
								</h4>\
							</div>\
							<div id="collapse'+docCount+'" class="panel-collapse collapse">\
								<div class="panel-body">\
									<p>Fecha de publicación: '+fecha+' a las '+hora+'<br><br>'+descripcion+'.</p>\
								</div>\
								<div class="document-download"><button id="'+link+'" class="btn-u botonVer">Ver</button></div>\
							</div>\
						</div>'
			    $("#accordion").prepend(html)
			    docCount += 1
			});
    	});
	}

	$('body').on('click', '.botonVer', function() {
    	window.open($(this).attr('id'))
	});

	obtenerDocumentos()

});


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


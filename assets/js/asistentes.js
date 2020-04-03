jQuery(document).ready(function() {
	App.init();
	App.initCounter();
	App.initParallaxBg();
	OwlCarousel.initOwlCarousel();
	StyleSwitcher.initStyleSwitcher();
	$("#serviciosNavbar").addClass("active");
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

function obtenerAsistentes(){
	var personaCount = 1;
	var html = "";
	var query = firebase.database().ref("Personas").orderByChild("nombre");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var asistencias = childSnapshot.val().asistencias;
			if (asistencias != null){
				var nombre = childSnapshot.val().nombre;
				var foto = childSnapshot.val().foto;
				var telefono = childSnapshot.val().telefono;
				var correo = childSnapshot.val().correo;
				var facebook = childSnapshot.val().facebook;
				var descripcion = childSnapshot.val().descripcion;
				var descripcionAsistencia = childSnapshot.val().descripcionAsistencia;

				if (personaCount % 4 == 1){
					html += '<div class="row team-v6 margin-bottom-60 featured-blog">'
				}

				html += '<div class="col-md-3 col-sm-6 md-margin-bottom-50">\
						<img class="img-responsive thumbnail" style="height:250px;width:100%;" src="'+foto+'" alt="">\
						<span>'+nombre+'</span>\
						<small id="'+childSnapshot.key+'"></small>\
						<p>'+descripcion+' '+(descripcionAsistencia == null ? "" : descripcionAsistencia)+'\
						'+(correo == null ? "" : ("<br><b>Correo:</b> "+correo))+(telefono == null ? "" : "<br><b>Teléfono:</b> "+telefono)+'\
						'+(facebook == null ? "" : "<br><b>Facebook:</b> "+'<a target="_blank" href="'+facebook+'">'+facebook+"</a>")+'\
						</p>\
					</div>'

				if (personaCount % 4 == 0){
					html += '</div>'
				}
		    	for (var key in asistencias){
		    		obtenerCursos(key, childSnapshot.key);		    		
		    	}
				personaCount += 1;
			}
		});
		if (personaCount % 4 != 0){
			html += "</div>";
		}
		$("#asistentesDiv").append(html);
	});
}

function obtenerCursos(key, nombre){
	var cursos = "";
	database.ref('Cursos/'+key).once('value', function(cursoSnap) {
		$("#"+nombre).append(cursoSnap.val().curso+". ");
	});
	
}

obtenerAsistentes();
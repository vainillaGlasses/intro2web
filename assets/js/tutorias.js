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

function cargarImagenes(){
	return firebase.database().ref('Horarios/').once('value').then(function(snapshot) {
		var tutoria = snapshot.val().tutoria;
		$("#imgHorarioTutoria").attr("src", tutoria)
	});	
}

cargarImagenes();

function cargarFooter(){
	return firebase.database().ref('Footer/').once('value').then(function(snapshot) {
		var texto = snapshot.val().texto;
		$("#textoFooter").html(texto);
	});	
}

cargarFooter();

function obtenerTutores(){
	var personaCount = 1;
	var html = "";
	var query = firebase.database().ref("Personas").orderByChild("nombre");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var tutorias = childSnapshot.val().tutorias;
			if (tutorias != null){
				var nombre = childSnapshot.val().nombre;
				var foto = childSnapshot.val().foto;
				var telefono = childSnapshot.val().telefono;
				var correo = childSnapshot.val().correo;
				var facebook = childSnapshot.val().facebook;
				var descripcion = childSnapshot.val().descripcion;
				var descripcionTutoria = childSnapshot.val().descripcionTutoria;

				if (personaCount % 4 == 1){
					html += '<div class="row team-v6 margin-bottom-60 featured-blog">'
				}

				html += '<div class="col-md-3 col-sm-6 md-margin-bottom-50">\
						<img class="img-responsive thumbnail" style="height:250px;width:100%;" src="'+foto+'" alt="">\
						<span>'+nombre+'</span>\
						<small id="'+childSnapshot.key+'"></small>\
						<p>'+descripcion+' '+(descripcionTutoria == null ? "" : descripcionTutoria)+'\
						'+(correo == null ? "" : ("<br><b>Correo:</b> "+correo))+(telefono == null ? "" : "<br><b>Teléfono:</b> "+telefono)+'\
						'+(facebook == null ? "" : "<br><b>Facebook:</b> "+'<a target="_blank" href="'+facebook+'">'+facebook+"</a>")+'\
						</p>\
					</div>'

				if (personaCount % 4 == 0){
					html += '</div>'
				}
		    	for (var key in tutorias){
		    		obtenerCursos(key, childSnapshot.key);		    		
		    	}
				personaCount += 1;
			}
		});
		if (personaCount % 4 != 0){
			html += "</div>";
		}
		$("#tutoresDiv").append(html);
	});
}

function obtenerCursos(key, nombre){
	var cursos = "";
	database.ref('Cursos/'+key).once('value', function(cursoSnap) {
		$("#"+nombre).append(cursoSnap.val().curso+". ");
	});
	
}

obtenerTutores();
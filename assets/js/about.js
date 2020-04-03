jQuery(document).ready(function() {
	App.init();
	StyleSwitcher.initStyleSwitcher();
	$("#aboutNavbar").addClass("active");
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


function obtenerAsocia(){
	var personaCount = 1;
	var html = "";
	var query = firebase.database().ref("Personas").orderByChild("puesto").startAt("");
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			//Join con Puestos
			database.ref('Puestos/'+childSnapshot.val().puesto).once('value', function(puestoSnap) {
				var nombre = childSnapshot.val().nombre;
				var foto = childSnapshot.val().foto;
				var puesto = puestoSnap.val().puesto;
				var telefono = childSnapshot.val().telefono;
				var correo = childSnapshot.val().correo;
				var facebook = childSnapshot.val().facebook;
				var descripcion = childSnapshot.val().descripcion;
				var descripcionAsocia = childSnapshot.val().descripcionAsocia;

				if (personaCount % 2 != 0){
					html += '<div class="row team-v7 no-gutter equal-height-columns">\
							<div class="col-md-4 col-md-offset-2 team-arrow-right">'
				} else {
					html += '<div class="row team-v7 no-gutter equal-height-columns">\
							<div class="col-md-6 col-md-push-7 team-arrow-left">'
				}

				html += '<div class="dp-table">\
						<div class="equal-height-column dp-table-cell team-v7-in">\
                            <span class="team-v7-name">'+nombre+'</span>\
							<span class="team-v7-position">'+puesto+'</span>\
							<p>'+descripcion+(descripcionAsocia == null ? "" : "<br>"+descripcionAsocia)+(telefono == null ? "" : "<br>Teléfono: "+telefono)+'</p>\
							<ul class="list-inline social-icons-v1">\
								<li><a target="_blank" href="'+(facebook == null ? "" : facebook)+'"><i class="fa fa-facebook"></i></a></li>\
								<li><a href="mailto:'+(correo == null ? "" : correo)+'"><i class="fa fa-envelope"></i></a></li>\
							</ul>\
							<div class="evaluation-possition"><a target="_blank" href="https://goo.gl/forms/gZ92rb6cf03rpX5H3">Evaluar<i class="fa fa-external-link"></i></a></div>\
						</div>\
					</div>\
				</div>'

				if (personaCount % 2 != 0){
					html += '<div class="col-md-5 shadow-wrapper">\
							<div class="box-shadow shadow-effect-2">\
							<img class="img-responsive full-width center-block equal-height-column img-bordered" src="'+foto+'">\
							</div>\
							</div>';
				} else {
					html += '<div class="col-md-5 col-md-pull-5 shadow-wrapper">\
							<div class="box-shadow shadow-effect-2">\
							<img class="img-responsive full-width center-block equal-height-column img-bordered" src="'+foto+'">\
							</div>\
							</div>';
				}

				html += '</div>';

				$("#asociaDiv").append(html);
				html = "";
				personaCount += 1;
		    });
		});
	});
}

obtenerAsocia();

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
		var consulta = snapshot.val().consulta;
		$("#imgHorarioConsulta").attr("src", consulta)
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
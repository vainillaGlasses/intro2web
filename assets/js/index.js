jQuery(document).ready(function() {
	App.init();
	App.initParallaxBg();
	FancyBox.initFancybox();
	OwlCarousel.initOwlCarousel();
	StyleSwitcher.initStyleSwitcher();
	RevolutionSlider.initRSfullWidth();
	$("#indexNavbar").addClass("active");

	moment().locale()

	// Initialize Firebase
	var config = {
	apiKey: "[KEY]",
	authDomain: "[KEY]",
	databaseURL: "[KEY]",
	projectId: "[KEY]",
	storageBucket: "[KEY]",
	messagingSenderId: "[KEY]"
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

	function cargarTextos(){
		//Se carga el texto de la presentación, misión y visión
		return firebase.database().ref('/Inicio/').once('value').then(function(snapshot) {
			var presentacion = snapshot.val().Presentacion;
			var mision = snapshot.val().Mision;
			var vision = snapshot.val().Vision;
			$("#textoPresentacion").html(presentacion)
			$("#textoMision").html(mision)
			$("#textoVision").html(vision)
		});
	}

	cargarTextos();


});



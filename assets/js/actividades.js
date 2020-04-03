jQuery(document).ready(function() {
	App.init();
	StyleSwitcher.initStyleSwitcher();
	$("#actividadesNavbar").addClass("active");
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
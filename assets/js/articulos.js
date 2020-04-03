jQuery(document).ready(function() {
	App.init();
	App.initScrollBar();
	App.initParallaxBg();
	OwlCarousel.initOwlCarousel();
	RevolutionSlider.initRSfullWidth();
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

function cargarArticulos(){
	var html = "";
	firebase.database().ref("Articulos/").orderByChild("nombre").once("value").then(function(snap){
		snap.forEach(function(articulo) {
		    var nombre = articulo.val().nombre;
		    var foto = articulo.val().foto;
		    var precio = articulo.val().precio;
		    var descripcion = articulo.val().descripcion;
		    var precioOferta = articulo.val().precioOferta;
		    var linkEncargo = articulo.val().linkEncargo;
		    var fechaLimiteEncargo = articulo.val().fechaLimiteEncargo;

		    html += '<div class="thumb-product">\
					<img class="thumb-product-img" src="'+foto+'" alt="">\
					<div class="thumb-product-in">\
						<h4>'+nombre+'</h4>\
						<span class="thumb-product-type">'+descripcion+'</span>\
					</div>\
					<ul class="list-inline overflow-h">'

			if (precioOferta != null){
				html += '<li class="thumb-product-price line-through">¢'+precio+'</li>\
						<li class="thumb-product-price">¢'+precioOferta+'</li>'
			} else {
				html += '<li class="thumb-product-price">¢'+precio+'</li>'
			}

			

			if (linkEncargo != null){
				html += '<li class="thumb-product-price">Fecha límite: '+fechaLimiteEncargo+'</li>'
				if (isURL(linkEncargo)){
					html += '<li class="thumb-product-purchase"><a target="_blank" href="'+linkEncargo+'">Encargar <i class="fa fa-external-link"></i></a></li>'
				} else {
					html += '<li class="thumb-product-price">Encargo en Oficina</li>'
				}

			}

			html += '</ul>\
					</div>'

			if (linkEncargo != null){
				$("#encargoDiv").append(html);
			} else {
				$("#oficinaDiv").append(html);
			}

			html = "";		    
		})		
	})
}



function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}




cargarArticulos();
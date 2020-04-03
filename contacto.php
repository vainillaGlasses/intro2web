<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="es"> <!--<![endif]-->
<head>
	<title>Contacto | ASODEC San José</title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico">

	<!-- Web Fonts -->
	<link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin'>

	<!-- CSS Global Compulsory -->
	<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">

	<!-- CSS Header and Footer -->
	<link rel="stylesheet" href="assets/css/headers/header-default.css">
	<link rel="stylesheet" href="assets/css/footers/footer-v1.css">

	<!-- CSS Implementing Plugins -->
	<link rel="stylesheet" href="assets/plugins/animate.css">
	<link rel="stylesheet" href="assets/plugins/line-icons/line-icons.css">
	<link rel="stylesheet" href="assets/plugins/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css">
	<link rel="stylesheet" href="assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css">
	<!--[if lt IE 9]><link rel="stylesheet" href="assets/plugins/sky-forms-pro/skyforms/css/sky-forms-ie8.css"><![endif]-->

	<!-- CSS Page Style -->
	<link rel="stylesheet" href="assets/css/pages/page_contact.css">

	<!-- CSS Theme -->
	<link rel="stylesheet" href="assets/css/theme-colors/asodec.css" id="style_color">
	<link rel="stylesheet" href="assets/css/theme-skins/dark.css">

	<!-- CSS Customization -->
	<link rel="stylesheet" href="assets/css/custom.css">

</head>

<body class="header-fixed header-fixed-space-default">
	<div class="wrapper">
		<!--=== Header ===-->
		<?php
			include('navbar.php')
		?>
		<!--=== End Header ===-->

		<!--=== Content Part ===-->
		<div class="container content">
			<div class="row margin-bottom-30">
				
				<div class="col-md-3">
					<!-- Contacts -->
					<div class="headline"><h2>Contacto</h2></div>
					<ul class="list-unstyled who margin-bottom-30">
						<li id="direccion"></li>
						<li id="correo"></li>
						<li id="tel"></li>
						<li id="sitioWeb"></li>
						<li id="facebook"></li>
						<li id="instagram"></li>
					</ul>

					<!-- Here! -->
					<div class="headline"><h2>Estamos Aquí</h2></div>
					<!-- Google Map -->
					<div id="map" class="map map-box map-box-space1 margin-bottom-40">
					</div><!---/map-->
					<!-- End Google Map -->
					
					<!-- Here! -->
					<div class="headline"><h2>Dentro del TEC</h2></div>
					<!-- Google Map -->
					<div class="mapatec">
					    <img src="assets/img/mapa.png" alt="">
					</div><!---/map-->
					<!-- End Google Map -->
				</div><!--/col-md-3-->

				<div class="col-md-9 md-margin-bottom-50">
				<div class="headline"><h2>Horario de Atención</h2></div>
					<div class="featured-img">
						<img style="width:75%" id="imgHorarioAsocia" class="img-responsive margin-bottom-20 center-block" src="" alt="">
					</div>			
				</div>

				<!-- contacto -->
			    <div class="col-md-9">
					<div class="headline"><h2>Formulario de Contacto</h2></div>
					<form action="" method="" id="contactForm" class="sky-form">
						<fieldset>
							<div class="row">
								<section class="col col-6">
									<label class="label">Nombre</label>
									<label class="input">
										<i class="icon-append fa fa-user"></i>
										<input type="text" name="name" id="name">
									</label>
								</section>
								<section class="col col-6">
									<label class="label">E-mail</label>
									<label class="input">
										<i class="icon-append fa fa-envelope-o"></i>
										<input type="email" name="email" id="email">
									</label>
								</section>
							</div>
										
							<section>
								<label class="label">Tipo de Mensaje</label>
								<label class="select">
									<select name="contactType" id="contactType">
										<option value="Contacto">Contacto</option>
										<option value="Disconformidad">Disconformidad</option>
										<option value="Sugerencia">Sugerencia</option>
									</select>
									<i></i>
								</label>
							</section>

							<section>
								<label class="label">Asunto</label>
								<label class="input">
									<i class="icon-append fa fa-tag"></i>
									<input type="text" name="subject" id="subject">
								</label>
							</section>

							<section>
								<label class="label">Mensaje</label>
								<label class="textarea">
									<i class="icon-append fa fa-comment"></i>
									<textarea rows="4" name="message" id="message"></textarea>
								</label>
							</section>

							<section>
								<label class="checkbox"><input type="checkbox" id="copy" name="copy"><i></i>Enviar una copia a mi correo electrónico</label>
							</section>
						</fieldset>

						<footer>
							<button type="submit" class="btn-u">Enviar</button>
						</footer>

						<div class="message">
							<i class="rounded-x fa fa-check"></i>
							<p>Su mensaje fue enviado! Gracias :)</p>
						</div>
					</form>
				</div>
			</div><!--/row-->
		</div><!--/container-->
		<!--=== End Content Part ===-->

		<!--=== Footer ===-->
		<?php
			include('footer.php')
		?>
		<!--=== End Footer ===-->
	</div><!--/wrapepr-->

	<!-- JS Global Compulsory -->
	<script src="assets/plugins/jquery/jquery.min.js"></script>
	<script src="assets/plugins/jquery/jquery-migrate.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!-- JS Implementing Plugins -->
	<script src="assets/plugins/back-to-top.js"></script>
	<script src="assets/plugins/smoothScroll.js"></script>
	<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.form.min.js"></script>
	<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js"></script>
	<!-- JS Customization -->
	<script src="assets/js/custom.js"></script>
	<!-- JS Page Level -->
	<script src="assets/js/app.js"></script>
	<script src="assets/js/plugins/style-switcher.js"></script>
	<script src="assets/js/forms/page_contact_form.js"></script>
	<script src="https://www.gstatic.com/firebasejs/3.8.0/firebase.js"></script>
	<script type="text/javascript" src="assets/js/moment.min.js"></script>
	<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCDSb3wORiw36c9kGhpSVqjkTYtJpVp4l4&callback=initMap"></script>
	<script type="text/javascript" src="assets/js/contacto.js"></script>
	<!--[if lt IE 9]>
		<script src="assets/plugins/respond.js"></script>
		<script src="assets/plugins/html5shiv.js"></script>
		<script src="assets/plugins/placeholder-IE-fixes.js"></script>
		<script src="assets/plugins/sky-forms-pro/skyforms/js/sky-forms-ie8.js"></script>
		<![endif]-->
		<!--[if lt IE 10]>
		<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.placeholder.min.js"></script>
	<![endif]-->
</body>
</html>

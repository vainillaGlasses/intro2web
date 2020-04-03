
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<title>Artículos | ASODEC San José</title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico">

	<!-- Web Fonts -->
	<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin">

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

	<!-- CSS Theme -->
	<link rel="stylesheet" href="assets/css/theme-colors/default.css" id="style_color">
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

		<!--=== Breadcrumbs ===-->
		<div class="breadcrumbs">
			<div class="container">
				<h1 class="pull-left">Administrar Artículos</h1>
			</div>
		</div><!--/breadcrumbs-->
		<!--=== End Breadcrumbs ===-->

		<!--=== Content Part ===-->
		<div class="container content">
			<div class="row">
				<!-- Begin Content -->
				<div class="col-md-8 col-md-offset-2">
					<!-- Tabs -->
					<div class="tab-v1">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#agregarArticulo" data-toggle="tab">Agregar Artículo</a></li>
							<li><a href="#editarArticulo" data-toggle="tab">Editar Artículo</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane fade in active" id="agregarArticulo">
								<form action="#" id="formAgregarArticulo" class="sky-form">
									<header>Agregar Artículo</header>

									<fieldset>
										<div class="row">
											<section class="col col-9">
												<label class="label">Nombre del Artículo</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" id="nombre" name="nombre">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Foto del Artículo</label>
												<label for="file" class="input input-file">
													<div class="button"><input type="file" id="fotoArticulo" onchange="this.parentNode.nextSibling.value = this.value">Browse</div><input type="text" required readonly name="fotoArticulo">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Descripción</label>
												<label class="input">
													<i class="icon-append fa fa-file-text-o"></i>
													<input type="text" id="descripcion" name="descripcion">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Precio Normal</label>
												<label class="input">
													<i class="icon-append fa fa-money"></i>
													<input type="text" id="precio" name="precio">
												</label>
											</section>
										</div>
									</fieldset>


									<fieldset>
										<section>
											<label class="label">Seleccione las opciones que apliquen</label>
											<div class="inline-group">
												<label class="checkbox"><input type="checkbox" id="checkOferta" name="checkOferta"><i></i>El artículo está en oferta</label>
												<label class="checkbox"><input type="checkbox" id="checkEncargo" name="checkEncargo"><i></i>El artículo es por encargo</label>
											</div>
										</section>
									</fieldset>

									<fieldset id="descuento">
										<section class="col col-9">
												<label class="label">Precio en Descuento</label>
												<label class="input">
													<i class="icon-append fa fa-money"></i>
													<input type="text" id="precioDescuento" name="precioDescuento">
												</label>
											</section>
									</fieldset>

									<fieldset id="encargo">
										<section class="col col-9">
											<label class="label">Link de Formulario de Encargo</label>
											<label class="input">
												<i class="icon-append fa fa-globe"></i>
												<input type="text" id="linkEncargo" name="linkEncargo">
											</label>
										</section>

										<!--Debe ser fecha-->
										<section class="col col-9">
											<label class="label">Fecha límite de encargo</label>
											<label class="input">
												<i id="cal" class="icon-append fa fa-calendar"></i>
												<input type="text" id="fechaLimiteEncargo" name="fechaLimiteEncargo">
											</label>
										</section>
									</fieldset>




									<footer>
										<h3 id="uploadArticuloMsj"></h3>
										<button type="submit" class="btn-u">Agregar Artículo</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="editarArticulo">
								<form action="#" id="formEditarArticulo" class="sky-form">
									<header>Editar o Eliminar Artículo</header>

									<fieldset>
										<div class="row">										
											<section class="col col-9">
												<label class="label">Seleccione el Artículo a Editar</label>
												<label class="select">
													<select id="selectArticulos">
													</select>
													<i></i>
												</label>
											</section>
										</div>
									</fieldset>										

									<fieldset>
										<img class="img-responsive rounded center-block" id="verFotoArticulo" src="assets/img/art.jpg">
										<div class="row">
											<section class="col col-9">
												<label class="label">Nombre del Artículo</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" id="nombreEdit" name="nombreEdit">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Foto del Artículo</label>
												<label for="file" class="input input-file">
													<div class="button"><input type="file" id="fotoEditArticulo" onchange="this.parentNode.nextSibling.value = this.value">Browse</div><input type="text" readonly name="fotoEditArticulo">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Descripción</label>
												<label class="input">
													<i class="icon-append fa fa-file-text-o"></i>
													<input type="text" id="descripcionEdit" name="descripcionEdit">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Precio Normal</label>
												<label class="input">
													<i class="icon-append fa fa-money"></i>
													<input type="text" id="precioEdit" name="precioEdit">
												</label>
											</section>
										</div>
									</fieldset>


									<fieldset>
										<section>
											<label class="label">Seleccione las opciones que apliquen</label>
											<div class="inline-group">
												<label class="checkbox"><input type="checkbox" id="checkOfertaEdit" name="checkOfertaEdit"><i></i>El artículo está en oferta</label>
												<label class="checkbox"><input type="checkbox" id="checkEncargoEdit" name="checkEncargoEdit"><i></i>El artículo es por encargo</label>
											</div>
										</section>
									</fieldset>

									<fieldset id="descuentoEdit">
										<section class="col col-9">
												<label class="label">Precio en Descuento</label>
												<label class="input">
													<i class="icon-append fa fa-money"></i>
													<input type="text" id="precioDescuentoEdit" name="precioDescuentoEdit">
												</label>
											</section>
									</fieldset>

									<fieldset id="encargoEdit">
										<section class="col col-9">
											<label class="label">Link de Formulario de Encargo</label>
											<label class="input">
												<i class="icon-append fa fa-globe"></i>
												<input type="text" id="linkEncargoEdit" name="linkEncargoEdit">
											</label>
										</section>

										<!--Debe ser fecha-->
										<section class="col col-9">
											<label class="label">Fecha límite de encargo</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="fechaLimiteEncargoEdit" name="fechaLimiteEncargoEdit">
											</label>
										</section>
									</fieldset>




									<footer>
										<h3 id="uploadArticuloEditMsj"></h3>
										<button type="submit" class="btn-u">Editar Artículo</button>
										<button type="button" id="delArticulo" class="btn-u btn-u-red">Eliminar Artículo</button>
									</footer>
								</form>
							</div>
						</div>	
					</div>
					<!-- End Tabs-->
				</div>
				<!-- End Content -->
			</div>
		</div><!--/container-->
		<!--=== End Content Part ===-->

		<!--=== Footer ===-->
		<?php
			include('footer.php')
		?>
		<!--=== End Footer ===-->
	</div><!--/End Wrapepr-->

	<!--=== Style Switcher ===-->
	<i class="style-switcher-btn fa fa-cogs hidden-xs"></i>
	<div class="style-switcher animated fadeInRight">
		<div class="style-swticher-header">
			<div class="style-switcher-heading">Style Switcher</div>
			<div class="theme-close"><i class="icon-close"></i></div>
		</div>

		<div class="style-swticher-body">
			<!-- Theme Colors -->
			<div class="style-switcher-heading">Theme Colors</div>
			<ul class="list-unstyled">
				<li class="theme-default theme-active" data-style="default" data-header="light"></li>
				<li class="theme-blue" data-style="blue" data-header="light"></li>
				<li class="theme-orange" data-style="orange" data-header="light"></li>
				<li class="theme-red" data-style="red" data-header="light"></li>
				<li class="theme-light" data-style="light" data-header="light"></li>
				<li class="theme-purple last" data-style="purple" data-header="light"></li>
				<li class="theme-aqua" data-style="aqua" data-header="light"></li>
				<li class="theme-brown" data-style="brown" data-header="light"></li>
				<li class="theme-dark-blue" data-style="dark-blue" data-header="light"></li>
				<li class="theme-light-green" data-style="light-green" data-header="light"></li>
				<li class="theme-dark-red" data-style="dark-red" data-header="light"></li>
				<li class="theme-teal last" data-style="teal" data-header="light"></li>
			</ul>

			<!-- Theme Skins -->
			<div class="style-switcher-heading">Theme Skins</div>
			<div class="row no-col-space margin-bottom-20 skins-section">
				<div class="col-xs-6">
					<button data-skins="default" class="btn-u btn-u-xs btn-u-dark btn-block active-switcher-btn handle-skins-btn">Light</button>
				</div>
				<div class="col-xs-6">
					<button data-skins="dark" class="btn-u btn-u-xs btn-u-dark btn-block skins-btn">Dark</button>
				</div>
			</div>

			<hr>

			<!-- Layout Styles -->
			<div class="style-switcher-heading">Layout Styles</div>
			<div class="row no-col-space margin-bottom-20">
				<div class="col-xs-6">
					<a href="javascript:void(0);" class="btn-u btn-u-xs btn-u-dark btn-block active-switcher-btn wide-layout-btn">Wide</a>
				</div>
				<div class="col-xs-6">
					<a href="javascript:void(0);" class="btn-u btn-u-xs btn-u-dark btn-block boxed-layout-btn">Boxed</a>
				</div>
			</div>

			<hr>
		</div>
	</div><!--/style-switcher-->
	<!--=== End Style Switcher ===-->

	<!-- JS Global Compulsory -->
	<script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="assets/plugins/jquery/jquery-migrate.min.js"></script>
	<script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!-- JS Implementing Plugins -->
	<script type="text/javascript" src="assets/plugins/back-to-top.js"></script>
	<script type="text/javascript" src="assets/plugins/smoothScroll.js"></script>
	<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.maskedinput.min.js"></script>
	<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js"></script>
	<script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js"></script>
	
	<!-- JS Page Level -->
	<script type="text/javascript" src="assets/js/app.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<script type="text/javascript" src="assets/js/plugins/masking.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<!-- JS Customization -->
	<script type="text/javascript" src="assets/js/moment.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/3.8.0/firebase.js"></script>
	<script type="text/javascript" src="assets/js/articulos.js"></script>
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

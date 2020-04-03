
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<title>Administrar | ASODEC San José</title>

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
				<h1 class="pull-left">Administrar Página</h1>
			</div>
		</div><!--/breadcrumbs-->
		<!--=== End Breadcrumbs ===-->

		<!--=== Content Part ===-->
		<div class="container content">
			<div class="row">
				<!-- Begin Content -->
				<div class="col-md-12">
					<!-- Tabs -->
					<div class="tab-v1">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#agregarPersona" data-toggle="tab">Agregar Persona</a></li>
							<li><a href="#editarPersona" data-toggle="tab">Editar Persona</a></li>
							<li><a href="#resetear" data-toggle="tab">Resetear Categorías</a></li>
							<li><a href="#horarioTutoria" data-toggle="tab">Horario Tutorías</a></li>
							<li><a href="#horarioConsulta" data-toggle="tab">Horario Consulta</a></li>
							<li><a href="#editarPuesto" data-toggle="tab">Agregar/Editar Puestos</a></li>
							<li><a href="#editarCurso" data-toggle="tab">Agregar/Editar Cursos</a></li>
							<li><a href="#editarFooter" data-toggle="tab">Footer</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane fade in active" id="agregarPersona">
								<form action="#" id="formAgregarPersona" method="" class="sky-form">
									<header>Agregar Persona</header>

									<fieldset>
										<div class="row">
											<section class="col col-9">
												<label class="label">Nombre Completo</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" id="nombrePersona" name="nombrePersona">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Subir Foto</label>
												<label for="file" class="input input-file">
													<div class="button"><input type="file" id="fotoPersona" onchange="this.parentNode.nextSibling.value = this.value;">Browse</div><input type="text" required readonly name="fotoPersona">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Telefono</label>
												<label class="input">
													<i class="icon-append fa fa-phone"></i>
													<input placeholder="Dejar en blanco si es necesario" type="text" id="telefono" name="telefono">
												</label>
											</section>										

											<section class="col col-9">
												<label class="label">Correo</label>
												<label class="input">
													<i class="icon-append fa fa-globe"></i>
													<input placeholder="Dejar en blanco si es necesario" type="email" id="correo" name="correo">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Facebook</label>
												<label class="input">
													<i class="icon-append fa fa-globe"></i>
													<input placeholder="Dejar en blanco si es necesario" type="url" id="facebook" name="facebook">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Descripción Personal</label>
												<label class="input">
													<i class="icon-append fa fa-file-text-o"></i>
													<input type="text" id="descripcion" name="descripcion">
												</label>
											</section>

										</div>
									</fieldset>


									<fieldset>
										<section>
											<label class="label">Seleccione la o las Categorías</label>
											<div class="inline-group">
												<label class="checkbox"><input id="checkAsocia" type="checkbox" name="checkAsocia"><i></i>Miembro de la Asociación Actual</label>
												<label class="checkbox"><input id="checkAsistente" type="checkbox" name="checkAsistente"><i></i>Asistente</label>
												<label class="checkbox"><input id="checkTutor" type="checkbox" name="checkTutor"><i></i>Tutor</label>
											</div>
										</section>
									</fieldset>

									
									<fieldset id="puesto">
										<section class="col col-9">
											<label class="label">Puesto en la ASODEC</label>
											<label class="select">
												<select id="puestoSelect" name="puestoSelect">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción en ASODEC</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descAsocia" name="descAsocia">
											</label>
										</section>
									</fieldset>

									<fieldset id="asistencia">
										<section class="col col-9">
											<label class="label">Cursos de Asistencia</label>
											<label class="select select-multiple">
												<select id="asisSelectAddPersona" name="asisSelectAddPersona" multiple="">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción como Asistente</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descAsistencia" name="descAsistencia">
											</label>
										</section>									
									</fieldset>

									<fieldset id="tutoria">
										<section class="col col-9">
											<label class="label">Cursos de Tutoría</label>
											<label class="select select-multiple">
												<select id="tutoSelectAddPersona" name="tutoSelectAddPersona" multiple="">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción como Tutor(a)</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descTutoria" name="descTutoria">
											</label>
										</section>										
									</fieldset>

									<footer>
										<h3 id="uploadPersonaMsj"></h3>
										<button type="submit" class="btn-u">Agregar Persona</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="editarPersona">
								<form action="#" id="formEditarPersonas" class="sky-form">
									<header>Editar Persona</header>

									<fieldset>
										<div class="row">										
											<section class="col col-9">
												<label class="label">Seleccione la Persona a Editar</label>
												<label class="select">
													<select id="selectPersonas">
													</select>
													<i></i>
												</label>
											</section>
										</div>
									</fieldset>

									<fieldset>

										<img class="img-responsive rounded center-block" src="assets/img/user.jpg" id="fotoPersonaEdit" alt="">

										<fieldset>
										<div class="row">
											<section class="col col-9">
												<label class="label">Nombre Completo</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" id="editNombrePersona" name="editNombrePersona">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Subir Foto</label>
												<label for="file" class="input input-file">
													<div class="button"><input type="file" id="editFotoPersona" onchange="this.parentNode.nextSibling.value = this.value;">Browse</div><input type="text" readonly name="editFotoPersona">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Telefono</label>
												<label class="input">
													<i class="icon-append fa fa-phone"></i>
													<input placeholder="Dejar en blanco si es necesario" type="text" id="editTelefono" name="editTelefono">
												</label>
											</section>										

											<section class="col col-9">
												<label class="label">Correo</label>
												<label class="input">
													<i class="icon-append fa fa-globe"></i>
													<input placeholder="Dejar en blanco si es necesario" type="email" id="editCorreo" name="editCorreo">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Facebook</label>
												<label class="input">
													<i class="icon-append fa fa-globe"></i>
													<input placeholder="Dejar en blanco si es necesario" type="url" id="editFacebook" name="editFacebook">
												</label>
											</section>

											<section class="col col-9">
												<label class="label">Descripción Personal</label>
												<label class="input">
													<i class="icon-append fa fa-file-text-o"></i>
													<input type="text" id="editDescripcion" name="editDescripcion">
												</label>
											</section>

										</div>
									</fieldset>


									<fieldset>
										<section>
											<label class="label">Seleccione la o las Categorías</label>
											<div class="inline-group">
												<label class="checkbox"><input id="checkAsociaEdit" type="checkbox" name="checkAsociaEdit"><i></i>Miembro de la Asociación Actual</label>
												<label class="checkbox"><input id="checkAsistenteEdit" type="checkbox" name="checkAsistenteEdit"><i></i>Asistente</label>
												<label class="checkbox"><input id="checkTutorEdit" type="checkbox" name="checkTutorEdit"><i></i>Tutor</label>
											</div>
										</section>
									</fieldset>

									
									<fieldset id="puestoEdit">
										<section class="col col-9">
											<label class="label">Puesto en la ASODEC</label>
											<label class="select">
												<select id="puestoSelectEdit" name="puestoSelectEdit">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción en ASODEC</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descAsociaEdit" name="descAsociaEdit">
											</label>
										</section>
									</fieldset>

									<fieldset id="asistenciaEdit">
										<section class="col col-9">
											<label class="label">Cursos de Asistencia</label>
											<label class="select select-multiple">
												<select id="asisSelectEditPersona" name="asisSelectEditPersona" multiple="">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción como Asistente</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descAsistenciaEdit" name="descAsistenciaEdit">
											</label>
										</section>									
									</fieldset>

									<fieldset id="tutoriaEdit">
										<section class="col col-9">
											<label class="label">Cursos de Tutoría</label>
											<label class="select select-multiple">
												<select id="tutoSelectEditPersona" name="tutoSelectEditPersona" multiple="">
												</select>
												<i></i>
											</label>
										</section>
										<section class="col col-9">
											<label class="label">Descripción como Tutor(a)</label>
											<label class="input">
												<i class="icon-append fa fa-file-text-o"></i>
												<input type="text" id="descTutoriaEdit" name="descTutoriaEdit">
											</label>
										</section>										
									</fieldset>
									

									<footer>
										<h3 id="uploadEditPersonaMsj"></h3>
										<button type="submit" class="btn-u">Editar Persona</button>
										<button id="delPersona" type="button" class="btn-u btn-u-red">Borrar Persona</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="resetear">
								<form action="#" id="sky-form" class="sky-form">
									<header>Resetear Categorías</header>
									<fieldset>
									<h3>Al resetear cada categoría se elimina de la categoría a todas las personas pertenecientes a ella. Útil al cambiar el semestre si muchos estudiantes cambian su puesto.</h3>								
									<div class="row">
										<section>
											<button id="resetAsocia" type="button" class="btn-u btn-u-red">Resetear Asociación</button>
										</section>
									</div>

									<div class="row">
										<section>
											<button id="resetTutorias" type="button" class="btn-u btn-u-red">Resetear Tutorías</button>
										</section>
									</div>

									<div class="row">
										<section>
											<button id="resetAsistencias" type="button" class="btn-u btn-u-red">Resetear Asistencias</button>
										</section>
									</div>

									</fieldset>
								</form>
							</div>


							<div class="tab-pane fade" id="horarioTutoria">
								<form action="#" id="formHorarioTutoria" class="sky-form">
									<header>Horario Actual: </header>
									<fieldset>
									<img class="img-responsive rounded center-block" id="imgHorarioTutoria" src="" alt="">
									</fieldset>
									<header>Cambiar Horario</header>
									<fieldset>									

										<section>
											<label class="label">Seleccione el nuevo horario</label>
											<label for="file" class="input input-file">
											<div class="button"><input type="file" id="nuevoHTutoria" onchange="this.parentNode.nextSibling.value = this.value">Browse</div><input type="text" id="nuevoHorarioTutoria" required readonly>
											</label>
										</section>
										<h3 id="uploadTutoriaMsj"></h3>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u">Actualizar Horario</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="horarioConsulta">
								<form action="#" id="formHorarioConsulta" class="sky-form">
									<header>Horario Actual: </header>
									<fieldset>
									<img class="img-responsive rounded center-block" id="imgHorarioConsulta" src="" alt="">
									</fieldset>
									<header>Cambiar Horario</header>
									<fieldset>									

										<section>
											<label class="label">Seleccione el nuevo horario</label>
											<label for="file" class="input input-file">
											<div class="button"><input type="file" id="nuevoHConsulta" onchange="this.parentNode.nextSibling.value = this.value">Browse</div><input type="text" name="nuevoHorarioConsulta" required readonly>
											</label>
										</section>
										<h3 id="uploadConsultaMsj"></h3>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u">Actualizar Horario</button>
									</footer>
								</form>
							</div>



							<!-- Datepicker Forms -->
							<div class="tab-pane fade" id="horario">
								<form action="#" id="sky-form" class="sky-form">
									<header>Horario Actual: </header>
									<fieldset>
									<img class="img-responsive rounded center-block" src="tutorias.png" alt="">
									</fieldset>
									<header>Cambiar Horario</header>
									<fieldset>									

										<section>
											<label class="label">Seleccione el nuevo horario</label>
											<label for="file" class="input input-file">
											<div class="button"><input type="file" id="file" onchange="this.parentNode.nextSibling.value = this.value">Browse</div><input type="text" required readonly>
											</label>
										</section>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u btn-u-default">Submit</button>
									</footer>
								</form>
							</div>
							<!-- End Datepicker Forms -->

							<div class="tab-pane fade" id="editarPuesto">
								<form action="#" id="formEditarPuestos" class="sky-form">
									<header>Agregar o Editar Puesto</header>

									<fieldset>

										<div class="row">
											<h2>Seleccione un Puesto para Editar o solo ingrese el nombre del nuevo Puesto</h2>
											<section class="col col-9">
												<label class="label">Puesto a Editar</label>
												<label class="select">
													<select name="selectPuesto" id="selectPuestos">
														<option value="0">Agregar un Puesto</option>
													</select>
													<i></i>
												</label>
											</section>
											<section class="col col-9">
												<label class="label">Nombre del Puesto</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input id="nombrePuesto" type="text" name="nombrePuesto">
												</label>
											</section>

										</div>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u">Aceptar</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="editarCurso">
								<form action="#" id="formEditarCursos" class="sky-form">
									<header>Agregar o Editar Curso</header>

									<fieldset>

										<div class="row">
											<h2>Seleccione un Curso para Editar o solo ingrese el nombre del nuevo curso</h2>
											<section class="col col-9">
												<label class="label">Curso a Editar</label>
												<label class="select">
													<select name="selectCursos" id="selectCursos">
														<option value="0">Agregar un Curso</option>
													</select>
													<i></i>
												</label>
											</section>
										</div>

										<div class="row">
											<section class="col col-9">
												<label class="label">Nombre del Curso</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="nombreCurso" id="nombreCurso">
												</label>
											</section>

										</div>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u">Aceptar</button>
									</footer>
								</form>
							</div>

							<div class="tab-pane fade" id="editarFooter">
								<form action="#" id="formFooter" class="sky-form">
									<header>Editar Footer</header>

									<fieldset>

										<div class="row">
											<h2>Edite el texto del footer</h2>
											<section class="col col-9">
												<label class="label">Texto Footer</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input id="textoFooter" type="text" name="textoFooter">
												</label>
											</section>

										</div>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u">Aceptar</button>
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
	<script type="text/javascript" src="assets/js/additional-methods.js"></script>
	
	<!-- JS Page Level -->
	<script type="text/javascript" src="assets/js/app.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<script type="text/javascript" src="assets/js/plugins/masking.js"></script>
	<script type="text/javascript" src="assets/js/plugins/datepicker.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<!-- JS Customization -->
	<script src="https://www.gstatic.com/firebasejs/3.8.0/firebase.js"></script>
	<script type="text/javascript" src="assets/js/moment.min.js"></script>
	<script type="text/javascript" src="assets/js/administrar.js"></script>
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


<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<title>Advanced Forms | Unify - Responsive Website Template</title>

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
				<h1 class="pull-left">Editar Inicio</h1>
			</div>
		</div><!--/breadcrumbs-->
		<!--=== End Breadcrumbs ===-->

		<!--=== Content Part ===-->
		<div class="container content">
			<div class="row">
				<!-- Begin Content -->
				<div class="col-md-9">
					<!-- Tabs -->
					<div class="tab-v1">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#home-1" data-toggle="tab">Datepicker Forms</a></li>
							<li><a href="#profile-1" data-toggle="tab">Validation Forms</a></li>
							<li><a href="#messages-1" data-toggle="tab">Masking Forms</a></li>
						</ul>
						<div class="tab-content">
							<!-- Datepicker Forms -->
							<div class="tab-pane fade in active" id="home-1">
								<form action="#" id="sky-form" class="sky-form">
									<header>Datepicker</header>
									<fieldset>
										<section>
											<label class="label">Select single date</label>
											<label class="input">
												<i class="icon-append fa fa-calendar"></i>
												<input type="text" name="date" id="date">
											</label>
										</section>

										<label class="label">Select date range</label>
										<div class="row">
											<section class="col col-6">
												<label class="input">
													<i class="icon-append fa fa-calendar"></i>
													<input type="text" name="start" id="start" placeholder="Start date">
												</label>
											</section>
											<section class="col col-6">
												<label class="input">
													<i class="icon-append fa fa-calendar"></i>
													<input type="text" name="finish" id="finish" placeholder="Expected finish date">
												</label>
											</section>
										</div>
									</fieldset>

									<fieldset>
										<section>
											<label class="label">Select single date with inline datepicker</label>
											<div id="inline"></div>
										</section>

										<label class="label">Select date range with inline datepickers</label>
										<div class="row">
											<section class="col col-6">
												<div id="inline-start"></div>
											</section>
											<section class="col col-6">
												<div id="inline-finish"></div>
											</section>
										</div>
									</fieldset>
								</form>
							</div>
							<!-- End Datepicker Forms -->

							<!-- Validation Forms -->
							<div class="tab-pane fade" id="profile-1">
								<form action="#" id="sky-form1" class="sky-form">
									<header>Available validation rules</header>

									<fieldset>
										<div class="row">
											<section class="col col-6">
												<label class="label">Required field</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="required">
												</label>
											</section>
											<section class="col col-6">
												<label class="label">Email validation</label>
												<label class="input">
													<i class="icon-append fa fa-envelope"></i>
													<input type="email" name="email">
												</label>
											</section>
										</div>

										<div class="row">
											<section class="col col-6">
												<label class="label">URL validation</label>
												<label class="input">
													<i class="icon-append fa fa-globe"></i>
													<input type="url" name="url">
												</label>
											</section>
											<section class="col col-6">
												<label class="label">Date validation</label>
												<label class="input">
													<i class="icon-append fa fa-calendar"></i>
													<input type="text" name="date">
												</label>
											</section>
										</div>

										<div class="row">
											<section class="col col-4">
												<label class="label">Minimum length</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="min">
												</label>
											</section>
											<section class="col col-4">
												<label class="label">Maximum length</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="max">
												</label>
											</section>
											<section class="col col-4">
												<label class="label">Range length</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="range">
												</label>
											</section>
										</div>
									</fieldset>

									<fieldset>
										<div class="row">
											<section class="col col-6">
												<label class="label">Digits validation</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="digits">
												</label>
											</section>
											<section class="col col-6">
												<label class="label">Decimal number validation</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="number">
												</label>
											</section>
										</div>

										<div class="row">
											<section class="col col-4">
												<label class="label">Minimum value</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="minVal">
												</label>
											</section>
											<section class="col col-4">
												<label class="label">Maximum value</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="maxVal">
												</label>
											</section>
											<section class="col col-4">
												<label class="label">Range value</label>
												<label class="input">
													<i class="icon-append fa fa-asterisk"></i>
													<input type="text" name="rangeVal">
												</label>
											</section>
										</div>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u btn-u-default">Submit</button>
										<button type="button" class="btn-u" onclick="window.history.back();">Back</button>
									</footer>
								</form>
							</div>
							<!-- End Validation Forms -->

							<!-- Masking Forms -->
							<div class="tab-pane fade" id="messages-1">
								<form action="#" id="sky-form2" class="sky-form">
									<header>Available masking rules</header>

									<fieldset>
										<section>
											<label class="label">Date masking</label>
											<label class="input">
												<i class="icon-append fa fa-calendar"></i>
												<input type="text" name="date" id="date1">
											</label>
										</section>

										<section>
											<label class="label">Phone masking</label>
											<label class="input">
												<i class="icon-append fa fa-phone"></i>
												<input type="tel" name="phone" id="phone">
											</label>
										</section>

										<section>
											<label class="label">Credit card masking</label>
											<label class="input">
												<i class="icon-append fa fa-credit-card"></i>
												<input type="text" name="card" id="card">
											</label>
										</section>

										<section>
											<label class="label">Serial number masking</label>
											<label class="input">
												<i class="icon-append fa fa-asterisk"></i>
												<input type="text" name="serial" id="serial">
											</label>
										</section>

										<section>
											<label class="label">Tax ID masking</label>
											<label class="input">
												<i class="icon-append fa fa-briefcase"></i>
												<input type="text" name="tax" id="tax">
											</label>
										</section>
									</fieldset>

									<footer>
										<button type="submit" class="btn-u btn-u-default">Submit</button>
										<button type="button" class="btn-u" onclick="window.history.back();">Back</button>
									</footer>
								</form>
							</div>
							<!-- End Masking Forms -->
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
	<!-- JS Customization -->
	<script type="text/javascript" src="assets/js/custom.js"></script>
	<!-- JS Page Level -->
	<script type="text/javascript" src="assets/js/app.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<script type="text/javascript" src="assets/js/plugins/masking.js"></script>
	<script type="text/javascript" src="assets/js/plugins/datepicker.js"></script>
	<script type="text/javascript" src="assets/js/plugins/validation.js"></script>
	<script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function() {
			App.init();
			Masking.initMasking();
			Datepicker.initDatepicker();
			Validation.initValidation();
			StyleSwitcher.initStyleSwitcher();
		});
	</script>
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

var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#registroForm").validate({                   
	            // Rules for form validation
	            rules:
	            {
	            	nombre:
	            	{
	            		required: true
	            	},
	            	apellidouno:
	            	{
	            		required: true
	            	},
	            	apellidodos:
	            	{
	            		required: true
	            	},
	            	genre:
	            	{
	            		required: true
	            	},
	            	usuario:
	            	{
	            		required: true,
	            		minlength: 5
	            	},
	                correo:
	                {
	                    required: true,
	                    email: true
	                },
	                contrasenna:
	                {
	                    required: true,
	                    minlength: 7,
	                    pwcheck: true
	                },
	                birthday:
	                {
	            		required: true
	            	},
	                contrasennaVerificada:
	                {
	                	required: true,
	                	equalTo: '#password'
	                },
	                'terminos[]':
	                {
	                	required: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	            	nombre:
	            	{
	            		required: 'Por favor, ingrese el nombre completo'
	            	},
	            	apellidouno:
	            	{
	            		required: 'Por favor, ingrese el nombre completo'
	            	},
	            	apellidodos:
	            	{
	            		required: 'Por favor, ingrese el nombre completo'
	            	},
	            	usuario:
	            	{
	            		required: 'Por favor, ingrese un nombre de usuario',
	            		minlength: 'La longitud mínima del nombre de usuario es de 5 caracteres'
	            	},	      
	                correo:
	                {
	                    required: 'Por favor, ingrese su correo electrónico',
	                    email: 'Por favor, ingrese un correo electrónico válido'
	                },
	                birthday:{
	                	required: 'Por favor, ingrese su fecha de nacimiento'
	                },
	                contrasenna:
	                {
	                    required: 'Por favor, ingrese su contraseña',
	                    minlength: 'Su contraseña debe ser de longitud mínima 7',
	                    pwcheck: 'Su contraseña debe consistir de mínimo 6 caracteres y 1 dígito'
	                },
	                contrasennaVerificada:
	                {
	                	required: 'Porfavor, verifique su contraseña',
	                	equalTo: 'Las contraseñas no coinciden'
	                },
	                'terminos[]':
	                {
	                	required: 'Debe aceptar los términos y condiciones'
	                }
	            },   
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
					   
				},
				submitHandler: function(form)
				{
					alert("Registro exitoso");
					window.location.replace('page_login1.html');
				}
	        });

	        $.validator.addMethod("pwcheck", function(value) {
			   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
			       && /[a-z]/.test(value) // has a lowercase letter
			       && /\d/.test(value) // has a digit
			});
        }

    };
}();
var PageContactForm = function () {

    return {
        
        //Contact Form
        initPageContactForm: function () {
	        // Validation
	        $("#contactForm").validate({
	            // Rules for form validation
	            rules:
	            {
	                name:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                subject:
	                {
	                	required: true
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 10
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                name:
	                {
	                    required: 'Por favor, ingrese su nombre.',
	                },
	                email:
	                {
	                    required: 'Por favor, ingrese su correo electrónico',
	                    email: 'Por favor, ingrese un correo electrónico válido'
	                },
	                message:
	                {
	                    required: 'Por favor, ingrese su mensaje',
	                    minlength: 'Longitud mínima: 10 caracteres'
	                }
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#sky-form3 button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#sky-form3").addClass('submited');
	                    }
	                });
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
    
}();
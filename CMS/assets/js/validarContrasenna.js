var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#loginForm").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                correo:
	                {
	                    required: true,
	                    email: true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	      
	                correo:
	                {
	                    required: 'Por favor, ingrese su correo electrónico',
	                    email: 'Por favor, ingrese un correo electrónico válido'
	                }
	            },   
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
					   
				},
				submitHandler: function(form)
				{
					window.location.replace('page_login1.html');
				}
	        });
        }

    };
}();
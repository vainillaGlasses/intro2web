var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#formAgregarDocumentos").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                nombreDocumento:
	                {
	                    required: true
	                },
	                descripcionDocumento:
	                {
	                    required: true
	                },
	                linkDocumento:
	                {
	                    required: true,
	                    url: true
	                }	                
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                nombreDocumento:
	                {
	                    required: 'Ingrese el nombre del documento.'
	                },
	                descripcionDocumento:
	                {
	                    required: 'Ingrese la descripción del documento.'
	                },
	                linkDocumento:
	                {
	                    required: 'Ingrese el link de la ubicación del documento.'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });


	        $("#formEditarContacto").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                direccion:
	                {
	                    required: true
	                },
	                correo:
	                {
	                    required: true,
	                    email: true
	                },
	                tel:
	                {
	                    required: true,
	                    digits: true
	                },
	                sitioWeb:
	                {
	                    required: true,
	                    url: true
	                },
	                facebook:
	                {
	                    required: true,
	                    url: true
	                },
	                instagram:
	                {
	                    required: true,
	                    url: true
	                }               
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                direccion:
	                {
	                    required: "Ingrese una dirección"
	                },
	                correo:
	                {
	                    required: "Ingrese un correo electrónico",
	                    email: "Correo electrónico inválido"
	                },
	                tel:
	                {
	                    required: "Ingrese un número telefónico",
	                    digits: "Ingrese solo dígitos"
	                },
	                sitioWeb:
	                {
	                    required: "Ingrese el sitio web",
	                    url: "Dirección web inválida"
	                },
	                facebook:
	                {
	                    required: "Ingrese la dirección del facebook",
	                    url: "Dirección web inválida"
	                },
	                instagram:
	                {
	                    required: "Ingrese la dirección del instagram",
	                    url: "Dirección web inválida"
	                } 
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


//Prueba de subida de documento y del tiempo
	function writeDocData(nombreDoc, descrip, link) {
		firebase.database().ref('Documentos/').push({
		documento: link,
		fecha: moment().valueOf(),
		nombre: nombreDoc,
		descripcion: descrip
		});
	}

writeDocData("Memorando: Solicitud de Apoyo a la Asamblea General de Estudiantes", "Este es el documento prueba", "https://drive.google.com/file/d/0B_KrgJl14T_IYXg3X0pDWE0wb00/view");
writeDocData("Estatuto 2014-2015", "Este es el documento prueba", "https://drive.google.com/file/d/0B_KrgJl14T_ILTlYbmZQS0lxNjg/view");
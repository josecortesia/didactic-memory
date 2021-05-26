function validar_register (first_namer,last_namer,username,email,passwd) {

	//$("#form_register #register").html('<i class="fa fa-spinner fa-spin" style="font-size:20px"></i>').addClass('disabled');

	var parametros = {
	    "first_name" : first_namer,
	    "last_name"  : last_namer,
	    "username"	  : username,
	    "email"		  : email,
	    "password"	  : passwd,
	};

	$.ajax({
		url: '/app_server/register.php',
		dataType: 'json',
		data: {
			method: 'POST',
			url: 'http://api.thirdeye.cl/users/',
			data: parametros,
		},
	   	statusCode: {
		    201: function (resp) {
					console.log(resp);
					alert('201');
					$("#mensaje").html(
						'<div class="alert alert-success alert-dismissible">'
						    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
				                +'<h6><i class="icon fa fa-check"></i>Usuario creado exitosamente, puede iniciar sesión haciendo clic <a href="index.php">aqui</a></h6>'
				        +'</div>'
				    );
					$("#form_register #register .fa-spin").remove();
					$("#form_register #register").html('Registrarse');
					$("#form_register #register").removeClass('disabled');
		      },
			400: function (resp) {
				console.log(resp);
				$("#mensaje").html(
					'<div class="alert alert-danger alert-dismissible">'
						+'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
						+'<h6><i class="icon fa fa-ban"></i>'+resp.responseJSON.username+'</h6>'
					+'</div>'
				);
				$("#form_register #register .fa-spin").remove();
				$("#form_register #register").html('Registrarse');
				$("#form_register #register").removeClass('disabled');
			}
	    }


	});
}

//documento cargado
$(document).ready(function() {
	//funcion click
	$('#register').click(function() {
		var first_namer = $("#first_namer").val();
		var last_namer = $("#last_namer").val();
		var username = $("#username").val();
		var email = $("#email").val();
		var passwd = $("#passwd").val();
		if (first_namer == "" || last_namer == "" || username == "" || email == "" || passwd == "") {
			$("#mensaje").html(
				'<div class="alert alert-danger alert-dismissible">'
				    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                        +'<h6><i class="icon fa fa-ban"></i>Campos vacios!</h6>'
                +'</div>'
              );
		}else{
			validar_register(first_namer,last_namer,username,email,passwd);
		}
	});

});
function validar_login (user,pass) {
	
	$("#form_login #entrar").html('<i class="fa fa-spinner fa-spin" style="font-size:20px"></i>').addClass('disabled');
	
	$.ajax({
		url: '/app_server/server.php',
		//dataType: 'json',
		data: {
			method: 'GET',
			url: 'http://api.thirdeye.cl/users/',
			data: false,
			user: user,
			pass: pass,
	},
   	statusCode: {
      200: function (resp) {
      	console.log(resp);
/*         $("#mensaje").html(
			'<div class="alert alert-success alert-dismissible">'
			    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
	                +'<h6><i class="icon fa fa-check"></i>Inicio de sesión exitoso</h6>'
	        +'</div>'
	    );
		$("#form_login #entrar .fa-spin").remove();
		$("#form_login #entrar").html('Ingresar');
		$("#form_login #entrar").removeClass('disabled');
		window.location.href = 'main.php';*/
      },
      403: function (resp) {
      	console.log(resp);
/*		$("#mensaje").html(
			'<div class="alert alert-danger alert-dismissible">'
				+'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
				+'<h6><i class="icon fa fa-ban"></i>'+resp.responseJSON.detail+'</h6>'
			+'</div>'
		);
		$("#form_login #entrar .fa-spin").remove();
		$("#form_login #entrar").html('Ingresar');
		$("#form_login #entrar").removeClass('disabled');*/
      },
	  404: function (resp) {
	    alert('404');
	  }
   },
   });
}

//documento cargado
$(document).ready(function() {
	//funcion click
	$('#entrar').click(function() {
		var user = $("#user").val();
		var pass = $("#pass").val();
		if (user == "" || pass == "") {
			$("#mensaje").html(
				'<div class="alert alert-danger alert-dismissible">'
				    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                        +'<h6><i class="icon fa fa-ban"></i>Campos vacios!</h6>'
                +'</div>'
              );
		}else{
			validar_login(user,pass);
		}
	});

});
